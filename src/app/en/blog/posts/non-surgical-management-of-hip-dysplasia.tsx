// File: src/app/[locale]/blog/posts/non-surgical-management-of-hip-dysplasia.tsx
'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function NonSurgicalManagementOfHipDysplasia() {
  const locale = useLocale();

  const title =
    'Non-Surgical Management of Hip Dysplasia in Dogs: Evidence-Based Options That Actually Improve Comfort and Mobility';
  const date = 'January 1, 2026';

  const description =
    'A comprehensive, owner-first guide to managing canine hip dysplasia without surgery, including weight and exercise plans, physical therapy, medications, joint injections, supplements, home modifications, rehab timelines, and when to reconsider surgery.';

  const categories = ['owner', 'vet'] as const;

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

        {/* TOC */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tldr" className="underline">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#what-non-surgical-means" className="underline">
                What “Non-Surgical” Really Means
              </a>
            </li>
            <li>
              <a href="#core-principles" className="underline">
                The Core Principles
              </a>
            </li>
            <li>
              <a href="#weight" className="underline">
                Weight and Body Condition
              </a>
            </li>
            <li>
              <a href="#exercise" className="underline">
                Exercise and Activity Strategy
              </a>
            </li>
            <li>
              <a href="#rehab" className="underline">
                Rehab and Physical Therapy
              </a>
            </li>
            <li>
              <a href="#medications" className="underline">
                Medications and Pain Control
              </a>
            </li>
            <li>
              <a href="#injections" className="underline">
                Joint Injections and Advanced Options
              </a>
            </li>
            <li>
              <a href="#supplements" className="underline">
                Supplements and Nutrition
              </a>
            </li>
            <li>
              <a href="#home" className="underline">
                Home and Lifestyle Modifications
              </a>
            </li>
            <li>
              <a href="#monitoring" className="underline">
                Monitoring Progress
              </a>
            </li>
            <li>
              <a href="#when-surgery" className="underline">
                When to Reconsider Surgery
              </a>
            </li>
            <li>
              <a href="#next-steps" className="underline">
                Next Steps and Related Guides
              </a>
            </li>
            <li>
              <a href="#sources" className="underline">
                Sources
              </a>
            </li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR</h2>
          <p className="mb-4">
            Non-surgical management of hip dysplasia usually works best as a <strong>stack</strong>, not a single fix:
            body condition and muscle, smart exercise, rehab, home traction, and a tailored pain plan with your
            veterinarian. Many dogs can maintain a high quality of life for years with the right approach. The goal is
            not to make your dog “normal.” It is to make your dog <strong>comfortable, strong, and stable</strong> while
            slowing arthritis progression.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>
              If you do only one thing first: target a healthy body condition and consistent low-impact conditioning.
            </li>
            <li>
              The biggest mistake: weekend “burst” activity with long rest periods, which often triggers flare-ups.
            </li>
            <li>
              The best indicator of progress: better recovery time, smoother rising, and fewer “bad days,” not a perfect
              gait.
            </li>
          </ul>
        </section>

        {/* Disclaimer */}
        <div className="border border-[#d9cfc2] rounded-xl p-4 mb-10">
          <p className="text-sm text-gray-700">
            <strong>Important note:</strong> This article is educational and cannot replace veterinary care. Hip
            dysplasia management is highly individual. Medication choices and dosages must come from your veterinarian,
            especially because some common human pain medicines are dangerous for dogs.
          </p>
        </div>

        {/* Backlink to pillar */}
        <section className="mb-10">
          <p className="mb-0">
            If you want the full big-picture roadmap (early signs, prevention, diagnostics, non-surgical care, and
            surgical paths), start with our pillar guide:{' '}
            <Link href={`/${locale}/blog/hip-dysplasia-in-dogs-guide`} className="underline font-medium">
              Hip Dysplasia in Dogs: Early Signs, Prevention, Treatment Options, and Life-Care Planning
            </Link>
            .
          </p>
        </section>

        {/* What non-surgical means */}
        <section id="what-non-surgical-means" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What “Non-Surgical” Management Really Means</h2>
          <p className="mb-4">
            “Non-surgical management” does not mean doing nothing. It means you are improving function and comfort
            without changing the structure of the hip through surgery. For many dogs, especially those with mild to
            moderate symptoms, this approach can be extremely effective. For others, it becomes a bridge that keeps them
            comfortable until the right time for surgery, or it becomes the long-term plan when surgery is not possible.
          </p>
          <p className="mb-0">
            The most helpful mindset is this: hip dysplasia is a mechanical problem that becomes an inflammatory problem.
            You cannot fully “undo” the mechanics without surgery, but you can dramatically change how the dog loads the
            joint and how the dog experiences pain.
          </p>
        </section>

        {/* Core principles */}
        <section id="core-principles" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Core Principles That Make Non-Surgical Care Work</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>
              <strong>Reduce joint load:</strong> body condition, traction, and thoughtful movement choices matter every
              day.
            </li>
            <li>
              <strong>Build protective muscle:</strong> stronger glutes, thighs, and core reduce stress on unstable hips.
            </li>
            <li>
              <strong>Control inflammation and pain:</strong> a veterinarian-guided plan prevents spirals where pain
              reduces movement, which reduces muscle, which increases pain.
            </li>
            <li>
              <strong>Avoid boom-bust activity:</strong> consistent, low-impact conditioning beats occasional intense
              play.
            </li>
            <li>
              <strong>Measure outcomes:</strong> track what improves and what triggers flare-ups so your plan gets better
              over time.
            </li>
          </ul>
        </section>

        {/* Weight */}
        <section id="weight" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Body Condition and Weight: The Highest-Value Intervention</h2>
          <p className="mb-4">
            If your dog is even a little overweight, this is often the single most powerful lever you can pull. Less
            weight means less force through the hips with every step. It also tends to improve stamina, reduce
            inflammation, and make rehab more effective.
          </p>
          <p className="mb-4">
            Instead of focusing on the scale alone, focus on <strong>body condition</strong> and your veterinarian’s
            target range. A dog can lose weight and still be weak. The best outcomes come from reducing excess body fat
            while improving muscle mass through safe conditioning.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Practical owner checklist</h3>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>Ask your veterinarian for a body condition score and a realistic target.</li>
            <li>Measure meals for a month. Most “creeping weight” is portion drift, not a sudden change.</li>
            <li>Account for treats as calories. Use part of the daily meal as training rewards if needed.</li>
            <li>
              Weigh-in on a predictable schedule so you catch trends early and avoid overreacting to daily fluctuations.
            </li>
          </ul>
        </section>

        {/* Exercise */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exercise Strategy: How to Keep Strength Without Triggering Pain</h2>
          <p className="mb-4">
            With hip dysplasia, the goal is not to “rest forever.” Rest alone often leads to muscle loss, stiffness, and
            more pain. The goal is a consistent activity plan that builds strength and endurance while keeping your dog
            below their flare-up threshold.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">The pattern that causes setbacks</h3>
          <p className="mb-4">
            A classic scenario is the weekend spike: minimal weekday activity, then a long hike, rough play, repeated
            fetch, or full-speed dog park sprinting. Many dogs look fine during the excitement, then crash later with
            stiffness, limping, or reluctance to rise.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">A better pattern: frequent, low-impact conditioning</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Leashed walks on good footing</strong> (shorter but more frequent) are often the best starting
              point.
            </li>
            <li>
              <strong>Hill walking at a slow pace</strong> can build glute and thigh strength when tolerated.
            </li>
            <li>
              <strong>Swimming and underwater treadmill</strong> can reduce joint load while maintaining fitness, when
              available and appropriate.
            </li>
            <li>
              <strong>Warm-up and cool-down</strong> matter. Many dogs with joint disease need a few minutes to “loosen
              up.”
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Activities to approach cautiously</h3>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>Repetitive ball throwing and hard stops</li>
            <li>Jumping off furniture or in and out of vehicles without support</li>
            <li>Slippery flooring sprints</li>
            <li>Rough play that includes hip checking or repeated twisting</li>
            <li>Long stair sessions without a reason or a plan</li>
          </ul>
        </section>

        {/* Rehab */}
        <section id="rehab" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Rehab and Physical Therapy: Where Many Dogs Improve the Most</h2>
          <p className="mb-4">
            Veterinary rehabilitation is one of the most underused tools in hip dysplasia management. It is not just
            “stretching.” A good rehab plan builds the muscles that stabilize the hip, improves range of motion, and
            reduces compensatory strain on the back and knees.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">What rehab commonly includes</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Targeted strengthening (hips, thighs, core)</li>
            <li>Controlled balance and proprioception work</li>
            <li>Range-of-motion exercises and mobility work</li>
            <li>Manual therapy and soft tissue work</li>
            <li>Hydrotherapy or underwater treadmill when appropriate</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">What owners should look for in a rehab plan</h3>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>A clear progression (what changes week to week)</li>
            <li>Home exercises that are realistic and safe</li>
            <li>Tracking outcomes (comfort, stamina, recovery time)</li>
            <li>Coordination with your primary veterinarian and imaging findings when available</li>
          </ul>
        </section>

        {/* Medications */}
        <section id="medications" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Medications and Pain Control: Getting the Balance Right</h2>
          <p className="mb-4">
            Medications are not a “failure.” Pain control often enables movement, and movement is what preserves muscle.
            Many dogs do best with a plan that includes one or more medication tools during flare-ups or long periods of
            increased activity.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Common medication categories your veterinarian may discuss</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>NSAIDs:</strong> often the backbone for osteoarthritis pain in dogs when appropriate.
            </li>
            <li>
              <strong>Adjunct pain medications:</strong> sometimes used when NSAIDs alone do not provide enough relief or
              when flare-ups are significant.
            </li>
            <li>
              <strong>Longer-term pain strategies:</strong> tailored plans that may change as arthritis progresses.
            </li>
          </ul>

          <p className="mb-4">
            The best outcomes usually come from avoiding the pain spiral. If your dog hurts, they move less. If they
            move less, they lose muscle. If they lose muscle, the hips become less stable. The goal is to interrupt that
            cycle early with a plan your veterinarian agrees is safe for your dog.
          </p>

          <p className="mb-0">
            For diagnostics and how veterinarians confirm hip dysplasia (including what imaging shows and what other
            conditions need to be ruled out), see:{' '}
            <Link href={`/${locale}/blog/how-veterinarians-diagnose-hip-dysplasia`} className="underline font-medium">
              How Veterinarians Diagnose Hip Dysplasia in Dogs
            </Link>
            .
          </p>
        </section>

        {/* Injections */}
        <section id="injections" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Joint Injections and Advanced Non-Surgical Options</h2>
          <p className="mb-4">
            Some dogs benefit from veterinarian-administered therapies beyond daily home care. The right choice depends
            on severity, age, overall health, and what your veterinarian sees on exam and imaging.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Examples of options a veterinarian may discuss</h3>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>
              <strong>Injectable joint therapies:</strong> sometimes used to support joint health and comfort over time.
            </li>
            <li>
              <strong>Intra-articular injections:</strong> performed by veterinarians in appropriate cases, sometimes
              used for osteoarthritis pain management.
            </li>
            <li>
              <strong>Regenerative medicine approaches:</strong> availability and evidence vary, and candid discussions
              about expectations are important.
            </li>
          </ul>
        </section>

        {/* Supplements */}
        <section id="supplements" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Supplements and Nutrition: Helpful, but Not Magic</h2>
          <p className="mb-4">
            Supplements can be part of a strong non-surgical plan, but they should not replace the high-impact pillars:
            weight control, consistent conditioning, traction, and veterinarian-guided pain control.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">What tends to matter most</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Omega-3 fatty acids</strong> are frequently discussed for joint inflammation support.
            </li>
            <li>
              <strong>Joint health supplements</strong> are common, but results vary by product, dosing, and individual
              dog.
            </li>
            <li>
              <strong>Prescription joint diets</strong> may be considered in some cases, especially when weight control
              is a challenge.
            </li>
          </ul>

          <p className="mb-0">
            If you are unsure what is worth the money, ask your veterinarian to prioritize the top two changes most
            likely to help your dog specifically. Many owners spend heavily on low-impact add-ons while underinvesting in
            body condition and rehab, which typically move the needle more.
          </p>
        </section>

        {/* Home */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home and Lifestyle Modifications That Reduce Daily Pain</h2>
          <p className="mb-4">
            Home modifications often deliver surprisingly large benefits because they reduce the little micro-slips and
            awkward movements that happen dozens of times per day. These changes also protect the back and knees, which
            often take on extra strain when hips are unstable.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Traction and flooring</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Add runners or mats on slick surfaces (tile, hardwood, laminate).</li>
            <li>Use traction near doorways, water bowls, and common turning zones.</li>
            <li>Keep nails trimmed and paw fur managed for better grip.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Ramps, steps, and lifting support</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Use a ramp for vehicles and high beds if your dog hesitates or lands hard.</li>
            <li>A support harness can help with stairs, slippery outdoor steps, and getting into position safely.</li>
            <li>Reduce jumping off couches and porches, especially on hard ground.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Rest and recovery</h3>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>A supportive bed can reduce stiffness after sleep.</li>
            <li>Warmth can help many dogs with arthritis, especially in colder months.</li>
            <li>Plan rest breaks during activity days instead of pushing until a flare-up happens.</li>
          </ul>
        </section>

        {/* Monitoring */}
        <section id="monitoring" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Monitoring Progress: What to Track So You Know It Is Working</h2>
          <p className="mb-4">
            Hip dysplasia management is rarely linear. Dogs often improve, plateau, and occasionally flare. Tracking a
            few simple signals helps you see true progress and lets your veterinarian adjust the plan intelligently.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Simple things to log weekly</h3>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>Time to rise after sleep (faster usually means better comfort)</li>
            <li>Recovery time after walks (same-day stiffness matters)</li>
            <li>Stair hesitation and car-entry hesitation</li>
            <li>Play duration before disengagement</li>
            <li>Number of “bad days” per week</li>
          </ul>
        </section>

        {/* When surgery */}
        <section id="when-surgery" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When Non-Surgical Management Is Not Enough</h2>
          <p className="mb-4">
            Non-surgical care can be excellent, but it is not always sufficient. There are cases where the dog remains
            uncomfortable despite a strong plan, or where quality of life is clearly declining.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Common reasons veterinarians recommend reconsidering surgery</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Persistent pain despite appropriate medication and rehab</li>
            <li>Progressive loss of mobility or willingness to move</li>
            <li>Frequent flare-ups that disrupt normal life</li>
            <li>Significant arthritis progression on imaging paired with worsening symptoms</li>
          </ul>

          <p className="mb-0">
            Surgical decision-making is complex and depends on age, anatomy, severity, and family resources. The best
            next step is usually a frank conversation with your veterinarian or an orthopedic specialist about expected
            outcomes with both paths.
          </p>
        </section>

        {/* Next steps and links */}
        <section id="next-steps" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Next Steps: Living Well and Planning Long-Term</h2>
          <p className="mb-4">
            Once you have a non-surgical plan, the next challenge is making it sustainable: daily routines, flare-up
            plans, travel adjustments, and long-term expectations.
          </p>

          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Next: living with hip dysplasia day-to-day (routines, flare-ups, stairs, travel, and “what normal looks
              like”).
            </li>
            <li>Also helpful: understanding the cost tradeoffs across meds, rehab, imaging, and surgery options.</li>
          </ul>

          <p className="mb-4">
            For the complete roadmap and how this article fits into diagnosis, prevention, and treatment planning, return
            to the pillar guide:{' '}
            <Link href={`/${locale}/blog/hip-dysplasia-in-dogs-guide`} className="underline font-medium">
              Hip Dysplasia in Dogs: Early Signs, Prevention, Treatment Options, and Life-Care Planning
            </Link>
            .
          </p>

          <p className="mb-0">
            If you want to confirm diagnosis and understand what imaging and orthopedic exams can (and cannot) tell you,
            see:{' '}
            <Link href={`/${locale}/blog/how-veterinarians-diagnose-hip-dysplasia`} className="underline font-medium">
              How Veterinarians Diagnose Hip Dysplasia in Dogs
            </Link>
            .
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>American College of Veterinary Surgeons. Canine Hip Dysplasia.</li>
            <li>AAHA. Canine Pain Management Guidelines.</li>
            <li>Orthopedic Foundation for Animals. Hip Evaluation Resources.</li>
            <li>WSAVA. Global Nutrition and Weight Management Guidance.</li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian for diagnosis and treatment decisions.
          </p>
        </section>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
