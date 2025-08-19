'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BringingHomeANewPuppyFirstTwoWeeks() {
  const locale = useLocale();

  const title =
    'Bringing Home a New Puppy: A Practical, Evidence-Informed Guide to the First Two Weeks';
  const date = 'August 19, 2025';
  const categories = ['owner', 'train'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    food: 'Dog Food & Nutrition',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="Your first 14 days with a puppy, step by step: house-training, crate & nighttime routines, safe early socialization before full vaccinations, meeting people & dogs, leash and alone-time foundations, enrichment, health & vaccine schedules, parasite prevention, red flags, and printable checklists—built on guidance from AVSAB, AAHA, AVMA, CAPC, and the American Heartworm Society."
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* 🏷️ Category Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((key) => (
            <span
              key={key}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[key]}
            </span>
          ))}
        </div>

        {/* INTRO */}
        <p className="text-lg mb-4">
          The first two weeks with a new puppy are joyful, sleepless, and important. In just 14
          days, you can teach clean potty habits, prevent separation distress, set up safe sleep,
          start soft leash manners, and give your puppy dozens of positive &ldquo;firsts&rdquo; that
          shape a lifetime of confidence. This guide gives you a simple, structured plan that
          balances <strong>early socialization</strong> (which can start before the vaccine series
          is complete) with sensible <strong>disease-risk management</strong>, and walks you through
          house-training, nighttime routines, meeting people &amp; dogs, enrichment, and veterinary
          basics. It draws from widely used guidance by AVSAB (behavior), AAHA &amp; AVMA
          (vaccination &amp; preventive care), CAPC (parasites), and the American Heartworm Society.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Before Pickup Day: Your 60-Minute Setup</h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Safe zone:</strong> a crate or exercise pen in a quiet area. Include a washable
            bed, a chew (e.g., a food-stuffed toy), and water. The crate should be just big enough
            for standing up, turning around, and lying down; use a divider if it is oversized.
          </li>
          <li>
            <strong>Potty area:</strong> decide the exact door and the exact spot outside. Place
            cleanup bags and an enzyme cleaner by that door.
          </li>
          <li>
            <strong>Schedule:</strong> set three meal times; block 6–8 short potty breaks and 3–5
            micro training sessions (2–4 minutes each). Puppies sleep 18–20 hours; plan nap windows.
          </li>
          <li>
            <strong>Health folder:</strong> breeder/rescue records, microchip info, food label/lot,
            and a vet appointment within 72 hours of arrival if possible.
          </li>
          <li>
            <strong>Puppy-proofing:</strong> hide cords, shoes, swallowable items; block stairs;
            secure trash; store human meds and toxic foods (xylitol, chocolate, grapes/raisins,
            onions/garlic) out of reach.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Days 0–2: Settle, Attach, and Learn the Bathroom Door</h2>
        <p className="mb-4">
          Your puppy is processing a huge change. Keep the first 48 hours quiet and predictable:
          outside on a leash to potty, inside to rest or calmly explore one room at a time. Use
          gentle handling and a high rate of tiny food rewards for anything you like: eliminating
          outdoors, checking in with you, sitting to say hello, entering the crate, and relaxing on
          a bed. Avoid crowded public places and unknown dogs; you&lsquo;ll add structured
          socialization in controlled ways soon.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">House-Training Blueprint</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Timing:</strong> take your puppy out on waking, after meals, after play, before
            bed, and about every 2 hours while awake in the first week. Many 8- to 10-week puppies
            can only hold 1–2 hours when awake.
          </li>
          <li>
            <strong>Procedure outdoors:</strong> walk to the same spot on leash, stand still, and
            wait quietly. The instant your puppy finishes, softly praise and drop 3–5 tiny treats
            on the ground at your feet; then <em>start</em> play or a quick sniff walk. This teaches
            that pottying makes good things begin.
          </li>
          <li>
            <strong>Indoors between breaks:</strong> supervise or confine. Use a drag-line leash
            attached to you, a playpen, or the crate so accidents aren&lsquo;t rehearsed.
          </li>
          <li>
            <strong>If there is an accident:</strong> interrupt calmly (no scolding), usher outside,
            then clean with an enzyme-based product to remove odors that trigger repeats.
          </li>
          <li>
            <strong>Night:</strong> last potty break right before bed; set one alarm 4–6 hours later
            for the first few nights if needed; take out calmly and return to bed with no play.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Crying at Night: What Helps</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            Place the crate in your bedroom (or temporarily beside the bed) so your presence calms
            the puppy. Use white noise and a covered crate if it helps.
          </li>
          <li>
            For the first several nights, expect one brief potty trip. Keep it boring: out, pee,
            praise, back to bed. Avoid &ldquo;rewarding&rdquo; midnight drama with play.
          </li>
          <li>
            If the puppy cries steadily for several minutes, try a calm verbal cue once. If crying
            persists, take a quick potty break (leash on, no play), then back to bed.
          </li>
          <li>
            Teach the puppy that quiet earns attention: greet and let out when silent, not mid-whine.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Days 3–7: Routines, Micro-Training &amp; Alone-Time Skills</h2>
        <p className="mb-4">
          Puppies learn fast in 1–3 minute bursts. Add 3–5 micro sessions daily: name game, sit,
          hand target, come, trade, and drop-it. Rotate chew toys. Introduce short &ldquo;settle on
          a mat&rdquo; with a steady trickle of tiny treats whenever the puppy chooses to lie down.
          Start <strong>alone-time training</strong> with seconds-long absences while the puppy is
          chewing in the crate; gradually increase the duration over days. Keep outings short and
          low-risk while the vaccine series is in progress.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Leash Foundations (Yes, Start Now—But Keep It Short)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            Begin indoors and in the yard: clip a light leash to a harness, feed for walking near
            you, and say &ldquo;Let&apos;s go&rdquo; as you take one or two steps.
          </li>
          <li>
            Reward a loose leash. Stop if the leash tightens; when the puppy looks back or steps
            toward you, mark &amp; feed at your knee.
          </li>
          <li>
            Keep &ldquo;walks&rdquo; under 5–10 minutes at a time this week. Focus on calm exposure
            and leash manners rather than distance.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Meeting People &amp; Dogs: What Is Safe Before Full Vaccination?</h3>
        <p className="mb-4">
          The <strong>socialization window</strong> is most sensitive before 12–14 weeks; positive
          experiences during this period have lifelong impact. You do not have to wait for the whole
          vaccine series to finish to begin <em>controlled</em> socialization. Do avoid high-risk
          environments such as dog parks, pet-store floors, and unknown dogs. Prefer known,
          healthy, friendly dogs with up-to-date core vaccines; carefully run puppy playdates at
          home or in clean private yards. Enroll in a vetted puppy class that requires proof of
          veterinary care and hygiene protocols.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Good exposures now:</strong> family and friends, diverse adults &amp; children
            (supervised), people with hats/coats/canes, different surfaces (grass, gravel, wood,
            metal), car rides, elevators, gentle handling by staff at your vet or groomer.
          </li>
          <li>
            <strong>Delay or avoid:</strong> dog parks, communal bowls, daycare floors, puppy-heavy
            retail aisles, and any area with known disease outbreaks until your veterinarian okays.
          </li>
          <li>
            <strong>How to do it:</strong> pair every &ldquo;first&rdquo; with tiny treats. Keep it
            short; do not force interaction (&ldquo;flooding&rdquo;). Let the puppy choose to
            approach; step back if you see tucked tail, freezing, pinned ears, or yawns.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Health Basics: Vet Visit, Vaccines &amp; Parasite Prevention</h2>
        <p className="mb-4">
          Book an early wellness exam. Bring prior records, your questions, and a fresh stool sample
          for parasite testing. Your vet will individualize an <strong>immunization plan</strong>{' '}
          based on age, region, and risk, but most puppies begin core vaccines in early weeks and
          receive boosters every 3–4 weeks until at least 16 weeks of age. Your veterinarian will
          also review intestinal parasite control (most puppies require routine deworming), heartworm
          prevention, and flea/tick prevention. Follow your vet&lsquo;s schedule and local rabies
          law; their guidance supersedes general advice in any article.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Food, Water &amp; Treats</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            Feed a <strong>complete &amp; balanced</strong> puppy diet appropriate for growth, per
            your vet&lsquo;s recommendation. Split into 3–4 meals/day in week one; many puppies can
            move to 3 meals by 12 weeks.
          </li>
          <li>
            Transition slowly if changing brands: mix the new food over 5–7 days to minimize GI
            upset. Keep treats under ~10% of daily calories.
          </li>
          <li>
            Provide plenty of fresh water by day; reduce access 1–2 hours before bedtime to help the
            overnight routine (unless your vet instructs otherwise).
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Chewing, Mouthing &amp; Bite Inhibition</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            Puppies mouth to explore and self-soothe. Provide safe, size-appropriate chews and swap
            daily to keep interest high.
          </li>
          <li>
            If teeth touch skin, calmly redirect to a toy. Avoid rough hand play that rewards biting.
          </li>
          <li>
            Teach <strong>trade</strong>: present a treat at the nose, say &ldquo;drop,&rdquo;
            reward when the object falls, then give the object back when safe. This builds trust and
            prevents resource guarding.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Days 8–14: Expand the World &amp; Build Independence</h2>
        <p className="mb-4">
          In week two, maintain your potty schedule, keep nights calm, and increase <em>quality</em>{' '}
          socialization. Attend your first puppy class if your veterinarian approves. Practice brief
          alone-time daily and aim for one calm car ride every other day. Add easy handling for
          future grooming: touch paws, ears, and mouth; pair each touch with a treat and stop before
          your puppy wants to pull away.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Grooming &amp; Vet-Friendly Handling</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            Short, pleasant sessions: brush for 15–30 seconds, treat, and take a break. Handle paws
            &amp; nails with a treat at each touch. Peek in ears and open the lips to view teeth.
          </li>
          <li>
            Teach a <strong>collar grab = treat</strong> ritual (touch the collar, feed). This helps
            with recalls and safety later.
          </li>
          <li>
            Consider beginning low-stress <strong>muzzle conditioning</strong> for vet visits or
            grooming—just a few seconds of putting the nose in a basket muzzle for a treat. This is
            insurance you hope you never need.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Safe Socialization Map</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Green-light:</strong> invite friends over; quiet sidewalks; carry your puppy
            briefly through busier areas; sit on a bench to watch the world at a distance; car
            washes; umbrellas; scooters; polite, fully vaccinated adult dogs you know well.
          </li>
          <li>
            <strong>Yellow-light:</strong> puppy classes that verify vaccines and clean floors;
            supervised playdates with similarly cared-for puppies.
          </li>
          <li>
            <strong>Red-light (for now):</strong> dog parks, daycare, communal pet-store floors,
            bowls, and high-traffic dog areas.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Alone-Time &amp; Prevention of Separation Issues</h3>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>
            <strong>Chew ready, human nearby:</strong> crate the puppy with a stuffed toy for 10–30
            seconds while you sit close. Let out while quiet. Repeat.
          </li>
          <li>
            <strong>Step away:</strong> leave the room for 10–60 seconds. Return calmly, let out
            while quiet. If the puppy protests, make the next repetition shorter.
          </li>
          <li>
            <strong>Front door reps:</strong> pick up keys, step out and back in. Build up to a few
            minutes by week&ensp;2, keeping successes easy and frequent.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Red Flags: Call Your Veterinarian Promptly If You See</h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Repeated vomiting or diarrhea, blood in stool, marked lethargy, refusal to eat.</li>
          <li>
            Coughing, persistent nasal or eye discharge, fever, or labored breathing—especially if
            you adopted recently or visited places with other dogs.
          </li>
          <li>
            Straining to urinate or defecate; belly swelling; pale gums; painful cries; sudden
            limping after a fall.
          </li>
          <li>Any toxin exposure or foreign-body ingestion—call your vet or a poison hotline.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Two-Week At-a-Glance Plan</h2>
        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Daily Rhythm (Template)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Wake</strong> → potty → breakfast → 5-minute training → nap</li>
            <li><strong>Mid-morning</strong> potty → short leash session (yard/quiet street)</li>
            <li><strong>Lunch</strong> (optional by age) → potty → chew in crate → alone-time rep</li>
            <li><strong>Afternoon</strong> potty → car ride or safe socialization field trip</li>
            <li><strong>Dinner</strong> → potty → calm play/enrichment → handling practice</li>
            <li><strong>Evening</strong> potty → settle on mat → bedtime potty → crate sleep</li>
          </ul>
        </div>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Checklist: Health &amp; Safety</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Schedule wellness exam; bring records and a fresh stool sample.</li>
            <li>Discuss vaccine timing, deworming, flea/tick, and heartworm prevention.</li>
            <li>Microchip registration &amp; ID tag; safe car restraint.</li>
            <li>Food transition plan; treat calories &lt; 10% of daily intake.</li>
            <li>Household hazards secured; puppy-safe room or playpen prepared.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 mb-10">
          <h3 className="text-lg font-semibold mb-2">Checklist: Training &amp; Socialization</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Potty schedule printed on the fridge; enzyme cleaner on hand.</li>
            <li>Crate comfort established; brief alone-time reps daily.</li>
            <li>3–5 micro training sessions/day: name, sit, come, hand target, trade.</li>
            <li>10–15 new &ldquo;firsts&rdquo;/week with treats: sounds, surfaces, people, places.</li>
            <li>Known, vaccinated dog friend meet-ups; avoid dog parks for now.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Frequently Asked Questions</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Should I walk my puppy on the street right away?</h3>
        <p className="mb-4">
          Yes—briefly and thoughtfully. Start in low-traffic areas after your veterinarian confirms
          you&lsquo;re on schedule with core vaccines. Keep sessions short; focus on leash skills and
          calm exposure, not mileage. Avoid dog-dense sidewalks and places where unknown dogs
          eliminate until your vet okays.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Can my puppy meet other dogs?</h3>
        <p className="mb-4">
          Yes, if they are healthy, friendly, and appropriately vaccinated. Choose one or two adult
          &ldquo;teacher dogs&rdquo; and similarly cared-for puppies in clean, private spaces. Avoid
          dog parks and communal bowls for now. End every playdate while your puppy still wants more.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Is crying at night normal? Should I ignore it?</h3>
        <p className="mb-4">
          Some vocalizing is normal the first few nights. Keep the crate close, add white noise, and
          schedule one midnight potty break. Reward quiet with attention and release; avoid long,
          exciting interactions at night. If crying escalates rather than improves across a week,
          consult your veterinarian to rule out discomfort.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What about parasites and heartworm prevention?</h3>
        <p className="mb-4">
          Most puppies are dewormed repeatedly in early life and started on monthly preventives per
          your region&lsquo;s risk. Your veterinarian will advise testing schedules and when to begin
          preventives; follow their plan closely.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">References &amp; Further Reading</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            AVSAB Position Statement on Puppy Socialization (why early, controlled socialization
            matters).{' '}
            <a
              className="underline"
              href="https://avsab.org/wp-content/uploads/2018/03/Puppy_Socialization_Position_Statement_Download_-_10-3-14.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              avsab.org (PDF)
            </a>
          </li>
          <li>
            AAHA Canine Vaccination Guidelines (core/noncore overview &amp; schedules).{' '}
            <a
              className="underline"
              href="https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aaha.org
            </a>{' '}
            ·{' '}
            <a
              className="underline"
              href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2022-aaha-canine-vaccination-guidelines/resources/2022-aaha-canine-vaccinations-guidelines.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              full PDF
            </a>
          </li>
          <li>
            CAPC Parasite Guidance (fecal testing; deworming intervals for puppies; year-round
            prevention).{' '}
            <a
              className="underline"
              href="https://capcvet.org/guidelines/general-guidelines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              capcvet.org
            </a>{' '}
            ·{' '}
            <a
              className="underline"
              href="https://www.petsandparasites.org/resources/capc-guidelines"
              target="_blank"
              rel="noopener noreferrer"
            >
              petsandparasites.org
            </a>{' '}
            ·{' '}
            <a
              className="underline"
              href="https://capcvet.org/guidelines/ascarid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ascarids
            </a>
          </li>
          <li>
            American Heartworm Society (when to start prevention &amp; testing cadence).{' '}
            <a
              className="underline"
              href="https://www.heartwormsociety.org/pet-owner-resources/heartworm-basics"
              target="_blank"
              rel="noopener noreferrer"
            >
              heartwormsociety.org
            </a>
          </li>
          <li>
            AVMA on Parvovirus &amp; risk management during socialization.{' '}
            <a
              className="underline"
              href="https://www.avma.org/resources-tools/pet-owners/petcare/canine-parvovirus"
              target="_blank"
              rel="noopener noreferrer"
            >
              avma.org
            </a>
          </li>
          <li>
            UC Davis VM: Crate Training Your Puppy (stepwise conditioning).{' '}
            <a
              className="underline"
              href="https://www.vetmed.ucdavis.edu/sites/g/files/dgvnsk491/files/inline-files/Crate_Training_Your_Puppy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              vetmed.ucdavis.edu (PDF)
            </a>
          </li>
          <li>
            VeterinaryPartner (VIN): Housetraining &amp; Crate Training Dogs.{' '}
            <a
              className="underline"
              href="https://veterinarypartner.vin.com/doc/?id=8562851&pid=19239"
              target="_blank"
              rel="noopener noreferrer"
            >
              veterinarypartner.vin.com
            </a>
          </li>
          <li>
            VCA Hospitals: House-Training Your Puppy (practical setup options).{' '}
            <a
              className="underline"
              href="https://vcahospitals.com/know-your-pet/house-training-your-puppy"
              target="_blank"
              rel="noopener noreferrer"
            >
              vcahospitals.com
            </a>
          </li>
          <li>
            CDC Healthy Pets: Hygiene basics (why to pick up waste; reduce zoonotic risk).{' '}
            <a
              className="underline"
              href="https://www.cdc.gov/healthy-pets/about/dogs.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              cdc.gov
            </a>
          </li>
        </ul>

        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is for general informational purposes and does not replace individualized
          veterinary advice. Always follow your veterinarian’s recommendations for vaccination,
          deworming, preventives, socialization timing, and medical care in your region.
        </p>
      </main>
    </>
  );
}
