'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BoardingTipsForLabradorRetrievers() {
  const locale = useLocale();

  const title =
    'Boarding & Daycare Tips for Labrador Retrievers: A Complete Owner’s Guide';
  const date = 'April 27, 2025';
  const categories = ['boarding', 'daycare', 'breed_specific_guides'];

  const categoryLabels: Record<string, string> = {
    boarding: 'Boarding',
    daycare: 'Daycare',
    breed_specific_guides: 'Breed Specific Guides',
    owner: 'Pet Owners',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
  };

  return (
    <>

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
            <li><a href="#intro" className="underline hover:opacity-80">Overview</a></li>
            <li><a href="#traits" className="underline hover:opacity-80">Traits</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health Prep</a></li>
            <li><a href="#vaccines" className="underline hover:opacity-80">Vaccines</a></li>
            <li><a href="#facility" className="underline hover:opacity-80">Facility Standards</a></li>
            <li><a href="#playstyle" className="underline hover:opacity-80">Play-Style</a></li>
            <li><a href="#exercise" className="underline hover:opacity-80">Exercise & Rest</a></li>
            <li><a href="#heat-water" className="underline hover:opacity-80">Heat & Water</a></li>
            <li><a href="#feeding" className="underline hover:opacity-80">Feeding & Meds</a></li>
            <li><a href="#packing" className="underline hover:opacity-80">Packing</a></li>
            <li><a href="#comms" className="underline hover:opacity-80">Communication</a></li>
            <li><a href="#good-sessions" className="underline hover:opacity-80">Good Sessions</a></li>
            <li><a href="#resp" className="underline hover:opacity-80">Resp. Illness</a></li>
            <li><a href="#special" className="underline hover:opacity-80">Special Cases</a></li>
            <li><a href="#recovery" className="underline hover:opacity-80">Recovery</a></li>
            <li><a href="#owner-notes" className="underline hover:opacity-80">Owner Notes</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training Note</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* --- INTRO (unchanged content) --- */}
        <section id="intro" className="mb-10">
          <p className="mb-4">
            Labrador Retrievers are famously friendly, endlessly enthusiastic, and wired for work and play.
            Those same traits make Labs fantastic companions—and occasionally challenging boarders and daycare clients.
            If your Lab is headed to daycare regularly or boarding overnight, a little planning goes a long way.
            This guide covers health prep, vaccine requirements, facility standards, play-style management, rest, enrichment,
            feeding, and post-stay recovery—everything you need to set your Lab up for a safe, low-stress, genuinely good experience.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm text-gray-700">
            <strong>Quick win:</strong> Structure the day. Short play blocks → real naps → enrichment.
            Labs do best with rhythm, not “all-day free play.”
          </div>
        </section>

        {/* 1) TRAITS */}
        <section id="traits" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            1) Know Your Lab: Traits That Matter for Boarding &amp; Daycare
          </h2>
          <p>
            Labradors are athletic, social, high-energy dogs bred to retrieve all day in cold water. Most are people-pleasing
            and resilient, but they also have “Lab-specific” tendencies that affect group care: high arousal in play, a strong
            fetch/“carry something” drive, extreme food motivation (great for training, risky around shared resources), and a deep
            love of water. Without enough structured exercise and mental work, Labs can tip into over-excitement or destructive
            behavior from pent-up energy. Plan for daily activity and purposeful downtime.
          </p>
        </section>

        {/* 2) HEALTH PREP */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            2) Health Prep: The “Big Four” for Labradors
          </h2>

          <h3 className="text-xl font-semibold mt-4 mb-2">A. Weight management</h3>
          <p className="mb-3">
            Obesity is common in Labs and drives orthopedic disease and lower stamina in playgroups. Keep body condition lean,
            measure meals, and use training treats wisely (swap some kibble for treats during training days). Lean dogs move
            better, overheat less, and recover faster.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">B. Orthopedics (hips, elbows, cruciates)</h3>
          <p className="mb-3">
            Hip dysplasia and related orthopedic issues are more common in large breeds, including Labs. Ask your vet about joint
            baselines, manage weight, and avoid uncontrolled, repetitive jumping (for example, off high play equipment). If your
            Lab has a history of lameness, request low-impact play or shorter sessions with more rest.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">C. EIC (Exercise-Induced Collapse)</h3>
          <p className="mb-3">
            Some Labs carry a genetic mutation (DNM1) linked to Exercise-Induced Collapse. During intense activity, affected dogs
            can develop weakness and collapse. If your Lab is from working/performance lines—or you’ve seen odd wobbliness after
            hard fetch—talk to your vet and consider a DNM1 test. Share results with your daycare/boarding team and request
            moderated play and enforced breaks.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">D. Ears &amp; skin</h3>
          <p>
            Labs’ love of water plus their ear conformation means ear infections are a frequent nuisance. Before boarding, make
            sure ears are clean and comfortable; send any vet-prescribed drops with clear written instructions. Clean ears also
            reduce dog-to-dog pestering in groups.
          </p>
        </section>

        {/* 3) VACCINES */}
        <section id="vaccines" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            3) Vaccines &amp; Communicable Disease: What Facilities Typically Require
          </h2>
          <p className="mb-3">
            Most boarding/daycare facilities require <strong>core</strong> canine vaccines (distemper, adenovirus/hepatitis,
            parvovirus, rabies) and, based on risk, <strong>non-core</strong> vaccines such as Bordetella (kennel cough), canine
            influenza (CIV), and sometimes leptospirosis. Discuss your Lab’s lifestyle with your veterinarian; group environments
            increase respiratory-disease risk, so Bordetella/CIV are commonly recommended for dogs that attend daycare, boarding,
            training, grooming, or dog parks. Bring proof of vaccination and verify the facility’s timing (some require Bordetella
            within the last 6–12 months).
          </p>
          <p className="mb-3">
            <em>Why it matters:</em> Canine infectious respiratory disease complex (CIRDC, often called “kennel cough”) is a
            multi-pathogen syndrome that spreads anywhere dogs mix. Vaccination can’t block every case but reduces severity and
            spread—critical in shared air/play environments.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm text-gray-700">
            <strong>Pro tip:</strong> Ask your facility whether they require Bordetella every 6 or 12 months and if they accept
            digital proof. Upload to Petunia once, reuse everywhere.
          </div>
        </section>

        {/* 4) FACILITY STANDARDS */}
        <section id="facility" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            4) Picking a Facility: Safety Standards That Protect Big, Social Dogs
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Qualified staff</strong> supervising at all times; calm, proactive handlers who interrupt escalating play.</li>
            <li><strong>Group management</strong> by size/temperament; controlled intros; consent-based play.</li>
            <li><strong>Double-door entries</strong> and secure gating to prevent door-dash exits.</li>
            <li><strong>Adequate space</strong> per dog with areas to break away and <strong>true rest zones</strong> (crates/quiet rooms).</li>
            <li><strong>Non-slip floors</strong>, safe equipment heights, and climate control (important for Labs in hot or humid weather).</li>
          </ul>
          <p>
            Ask about staffing ratios, how they enforce naps, how they handle resource guarding around toys/water bowls, and what
            their policy is on repeated over-arousal. For boarding, evaluate kennel ventilation, temperature control, and nighttime
            supervision.
          </p>
        </section>

        {/* 5) PLAY-STYLE */}
        <section id="playstyle" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            5) Temperament &amp; Play-Style: Setting Your Lab Up for Success
          </h2>
          <p className="mb-3">
            Labs are often “happy extroverts,” which is great—until arousal spikes and impulse control falls. Share the following
            with your provider:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Play triggers:</strong> Fetch, pools, squeaky toys, new dogs entering the yard.</li>
            <li><strong>Frustrations:</strong> Waiting at gates, working around food prep, prolonged crate time without enrichment.</li>
            <li><strong>Ideal playmates:</strong> Similar size/energy, tolerant players, or dogs that prefer parallel play.</li>
            <li><strong>Red flags:</strong> Mounting, snatchy toy play, escalating body slams, “zoomies” that ignore social cues.</li>
          </ul>
          <p>
            Ask for structured rotations: short, high-quality play blocks alternated with crate naps or quiet chewing. This rhythm
            keeps Labs from tipping into “too much fun to think.”
          </p>
        </section>

        {/* 6) EXERCISE & REST */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            6) The Right Dose of Exercise (and Why Rest Is Non-Negotiable)
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Two or three</strong> 15–25-minute play blocks (fetch, controlled chase, agility-style obstacles).</li>
            <li><strong>Mandatory naps</strong> (60–90 minutes) between blocks.</li>
            <li><strong>Enrichment</strong> when not in the yard: sniff boxes, lick mats, frozen Kongs, cardboard puzzles, place training.</li>
          </ul>
          <p>
            Dogs in “all-day free-for-all” daycares often come home wired, dehydrated, and sore. Structured cycles (play → rest →
            enrichment) protect joints and mind, lower respiratory risk, and yield a calmer dog at pickup. If your Lab is tightly
            wound after daycare, ask the team to dial back fetch, split groups smaller, or add place work and scatter-feeding searches.
          </p>
        </section>

        {/* 7) HEAT & WATER */}
        <section id="heat-water" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            7) Heat, Water, and Weather Safety for Labs
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Heat plans:</strong> Shade, misters, frequent water breaks, limited midday yard time; watch for excessive panting.</li>
            <li><strong>Water rules:</strong> Supervised pool time; cut sessions if gulping water; avoid deep-water ball chasing for orthopedic/EIC risks.</li>
            <li><strong>Dry-off routines:</strong> Fully dry ears after pool days to reduce infection risk.</li>
            <li><strong>Cold/rain:</strong> Drying areas and warm rest spaces after winter swims; slip protection on wet floors.</li>
          </ul>
        </section>

        {/* 8) FEEDING & MEDS */}
        <section id="feeding" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            8) Feeding, Treats, and Medications
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Feeding windows:</strong> Meals away from other dogs; measured portions; request reduced treats if dieting.</li>
            <li><strong>Puzzles at rest:</strong> Lick mats or slow-feeders help decompress and reduce bolt-eating.</li>
            <li><strong>Medications/supplements:</strong> Label containers (name, strength, dose, timing, indication); demo ear-drop technique if needed.</li>
          </ul>
          <p>
            If your Lab is on joint support or GI meds, keep them going during boarding—routine reduces post-stay tummy upset.
          </p>
        </section>

        {/* 9) PACKING */}
        <section id="packing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            9) Paperwork &amp; Packing Checklist (Owner Ready-List)
          </h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Documents &amp; data</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Vaccination records (core + lifestyle vaccines per your vet)</li>
            <li>Vet contact + local emergency clinic info</li>
            <li>Allergy list; prior injuries; EIC status if tested; special handling notes</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Gear</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Measured meals (labeled by day/feeding) + slow-feeder or lick mat</li>
            <li>Familiar bed/blanket and 1–2 washable toys</li>
            <li>Harness and labeled leash (no rope chews for group play)</li>
            <li>Ear cleaner &amp; drops (if prescribed), routine meds with instructions</li>
            <li>Optional: cooling mat (summer), jacket (winter), paw balm (outdoor yards)</li>
          </ul>
          <p className="mt-3">
            Keep it simple and washable. Over-packing introduces sharable items (guarding risk) and laundry the staff may not be
            able to manage.
          </p>
        </section>

        {/* 10) COMMUNICATION */}
        <section id="comms" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            10) Communication That Prevents Problems
          </h2>
          <p className="mb-3">Before the first day, give the team concise notes:</p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Behavior baseline:</strong> Gets amped with balls; relaxes with scatter-feed & place work.</li>
            <li><strong>Medical watch-outs:</strong> Right elbow arthritis; avoid repetitive jumping.</li>
            <li><strong>Heat/EIC notes:</strong> Tires fast in heat; stop fetch if breathing gets noisy.</li>
            <li><strong>Ear care:</strong> Dry ears after pools; call if head-shaking starts.</li>
          </ul>
          <p>
            Ask how the facility updates owners (text/photos) and what threshold triggers a vet visit. Provide permission in writing
            for urgent care up to a dollar limit.
          </p>
        </section>

        {/* 11) GOOD SESSIONS */}
        <section id="good-sessions" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            11) What Good Daycare/Boarding Sessions Look Like for Labs
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Calm intake:</strong> Potty break, slow dog-dog intro, handler-led transition.</li>
            <li><strong>Play plan:</strong> Fetch in short sets with handler resets; scent games; flirt-pole with impulse control.</li>
            <li><strong>Rotation:</strong> Yard → crate nap with white noise → enrichment → yard again.</li>
            <li><strong>Body language:</strong> Loose, bouncy play with self-interruptions; able to disengage when called.</li>
            <li><strong>End-of-day:</strong> Cool-down walk, ad-lib water, time to decompress before pickup.</li>
          </ul>
        </section>

        {/* 12) RESP ILLNESS */}
        <section id="resp" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            12) Respiratory Illness: Realistic Expectations
          </h2>
          <p>
            Even vaccinated, well-managed dogs can catch a cough—just like kids at school. Minimize risk by keeping your Lab
            current on core vaccines and any lifestyle vaccines recommended by your vet for group settings, choosing facilities
            with real rest cycles and ventilation, and avoiding daycare within 7–10 days of any respiratory signs. If your Lab
            does develop a cough, reduce exertion and follow your veterinarian’s guidance; most uncomplicated cases are mild but
            should still be managed carefully.
          </p>
        </section>

        {/* 13) SPECIAL CASES */}
        <section id="special" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">13) Special Cases</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">Puppies</h3>
          <p className="mb-3">
            Wait until your vet clears public exposure; socialization is crucial, but timing depends on vaccine series. Use
            puppy-safe, well-ventilated spaces with tiny groups and enforced naps.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Seniors</h3>
          <p className="mb-3">
            Prefer smaller groups, more sniff walks than chasing games, and thicker bedding. Review pain plans with your vet.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Post-injury/orthopedic dogs</h3>
          <p>Ask for solo yards or one calm buddy, ground-level equipment only, and no fetch.</p>
        </section>

        {/* 14) RECOVERY */}
        <section id="recovery" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            14) After Boarding/Daycare: Recovery &amp; Red Flags
          </h2>
          <p>
            Most Labs will come home happily tired. Offer a small meal and plenty of water, then a quiet evening. Call your vet if
            you notice persistent cough, diarrhea beyond 24–36 hours, lameness, or ear discomfort (scratching, head-shaking).
            Share feedback with your facility so they can adjust play blocks or rest timing on the next visit.
          </p>
        </section>

        {/* 15) OWNER NOTES */}
        <section id="owner-notes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            15) Sample “Owner Notes” to Send with Your Lab
          </h2>
          <blockquote className="italic border-l-4 border-[#d9cfc2] pl-4 text-gray-700">
            <p>
              <strong>Play:</strong> Loves tug and fetch; please keep fetch to short sets.<br />
              <strong>Breaks:</strong> Calms well in crate with a frozen Kong; becomes overstimulated without naps.<br />
              <strong>Medical:</strong> Mild hip dysplasia—no jumping off high equipment.<br />
              <strong>Heat:</strong> Tires faster on hot afternoons; prefer morning yard.<br />
              <strong>Ear care:</strong> Dry ears after pools; I’ve included ear cleaner.
            </p>
          </blockquote>
        </section>

        {/* 16) FAQ */}
        <section id="faq" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">16) Quick FAQ</h2>
          <p className="mb-3">
            <strong>Do Labs actually need daycare?</strong><br />
            Not every Lab needs daycare. Many thrive with structured home exercise and training. Daycare is most helpful for
            sociable dogs that enjoy group play and benefit from mid-day activity and structured rest.
          </p>
          <p className="mb-3">
            <strong>What if my Lab guards toys or food at daycare?</strong><br />
            Ask the team to remove food-like chews from group use, supervise water stations, and use staff-controlled toys only.
            Guarders can still enjoy daycare with policy tweaks.
          </p>
          <p className="mb-3">
            <strong>How often should my Lab go to daycare?</strong><br />
            One to three days per week is plenty for most; build in rest days at home.
          </p>
          <p>
            <strong>How do I know if a facility is “the one”?</strong><br />
            Look for trained supervision, clear health and vaccine policies, controlled intros, real nap time, secure gating, and
            non-slip, well-maintained spaces.
          </p>
        </section>

        {/* 17) TRAINING NOTE */}
        <section id="training" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            17) A Word on Training: The Secret to a Better Daycare Dog
          </h2>
          <p>
            Five minutes a day of impulse-control games (sit → look → release, place work, “drop it,” loose-leash walking, recall
            from play) pays off huge in group care. Labs learn fast; channel that brain and you’ll get a more thoughtful, safer
            player in the yard—and a calmer companion at home.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>American Kennel Club — Labrador Retriever breed profile & exercise/temperament.</li>
            <li>AAHA Canine Vaccination Guidelines (2022) — core vs non-core, lifestyle risk.</li>
            <li>WSAVA Vaccination Guidelines — global perspective on core/non-core.</li>
            <li>AVMA — Canine infectious respiratory disease (kennel cough) overview.</li>
            <li>Merck Veterinary Manual — CIRDC/kennel cough clinical overview.</li>
            <li>VCA Hospitals — Hip dysplasia overview and weight/management guidance.</li>
            <li>University of Minnesota Canine Genetics — DNM1 (EIC) testing for Labs.</li>
            <li>The Dog Gurus — Daycare operations/space/rest/safety standards.</li>
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
