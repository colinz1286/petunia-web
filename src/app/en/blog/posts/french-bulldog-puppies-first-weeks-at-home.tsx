'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function FrenchBulldogPuppiesFirstWeeksAtHome() {
  const locale = useLocale();

  const title = 'French Bulldog Puppies: The First Few Weeks at Home';
  const date = 'August 28, 2025';
  const categories = ['owner', 'breed_specific_guides', 'breeder'] as const;

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
    'A practical, evidence-informed guide for the first nights and first month with a French Bulldog puppy: what to buy, safe home setup, feeding and food transitions, crate and potty training, socialization with health safeguards, brachycephalic safety, travel, the first veterinary visit, record-keeping, and week-by-week checklists. Designed for calm, confident starts.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
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
            <li><a href="#shopping" className="underline hover:opacity-80">Shopping List</a></li>
            <li><a href="#home-setup" className="underline hover:opacity-80">Home Setup</a></li>
            <li><a href="#food" className="underline hover:opacity-80">Food & Transition</a></li>
            <li><a href="#first-48" className="underline hover:opacity-80">First 48 Hours</a></li>
            <li><a href="#crate-potty" className="underline hover:opacity-80">Crate & Potty</a></li>
            <li><a href="#sleep" className="underline hover:opacity-80">Sleep & Night Routine</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health & Vet Visit</a></li>
            <li><a href="#frenchie-specific" className="underline hover:opacity-80">Frenchie-Specific Safety</a></li>
            <li><a href="#socialization" className="underline hover:opacity-80">Socialization</a></li>
            <li><a href="#teething" className="underline hover:opacity-80">Teething & Chewing</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training Plan</a></li>
            <li><a href="#travel" className="underline hover:opacity-80">Travel & Car Safety</a></li>
            <li><a href="#templates" className="underline hover:opacity-80">Checklists & Templates</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <p className="mb-2">
              Bring your French Bulldog puppy home to a calm, puppy-proofed space. Keep food the same as the breeder or rescue for at least a week and transition slowly to new food over 7–10 days if desired. Schedule a routine veterinary appointment within 48–72 hours for a wellness exam and to align on vaccines, deworming, and preventive care. Use a flat, well-fitted harness rather than a neck collar for leash work. Prioritize short, positive routines: frequent outdoor potty breaks, short crate sessions, gentle socialization, and careful temperature control. Expect naps, night wakeups, and normal adjustment stress. Consistency solves most early problems.
            </p>
            <p>
              Immediate red flags that require calling your veterinarian: repeated vomiting, watery diarrhea that lasts more than a day, refusal to eat for more than one mealtime, labored breathing, blue or very pale gums, collapse, or any sudden change in behavior that worries you.
            </p>
          </div>
        </section>

        {/* SHOPPING LIST */}
        <section id="shopping" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What to Buy Before Pickup: The Practical Shopping List</h2>
          <p className="mb-3">
            You do not need a boutique haul. A thoughtful, minimal kit covers comfort, safety, hygiene, and training. Choose items sized for a small, brachycephalic puppy and plan to upgrade as your puppy grows. Where possible, select categories rather than chasing brand claims. You can store this kit and your setup notes in Petunia so that family members and sitters follow the same blueprint.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Essentials</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Crate</strong> with divider (wire or hard-sided) that fits adult size but can be reduced for training. The goal is a comfortable, den-like space that is not so large it invites potty accidents.</li>
            <li><strong>Exercise pen</strong> (x-pen) or safe play area gates to manage freedom. Management is kinder than constant correction.</li>
            <li><strong>Flat, Y-front harness</strong> for a brachycephalic puppy. Avoid pressure on the neck. Start leash skills early using a light leash.</li>
            <li><strong>Food and water bowls</strong> that are shallow and stable. Many Frenchie families prefer slightly elevated, non-tip bowls. Avoid deep narrow bowls that encourage gulping.</li>
            <li><strong>Puppy food</strong> (complete and balanced for growth). Start with the exact food used by the breeder or rescue. Buy at least a two-week supply.</li>
            <li><strong>Small training treats</strong>, soft and easy to swallow. You can allocate part of daily food to training to control calories.</li>
            <li><strong>Puppy-safe chews</strong> sized for small jaws: rubber chew toys, soft nylon chews rated for puppies, and frozen damp washcloth twists for teething relief. Supervise all chew sessions.</li>
            <li><strong>Bedding</strong> that is washable and not overly plush while potty training. Have two sets to swap and wash.</li>
            <li><strong>Cleaning kit</strong>: enzymatic cleaner for accidents, unscented wipes, extra laundry detergent, and a roll of paper towels.</li>
            <li><strong>Grooming basics</strong>: soft rubber curry mitt or hound glove, microfiber towels, dog-safe fragrance-free shampoo, cotton pads for facial fold drying as advised by your veterinarian.</li>
            <li><strong>Health folder</strong> or digital record: vaccine dates, deworming dates, microchip number, breeder or rescue contact, and insurance details if applicable.</li>
            <li><strong>Car restraint</strong>: travel crate that can be secured or a crash-tested harness for short rides. Never allow free roaming in the car.</li>
            <li><strong>Room thermometer</strong> if your home runs warm. Brachycephalic puppies are heat sensitive; knowing the real temperature matters.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Nice-to-Have (Highly Useful)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Non-slip mats or yoga mats for flooring in play zones to protect joints and improve traction.</li>
            <li>Snuffle mat and food puzzle toys to slow eating and provide low-arousal enrichment.</li>
            <li>White noise machine or fan near the crate to support restful sleep and muffle outside sounds.</li>
            <li>Digital kitchen scale for tracking food portions and growth with veterinary guidance.</li>
            <li>HEPA air purifier for bedrooms or living spaces, helpful for families with allergies and for general air quality.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Save your gear list with receipts and photos in Petunia. If something fails or needs an exchange, you will not guess which size model you bought. You can also share this list with your sitter or daycare for continuity.
          </div>
        </section>

        {/* HOME SETUP */}
        <section id="home-setup" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Setup: Calm, Contained, Predictable</h2>
          <p className="mb-3">
            The first few weeks are a logistics project. Great outcomes come from shaping the environment so that success is easy. Think in zones: sleep, play, potty access, feeding, and quiet time. A French Bulldog puppy will likely nap a lot and then sprint through short bursts of curiosity. Safe containment protects learning and your home.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Quiet landing zone:</strong> set up the crate in a low-traffic area. Put a cover over part of a wire crate to create a darker den feeling while preserving airflow.</li>
            <li><strong>Playpen adjacency:</strong> attach an x-pen to the crate or set it nearby. Rotate two or three toys to prevent overstimulation.</li>
            <li><strong>Potty path:</strong> create the shortest, clearest route to the chosen outdoor potty spot. Keep shoes and a leash by the door and a small flashlight nearby for night trips.</li>
            <li><strong>Temperature control:</strong> keep rooms comfortable and avoid heat build-up. Use fans and shades. Never crate near heat sources.</li>
            <li><strong>Family rules:</strong> teach children and guests how to greet a puppy calmly. No face-to-face hugging or lifting without support. Set boundaries on furniture until potty training is reliable.</li>
            <li><strong>Stairs and jumping:</strong> limit stairs and any leaping on or off furniture. Frenchie joints will thank you. Use ramps if needed.</li>
          </ul>
          <p>
            A predictable layout paired with short routines makes life much easier: out to potty after waking, after eating, after play, and before bed; calm crate breaks between activities; and structured naps to prevent over-tired tantrums.
          </p>
        </section>

        {/* FOOD & TRANSITION */}
        <section id="food" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Food: What to Buy, How to Transition, and Why Pace Matters</h2>
          <p className="mb-3">
            For the first week, feed the exact diet your puppy received from the breeder or rescue when possible. A sudden switch on top of travel stress is a common trigger for soft stool and upset stomach. Confirm the brand name, formula, and feeding schedule before pickup. Ask for a written handoff that includes amounts per meal and any supplements. If you must change foods immediately because the previous diet is unavailable or not appropriate, call your veterinarian for a transition plan.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Choosing a Puppy Diet</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Look for a label that states the diet is <strong>complete and balanced</strong> for growth, with feeding trials or formulation that meets AAFCO or FEDIAF growth standards.</li>
            <li>Small-breed puppy formulas are often a good fit for kibble size and energy density. If using wet food, ensure it is balanced and not just a topper unless advised.</li>
            <li>Ask your veterinarian if your puppy has a specific need that would change the choice, such as a therapeutic diet for sensitive digestion. Avoid self-directed specialty diets without guidance.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Transition Method (7–10 Days)</h3>
          <p className="mb-3">
            Transition gradually by mixing the new food with the current food over a week or a little longer if your puppy has a sensitive stomach:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Days 1–2: 75&#37; current food, 25&#37; new food.</li>
            <li>Days 3–4: 50&#37; current, 50&#37; new.</li>
            <li>Days 5–6: 25&#37; current, 75&#37; new.</li>
            <li>Day 7+: 100&#37; new food if stool remains normal.</li>
          </ul>
          <p className="mb-3">
            If stool softens, hold at the current ratio for a couple of meals and allow the gut to settle. If diarrhea appears watery, contains blood, or your puppy becomes lethargic, call your veterinarian promptly. Avoid adding multiple new variables at once; do not layer a new food, a new treat, and a stressful adventure on the same day.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Meal Rhythm and Amounts</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Most French Bulldog puppies do well on <strong>three to four small meals</strong> per day at first. Even spacing supports steady energy and reduces gulping.</li>
            <li>Use the bag guide as a starting point, then adapt to body condition with veterinary input. You should feel ribs easily under a light fat cover without visible bony points.</li>
            <li>Split daily ration so that 10–20&#37; fuels training sessions. This reinforces calm behaviors without extra calories.</li>
            <li>Provide fresh water at all times but consider limiting water an hour before bedtime to reduce night potty trips. Always allow water after play and when panting.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Breeder or rescue conversation:</strong> ask what food the litter received, exact meal times, treat types used, and any sensitivities observed. Align on a slow transition plan. If your puppy came from a shelter environment, ask what dewormers were given and if any gastrointestinal issues were noted. Share all of this with your veterinarian at the first visit.
          </div>
        </section>

        {/* FIRST 48 HOURS */}
        <section id="first-48" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The First 48 Hours: How to Make It Peaceful</h2>
          <p className="mb-3">
            The first two days are about decompression and predictable rhythms. Your puppy is leaving familiar smells and littermates. Keep the calendar light: home time, short outdoor breaks, calm crate sessions, gentle handling, and quiet naps. This is not the moment for a house party or a long parade of visitors.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Arrival:</strong> carry your puppy to the potty spot on arrival if possible, or walk gently on a harness and leash. Reward any sniffing and short potty attempts.</li>
            <li><strong>Hydration and food:</strong> offer a small drink, then a small portion of the familiar meal at the next regular mealtime. Avoid overfeeding on day one.</li>
            <li><strong>Tour and settle:</strong> show the crate and playpen with a treat scatter. Let your puppy explore one room at a time rather than giving open access to the whole house.</li>
            <li><strong>Sleep:</strong> expect many naps. Over-tired puppies get mouthy and frantic. Aim for a 60–90 minute cycle of activity followed by rest.</li>
            <li><strong>Night plan:</strong> set up the crate near your bed for the first few nights to reduce distress. A t-shirt with your scent can help. White noise masks small sounds.</li>
            <li><strong>Observation:</strong> track potty times, stool quality, meals, and any cough, sneeze, or eye discharge. These notes help your veterinarian if anything comes up.</li>
          </ul>
        </section>

        {/* CRATE & POTTY */}
        <section id="crate-potty" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Crate and Potty Training: Kind, Consistent, Short</h2>
          <p className="mb-3">
            Crate training creates a safe bedroom and gives you a management tool for rest and travel. Potty training hinges on timing, supervision, and fast reinforcement. French Bulldog puppies are bright but can be stubborn; clarity beats force every time.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Crate Training Steps</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Start with the door open and toss a few treats into the crate. Reward any step inside. Keep early sessions minutes long, not hours.</li>
            <li>Feed at least one meal per day in the crate with the door open. Later you can close the door during the meal and open it as the bowl finishes.</li>
            <li>Add a short cue like <em>“bedtime”</em> as your puppy chooses to go in. Reinforce with a small treat and a calm exit after a minute or two.</li>
            <li>Build slowly to short door-closed rests during the day when your puppy is already sleepy. End before fussing escalates. You are creating positive associations, not testing endurance.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Potty Training Framework</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Outdoors <strong>after waking, after eating, after play,</strong> and every 60–90 minutes at first. Increase intervals as success builds.</li>
            <li>Use the same spot and a calm cue like <em>“go potty.”</em> Praise warmly as your puppy finishes. A small treat in place helps the connection.</li>
            <li>Supervise closely indoors or use the playpen. If you cannot watch, crate or pen. This prevents silent wandering and accidents behind furniture.</li>
            <li>Clean any accidents with an enzymatic cleaner and move on. Do not punish. Punishment delays learning and can create hiding behaviors.</li>
          </ul>
          <p>
            Expect setbacks during growth spurts, teething, or schedule changes. A brief return to denser management solves most regressions.
          </p>
        </section>

        {/* SLEEP */}
        <section id="sleep" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sleep and Night Routine</h2>
          <p className="mb-3">
            Young puppies sleep a lot. Night wakings are normal and pass quickly with structure. A French Bulldog puppy benefits from a cool, quiet room, predictable last potty, and a gentle settle routine.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Last meal two to three hours before bedtime. Last water one hour before, unless your veterinarian advises otherwise.</li>
            <li>Take a calm stroll to the potty spot right before bed. Minimal talking. Praise and return inside calmly.</li>
            <li>Crate near the bed for the first week. If your puppy fusses, take a brief potty trip and return without play. Consistency shortens the adjustment period.</li>
            <li>White noise helps mask environmental sounds. Keep the room cool. Overheating increases restlessness, especially for brachycephalic puppies.</li>
          </ul>
        </section>

        {/* HEALTH & VET */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Health, Preventive Care, and the First Veterinary Visit</h2>
          <p className="mb-3">
            Schedule a wellness exam within 48–72 hours of arrival. This is not only to check for problems; it is to establish a baseline, confirm the vaccine and deworming timeline, discuss parasite prevention, and plan out spay or neuter timing later in the first year. Bring all paperwork from the breeder or rescue, including microchip number and any medication records.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">What to Bring and Discuss</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Vaccine dates and lot numbers if available, dewormer dates, and any flea, tick, or heartworm prevention used.</li>
            <li>Diet name, flavor, lot code if you have it, feeding schedule, and any treats or supplements.</li>
            <li>Stool diary for the first few days, including any soft stool episodes or food changes.</li>
            <li>Questions about brachycephalic safety: heat sensitivity, exercise limits, harness fit, and warning signs of breathing distress.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Vaccination and Parasite Prevention Overview</h3>
          <p className="mb-3">
            Your veterinarian will follow an evidence-based schedule for core puppy vaccines and will advise on non-core vaccines based on regional risk. Expect a series appointment rhythm every three to four weeks until the core series is complete. Deworming and fecal checks are common in the first months. Heartworm prevention is recommended in many regions, and flea and tick prevention depends on local seasonality and risk tolerance.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">When to Call Quickly</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Repeated vomiting or watery diarrhea, especially with lethargy or blood.</li>
            <li>Coughing, labored breathing, blue or very pale gums, or collapsing episodes.</li>
            <li>Severe itch, facial swelling, hives, or any reaction after vaccines or new foods.</li>
          </ul>
        </section>

        {/* FRENCHIE-SPECIFIC */}
        <section id="frenchie-specific" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Frenchie-Specific Safety: Brachycephalic Realities</h2>
          <p className="mb-3">
            French Bulldogs are brachycephalic, meaning their airway anatomy is shorter and more compact. This affects heat tolerance, exercise planning, and gear choices. Safety is not complicated, but it does require attention and restraint to prevent avoidable emergencies.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Heat:</strong> avoid mid-day exertion in warm weather. Choose shade, cool floors, fans, and plenty of rest. If your puppy is panting hard, stop and cool down.</li>
            <li><strong>Water play:</strong> supervise around pools and lakes. Many Frenchies are not natural swimmers. Consider a properly fitted canine life jacket if near water.</            li>
            <li><strong>Gear:</strong> use a flat harness that does not compress the neck. A light leash prevents sudden yanks.</li>
            <li><strong>Feeding:</strong> serve measured meals in a shallow bowl or a slow feeder if gulping is an issue. Allow rest after eating before rambunctious play.</li>
            <li><strong>Snoring and sounds:</strong> mild snoring can be normal, but observe breathing effort. Any struggle to breathe, cyanosis, or collapse is an emergency.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Facility note:</strong> if your puppy attends daycare or puppy socials, share temperature preferences, break schedules, and gear rules. Ask staff to offer cool-down breaks and to monitor breathing effort.
          </div>
        </section>

        {/* SOCIALIZATION */}
        <section id="socialization" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Socialization Window: Confidence Without Overwhelm</h2>
          <p className="mb-3">
            The early window for social learning is precious. The goal is to introduce sights, sounds, surfaces, people, and gentle dogs in a way that feels safe. Socialization is about <em>quality</em>, not volume. French Bulldog puppies thrive on calm exposures paired with food and praise.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Carry or use a stroller on busy sidewalks before vaccine series is complete to reduce exposure to high-risk dog areas while still showing the world.</li>
            <li>Enroll in a well-run puppy class that checks vaccine status and has clean protocols. Short sessions with rest breaks are ideal for a brachycephalic puppy.</li>
            <li>Introduce household sounds: doorbell, dishwasher, vacuum at a distance, paired with treats. Increase volume slowly.</li>
            <li>Practice gentle handling for future grooming and veterinary care: touch paws, lift lips, look in ears, and reward. Keep sessions seconds long at first.</li>
          </ul>
          <p>
            Avoid crowded dog parks until vaccines are complete and your puppy is ready for that level of intensity. Choose polite canine friends and short, positive meetings.
          </p>
        </section>

        {/* TEETHING & CHEWING */}
        <section id="teething" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Teething, Mouthing, and Safe Chews</h2>
          <p className="mb-3">
            Mouthing is normal. Provide approved chew outlets and redirect calmly. Supervise to prevent ingestion of pieces. Choose chew textures that do not risk tooth fractures or choking. Freeze damp washcloth twists for short teething sessions and remove as they thaw. Rotate two or three chew types per day, not ten.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Offer chews after exercise when your puppy is more likely to settle and gnaw rather than fling a toy around.</li>
            <li>End a session while it is still going well. This teaches a relaxed pattern rather than escalating frustration.</li>
            <li>Teach a cheerful <em>“drop it”</em> by trading for a tiny treat, then return the chew. Trading builds trust.</li>
          </ul>
          <p>
            If you see gum bleeding, broken teeth, or persistent bad breath with drooling, call your veterinarian for an oral exam.
          </p>
        </section>

        {/* TRAINING */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">First-Month Training Plan: Tiny Skills, Big Dividends</h2>
          <p className="mb-3">
            Keep sessions short, fun, and frequent. A few minutes, many times per day, beats long sessions. Focus on behaviors that make daily life easy and safe. French Bulldog puppies respond well to food, play, and praise. Avoid leash jerks, yelling, or aversive tools. Calm clarity wins.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Week-by-Week Focus</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Week 1:</strong> name recognition, hand target, crate comfort, potty rhythm, relaxed handling of paws and ears.</li>
            <li><strong>Week 2:</strong> sit, down, short stay, leash walking in quiet spaces, polite doorways, settle on a mat for one minute.</li>
            <li><strong>Week 3:</strong> recall games indoors, sound desensitization, calm alone-time reps with a stuffed food toy in the crate.</li>
            <li><strong>Week 4:</strong> leash skills in slightly busier places, park and watch the world, short car rides with rest breaks.</li>
          </ul>
          <p>
            Keep criteria appropriately low and reward often. End on wins. If a session struggles, cut the difficulty in half rather than insisting.
          </p>
        </section>

        {/* TRAVEL */}
        <section id="travel" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Travel & Car Safety</h2>
          <p className="mb-3">
            A travel crate that can be secured in the vehicle or a crash-tested harness sized for a small puppy keeps rides safe. Offer short practice rides around the block before a longer trip. Never leave a Frenchie puppy unattended in a car, even with windows cracked. Heat builds quickly, and brachycephalic puppies are especially at risk.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Keep the car cool with air conditioning or fans. Bring water and a small bowl for longer rides.</li>
            <li>Plan potty breaks and quiet stretch breaks. Avoid rough play during stops.</li>
            <li>Secure the crate so it does not slide. A non-slip mat under the crate improves stability.</li>
          </ul>
        </section>

        {/* TEMPLATES & CHECKLISTS */}
        <section id="templates" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Checklists & Templates (Copy/Paste)</h2>

          <h3 className="text-lg font-semibold mt-2 mb-1">Pre-Pickup Call Script (Breeder or Rescue)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Food brand, formula, lot if available, and grams per meal.</li>
            <li>Meal times, treat types, and any known sensitivities.</li>
            <li>Vaccine dates, dewormers, microchip number, and last wellness exam.</li>
            <li>Crate or pen routine used to date and any sleep comfort items.</li>
            <li>Any cough, sneezing, soft stool, or signs of stress in the last week.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Shopping Checklist</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Crate with divider, x-pen, harness, light leash.</li>
            <li>Shallow food and water bowls, puppy food for two weeks, soft training treats.</li>
            <li>Two to three puppy-safe chews, snuffle mat, and a couple of toys.</li>
            <li>Washable bedding (two sets), enzymatic cleaner, unscented wipes.</li>
            <li>Grooming basics: rubber mitt, microfiber towels, dog-safe shampoo.</li>
            <li>Car restraint, non-slip mats, white noise machine if needed.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Day-One Plan</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Short potty trip on arrival, then a calm settle.</li>
            <li>Small meal at regular time using the familiar food.</li>
            <li>Crate introduction with treat tosses. Nap in the playpen afterward.</li>
            <li>Evening potty, quiet chew, lights down, crate near the bed.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Sample Daily Rhythm (First Two Weeks)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>6:30–7:00 AM: out to potty, breakfast, short quiet play, brief crate rest.</li>
            <li>9:00 AM: potty, training mini-session, nap in crate.</li>
            <li>12:00 PM: potty, lunch, calm enrichment, nap.</li>
            <li>3:00 PM: potty, leash walk on quiet street, nap.</li>
            <li>6:00 PM: potty, dinner, relaxed family time, nap.</li>
            <li>8:30 PM: potty, gentle handling practice, short chew, lights down near 9:30–10:00 PM.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Stool & Appetite Log (First Week)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Record mealtimes, amounts, and any treats used during training.</li>
            <li>Note stool quality each trip: firm, soft, watery, mucus, or blood.</li>
            <li>Note energy and demeanor: playful, sleepy, anxious, or withdrawn.</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia workflow:</strong> create a routine in Petunia for meals, potty times, crate rests, grooming, and the first veterinary visit. Add your stool log and weight entries as photos or notes so your veterinarian can see trends rather than single snapshots.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Should I switch foods in the first few nights?</strong><br />
            It is best to keep the same food for a week and then transition slowly over 7–10 days if you prefer a different diet. Sudden changes stacked on travel stress often cause soft stool. If you must change immediately, call your veterinarian for a plan.
          </p>

          <p className="mb-3">
            <strong>Do I need to call the veterinarian right away?</strong><br />
            Yes, schedule a routine wellness exam within 48–72 hours of arrival. This visit aligns vaccine timing, deworming, and prevention, and establishes a baseline for growth and breathing observations specific to brachycephalic puppies.
          </p>

          <p className="mb-3">
            <strong>Can my puppy go to daycare or a busy dog park in the first weeks?</strong><br />
            Choose controlled puppy classes or socials that verify vaccines and clean surfaces. Avoid busy dog parks until your veterinarian says the vaccine series provides protection and your puppy is ready for that intensity.
          </p>

          <p className="mb-3">
            <strong>How much exercise is appropriate?</strong><br />
            Short, frequent explorations on a harness. Avoid forced running, long stairs, or jumping off furniture. Prioritize sniff walks and gentle play. Heat awareness is essential for a brachycephalic puppy.
          </p>

          <p className="mb-3">
            <strong>What if my puppy refuses the crate?</strong><br />
            Go slower. Feed in the crate with the door open, reward short voluntary entries, and build duration in seconds. Place the crate near your bed at night at first. Calm repetition beats long crying sessions.
          </p>

          <p className="mb-3">
            <strong>Is chewing on furniture a behavior problem already?</strong><br />
            It is normal exploration and teething. Manage freedom with gates and pens, offer safe chews, supervise closely, and interrupt gently with a trade. Prevention now avoids habits later.
          </p>

          <p>
            <strong>When should I consider pet insurance?</strong><br />
            Many families enroll in the first weeks to maximize coverage for unexpected events. Compare policies and ask your veterinarian about typical claims for brachycephalic puppies in your region.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              World Small Animal Veterinary Association (WSAVA). Global Nutrition Guidelines &amp; Selecting a Pet Food.{' '}
              <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">
                https://wsava.org/global-guidelines/
              </a>{' '}
              |{' '}
              <a href="https://wsava.org/wp-content/uploads/2021/04/Selecting-a-pet-food-for-your-pet-updated-2021_WSAVA-Global-Nutrition-Toolkit.pdf" target="_blank" rel="noopener noreferrer">
                Nutrition Toolkit (PDF)
              </a>
            </li>
            <li>
              American Veterinary Medical Association (AVMA). Puppy Care Basics &amp; Wellness Visits.{' '}
              <a href="https://www.avma.org/resources/pet-owners/petcare/your-new-puppy" target="_blank" rel="noopener noreferrer">
                https://www.avma.org/resources/pet-owners/petcare/your-new-puppy
              </a>
            </li>
            <li>
              AAHA (American Animal Hospital Association). Vaccination Guidelines for Dogs (overview).{' '}
              <a href="https://www.aaha.org/education/guidelines/" target="_blank" rel="noopener noreferrer">
                https://www.aaha.org/education/guidelines/
              </a>
            </li>
            <li>
              RVC VetCompass / O’Neill et&nbsp;al. French Bulldogs and common disorders (brachycephalic context).{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/34911586/" target="_blank" rel="noopener noreferrer">
                PubMed
              </a>{' '}
              |{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8675495/" target="_blank" rel="noopener noreferrer">
                Open Access
              </a>
            </li>
            <li>
              VCA Animal Hospitals. Puppy Behavior and House-Training Basics; Brachycephalic considerations.{' '}
              <a href="https://vcahospitals.com/know-your-pet" target="_blank" rel="noopener noreferrer">
                https://vcahospitals.com/know-your-pet
              </a>
            </li>
            <li>
              CDC Healthy Pets. Parasite prevention and household hygiene.{' '}
              <a href="https://www.cdc.gov/healthypets/pets/dogs.html" target="_blank" rel="noopener noreferrer">
                https://www.cdc.gov/healthypets/pets/dogs.html
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for diagnosis and treatment individualized to your puppy.
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
