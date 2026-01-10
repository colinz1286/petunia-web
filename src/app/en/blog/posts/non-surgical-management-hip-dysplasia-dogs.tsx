'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function NonSurgicalManagementHipDysplasia() {
  const locale = useLocale();

  const title =
    'Non-Surgical Management of Hip Dysplasia in Dogs: Weight, Rehab, Pain Control, Home Setup, and Long-Term Planning';
  const date = 'January 8, 2026';
  const slug = 'non-surgical-management-hip-dysplasia-dogs';

  const description =
    'A comprehensive, owner-first guide to managing canine hip dysplasia without surgery, including weight targets, exercise rules, physical therapy, pain control, supplements, home modifications, monitoring, and when to escalate care.';

  const categories = ['owner'] as const;

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
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/${slug}`}
        />
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

        {/* Intro + Pillar link */}
        <section className="mb-8">
          <p className="mb-4">
            Hip dysplasia is a mechanical and inflammatory problem, but for many dogs, the best outcomes come from
            consistent, non-surgical management: reducing load, strengthening stabilizers, protecting the joint, and
            controlling pain so your dog can keep moving safely.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Where this article fits:</strong> This is the detailed non-surgical playbook that plugs into our full
            pillar guide:{' '}
            <Link
              href={`/${locale}/blog/hip-dysplasia-in-dogs-guide`}
              className="underline font-medium hover:opacity-80"
            >
              Hip Dysplasia in Dogs: Early Signs, Prevention, Treatment Options, and Life-Care Planning
            </Link>
            .
          </div>
        </section>

        {/* TOC */}
        <nav className="mb-10 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href="#tldr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#who-this-is-for" className="underline hover:opacity-80">
                Who This Works For
              </a>
            </li>
            <li>
              <a href="#core-goals" className="underline hover:opacity-80">
                Core Goals
              </a>
            </li>
            <li>
              <a href="#big-three" className="underline hover:opacity-80">
                The Big Three
              </a>
            </li>
            <li>
              <a href="#weight" className="underline hover:opacity-80">
                Weight and Body Condition
              </a>
            </li>
            <li>
              <a href="#exercise" className="underline hover:opacity-80">
                Exercise Rules That Protect the Hip
              </a>
            </li>
            <li>
              <a href="#rehab" className="underline hover:opacity-80">
                Rehab and Physical Therapy
              </a>
            </li>
            <li>
              <a href="#pain" className="underline hover:opacity-80">
                Pain Control and Medications
              </a>
            </li>
            <li>
              <a href="#supplements" className="underline hover:opacity-80">
                Supplements and Joint Support
              </a>
            </li>
            <li>
              <a href="#home" className="underline hover:opacity-80">
                Home Setup and Daily Living
              </a>
            </li>
            <li>
              <a href="#monitoring" className="underline hover:opacity-80">
                Monitoring Progress
              </a>
            </li>
            <li>
              <a href="#when-to-escalate" className="underline hover:opacity-80">
                When to Escalate Care
              </a>
            </li>
            <li>
              <a href="#next-steps" className="underline hover:opacity-80">
                Next Steps
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                Sources
              </a>
            </li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Non-surgical management of hip dysplasia is a structured plan built around three levers:
            <strong> (1) weight targets</strong>, <strong>(2) controlled exercise + rehab</strong>, and{' '}
            <strong>(3) pain control that keeps your dog moving</strong>. Home modifications and consistent monitoring
            turn those levers into real-world quality of life. Many dogs do well for years with this approach, but it
            requires consistency and periodic rechecks.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important:</strong> This is educational content. Medications (especially NSAIDs), sedation,
            injections, and rehab plans must be chosen with your veterinary team based on your dog&rsquo;s exam findings
            and risk factors.
          </div>
        </section>

        {/* Who this is for */}
        <section id="who-this-is-for" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Who Non-Surgical Management Works For</h2>
          <p className="mb-4">
            Non-surgical management is not a compromise plan. It is often the right plan for many dogs, including:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Dogs with mild to moderate signs who still enjoy movement</li>
            <li>Older dogs where surgery may not match goals or risk tolerance</li>
            <li>Dogs with arthritis where the goal is comfort and function</li>
            <li>Families choosing to delay surgery while building strength and reducing weight</li>
            <li>Dogs whose imaging looks abnormal but symptoms are manageable</li>
          </ul>
          <p className="mb-0">
            If you are still unsure whether your dog&rsquo;s signs point to hip dysplasia, start with our early
            checklist:{' '}
            <Link
              href={`/${locale}/blog/early-signs-of-hip-dysplasia-owners-miss`}
              className="underline font-medium hover:opacity-80"
            >
              Early Signs of Hip Dysplasia Owners Miss
            </Link>
            .
          </p>
        </section>

        {/* Core goals */}
        <section id="core-goals" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Core Goals: What We Are Actually Trying to Do</h2>
          <p className="mb-4">
            A good plan does not just reduce pain today. It aims to keep your dog stable and confident on the back end
            while slowing arthritis acceleration.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              <strong>Reduce joint load</strong> so the hip is not asked to absorb more force than it can handle
            </li>
            <li>
              <strong>Improve muscular support</strong> (glutes, hamstrings, core) so movement becomes easier
            </li>
            <li>
              <strong>Maintain safe motion</strong> so stiffness does not snowball into weakness
            </li>
            <li>
              <strong>Control inflammation and pain</strong> so your dog can move, sleep, and recover normally
            </li>
            <li>
              <strong>Create a household routine</strong> that is sustainable, not exhausting
            </li>
          </ul>
        </section>

        {/* The Big Three */}
        <section id="big-three" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Big Three: The Simplest Framework That Works</h2>
          <p className="mb-4">
            If your plan feels overwhelming, anchor on these three pillars and build outward.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Weight:</strong> get to a realistic target and stay there
              </li>
              <li>
                <strong>Movement:</strong> avoid high-impact spikes and build controlled strength
              </li>
              <li>
                <strong>Pain control:</strong> use veterinary-guided tools that keep your dog active without masking
                dangerous overuse
              </li>
            </ul>
          </div>
          <p className="mb-0">
            If you want a step-by-step overview of how hip dysplasia is diagnosed (and how findings guide management),
            see:{' '}
            <Link
              href={`/${locale}/blog/how-veterinarians-diagnose-hip-dysplasia`}
              className="underline font-medium hover:opacity-80"
            >
              How Veterinarians Diagnose Hip Dysplasia in Dogs
            </Link>
            .
          </p>
        </section>

        {/* Weight */}
        <section id="weight" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weight and Body Condition: The Highest-Impact Change</h2>
          <p className="mb-4">
            Excess body fat is a double hit: it increases mechanical load and it supports inflammatory signaling. Even a
            small reduction in weight can meaningfully improve comfort and endurance.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">What to Aim For</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Ask your vet for a <strong>Body Condition Score</strong> and a target weight range
            </li>
            <li>
              In many cases, the goal is a leaner outline where ribs are easy to feel with light pressure
            </li>
            <li>
              Your dog should look athletic, not soft around the waist and hips
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Practical Weight Plan</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Use a kitchen scale for food, not a scoop</li>
            <li>Account for treats as part of the daily total</li>
            <li>Choose low-calorie treat swaps (or use part of the regular kibble as treats)</li>
            <li>Track weight on the same scale, same time of day, every 2 to 4 weeks</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Reality check:</strong> Exercise alone rarely produces weight loss in dogs. Food strategy is usually
            the driver, and movement becomes the tool that protects muscle while the weight comes down.
          </div>
        </section>

        {/* Exercise Rules */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exercise Rules That Protect the Hip</h2>
          <p className="mb-4">
            Most setbacks come from <strong>spikes</strong>, not from steady movement. The goal is to build a predictable
            routine that improves strength without triggering a flare.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">The Rule of Consistency</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Prefer <strong>daily moderate movement</strong> over weekend extremes
            </li>
            <li>
              Keep sessions short enough that your dog finishes comfortably
            </li>
            <li>
              Increase duration slowly (think small weekly changes, not big leaps)
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Low-Impact Options That Often Work Well</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Leashed walks on flat, grippy surfaces</li>
            <li>Slow incline walking (if tolerated) instead of sprinting</li>
            <li>Swimming or underwater treadmill (when guided properly)</li>
            <li>Short, controlled play that avoids wild twisting and jumping</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Common Triggers to Limit</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Repeated jumping on and off furniture</li>
            <li>Stairs as a fitness routine</li>
            <li>Explosive ball chasing with hard stops and pivots</li>
            <li>Slippery flooring where the rear end slips and scrambles</li>
            <li>Long hikes that create next-day soreness and stiffness</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Simple self-test:</strong> If your dog is more stiff the next morning, you did too much. Back down,
            then rebuild.
          </div>
        </section>

        {/* Rehab */}
        <section id="rehab" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Rehab and Physical Therapy: Strength Is Joint Protection</h2>
          <p className="mb-4">
            Rehab is where many dogs get their best quality-of-life gains. The right program improves hip stability,
            builds muscle symmetry, and teaches your dog how to move in ways that cost less pain.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">What Rehab Commonly Includes</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Targeted strengthening (glutes, hamstrings, hip stabilizers)</li>
            <li>Core work to improve rear-end control</li>
            <li>Range-of-motion and stretching guidance (when appropriate)</li>
            <li>Gait training and controlled transitions (sit-to-stand, slow steps)</li>
            <li>Hydrotherapy or underwater treadmill when available</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Why Professional Guidance Helps</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Exercises can be modified to your dog&rsquo;s pain and laxity profile</li>
            <li>Form matters: bad mechanics can reinforce pain patterns</li>
            <li>Progression becomes safer and easier to stick with</li>
          </ul>

          <p className="mb-0">
            If you feel stuck, ask your veterinarian about referral to a rehabilitation specialist. Even a short series
            of sessions can give you a sustainable at-home routine.
          </p>
        </section>

        {/* Pain control */}
        <section id="pain" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Pain Control and Medications: Comfort Enables Movement</h2>
          <p className="mb-4">
            Pain control is not about sedating your dog or ignoring the problem. It is about restoring normal movement
            so muscles stay strong and stiffness does not spiral.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">NSAIDs and Anti-Inflammatory Strategies</h3>
          <p className="mb-4">
            Many dogs with hip dysplasia benefit from veterinary-guided NSAIDs. These can reduce inflammation and help
            dogs move more normally, which often improves long-term function.
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Never use over-the-counter human NSAIDs without explicit veterinary direction
            </li>
            <li>
              Discuss liver and kidney risk screening, and what follow-up labs your vet recommends
            </li>
            <li>
              Ask about a flare plan: what to do when symptoms spike
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Adjunct Pain Medications</h3>
          <p className="mb-4">
            Depending on your dog&rsquo;s profile, your vet may consider additional tools that support comfort and
            mobility. The best plan is individualized, especially if there are multiple pain generators (hip plus spine,
            hip plus knee, and so on).
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Injections and Newer Therapies</h3>
          <p className="mb-4">
            Some dogs benefit from veterinary-administered joint injections or newer pain-control approaches. These
            options vary by region and by patient, and they should be discussed in the context of diagnosis severity and
            your household goals.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Key idea:</strong> Pain control should make your dog move better, not encourage unsafe overuse. If
            comfort improves but your dog starts doing high-impact behaviors again, you still need guardrails.
          </div>
        </section>

        {/* Supplements */}
        <section id="supplements" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Supplements and Joint Support: Helpful, but Not the Foundation</h2>
          <p className="mb-4">
            Supplements can be useful, but they are not a replacement for weight management, rehab, and veterinary pain
            control. Think of them as support, not the engine.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Common Categories Owners Discuss With Vets</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Omega-3 fatty acids for inflammatory support</li>
            <li>Joint support blends (glucosamine, chondroitin, and similar combinations)</li>
            <li>Prescription joint diets (when appropriate)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">How to Use Supplements Intelligently</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Ask your vet what is worth trying for your dog&rsquo;s age and severity</li>
            <li>Give it a fair trial window (often several weeks) with consistent dosing</li>
            <li>Track changes in real outcomes: stairs, car entry, morning stiffness, and play duration</li>
          </ul>

          <p className="mb-0">
            If you are looking for the big-picture life plan beyond supplements (including home setup and long-term
            planning), this article will plug into our living guide in the next steps section below.
          </p>
        </section>

        {/* Home */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home Setup and Daily Living: Make the Environment Hip-Friendly</h2>
          <p className="mb-4">
            The best plan fails if the household environment forces painful movement all day. Small modifications can
            create surprisingly large improvements.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Flooring and Traction</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Add rugs or runners in the main pathways</li>
            <li>Use traction mats near water bowls, doors, and couch areas</li>
            <li>Keep nails trimmed so feet grip properly</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Beds, Steps, and Ramps</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Provide a supportive bed that is easy to step into</li>
            <li>Use ramps for cars and furniture when needed</li>
            <li>Consider blocking off stairs during flare periods</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Daily Handling Tips</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Use a harness for controlled walking and safer assistance</li>
            <li>Warm up gently before longer walks (a few minutes of easy movement)</li>
            <li>Prefer multiple short outings over one exhausting session</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Simple win:</strong> Traction is often the fastest home improvement. Dogs that stop slipping tend to
            move with more confidence and less guarded stiffness.
          </div>
        </section>

        {/* Monitoring */}
        <section id="monitoring" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Monitoring Progress: How to Know Your Plan Is Working</h2>
          <p className="mb-4">
            Your job is not to guess. Your job is to measure. When you track a few simple metrics, you can tell if you
            are improving function or drifting into a slow decline.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Easy Household Metrics</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Morning stiffness duration (seconds or minutes)</li>
            <li>Stair confidence (up, down, both)</li>
            <li>Car entry (jump, hesitation, needs ramp)</li>
            <li>Walk duration before slowing down</li>
            <li>Post-play recovery time</li>
            <li>Sleep quality (restlessness and frequent repositioning)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">What Improvement Usually Looks Like</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Less hesitation in daily tasks</li>
            <li>More symmetrical movement</li>
            <li>Better endurance without next-day payback</li>
            <li>More stable mood and less irritability around handling</li>
          </ul>

          <p className="mb-0">
            If you notice early subtle changes and want to confirm you are not missing important clues, revisit:{' '}
            <Link
              href={`/${locale}/blog/early-signs-of-hip-dysplasia-owners-miss`}
              className="underline font-medium hover:opacity-80"
            >
              Early Signs of Hip Dysplasia Owners Miss
            </Link>
            .
          </p>
        </section>

        {/* Escalate */}
        <section id="when-to-escalate" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Escalate Care: A Clear Decision Framework</h2>
          <p className="mb-4">
            Non-surgical management can work extremely well, but it should not trap you in endless uncertainty. You want
            clear triggers for changing course.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Escalation Triggers</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Persistent pain despite a consistent plan and veterinary-guided adjustments</li>
            <li>Functional decline: difficulty rising, inability to enjoy walks, or frequent falls</li>
            <li>Repeated flares that require ongoing medication increases</li>
            <li>Muscle loss that continues even with rehab effort</li>
            <li>Household quality-of-life strain (you cannot safely manage daily needs)</li>
          </ul>

          <p className="mb-4">
            If you are not sure where your dog fits on the diagnosis and severity spectrum, this diagnostic guide helps
            you ask the right questions and interpret results:{' '}
            <Link
              href={`/${locale}/blog/how-veterinarians-diagnose-hip-dysplasia`}
              className="underline font-medium hover:opacity-80"
            >
              How Veterinarians Diagnose Hip Dysplasia in Dogs
            </Link>
            .
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Good escalation:</strong> Referral to an orthopedic surgeon or rehab specialist is not a failure. It
            is how many families get clarity, better tools, and realistic timelines.
          </div>
        </section>

        {/* Next steps + backlinks */}
        <section id="next-steps" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Next Steps: Keep the Whole Plan Connected</h2>
          <p className="mb-4">
            Non-surgical management is most effective when it is connected to diagnosis, daily living strategy, and
            realistic budgeting. Here is the clean path through the series:
          </p>

          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              Start with early recognition:{' '}
              <Link
                href={`/${locale}/blog/early-signs-of-hip-dysplasia-owners-miss`}
                className="underline font-medium hover:opacity-80"
              >
                Early Signs of Hip Dysplasia Owners Miss
              </Link>
            </li>
            <li>
              Understand how vets confirm and grade it:{' '}
              <Link
                href={`/${locale}/blog/how-veterinarians-diagnose-hip-dysplasia`}
                className="underline font-medium hover:opacity-80"
              >
                How Veterinarians Diagnose Hip Dysplasia in Dogs
              </Link>
            </li>
            <li>
              Return to the full roadmap (this article plugs into the non-surgical section):{' '}
              <Link
                href={`/${locale}/blog/hip-dysplasia-in-dogs-guide`}
                className="underline font-medium hover:opacity-80"
              >
                Hip Dysplasia in Dogs: Early Signs, Prevention, Treatment Options, and Life-Care Planning
              </Link>
            </li>
            <li>
              Daily life planning and routines:{' '}
              <Link
                href={`/${locale}/blog/living-with-hip-dysplasia-in-dogs`}
                className="underline font-medium hover:opacity-80"
              >
                Living With Hip Dysplasia: Daily Life, Routines, and Long-Term Quality of Life
              </Link>
            </li>
            <li>
              Budgeting and what to expect financially:{' '}
              <Link
                href={`/${locale}/blog/cost-of-hip-dysplasia-treatment-in-dogs`}
                className="underline font-medium hover:opacity-80"
              >
                Cost of Hip Dysplasia Treatment: Non-Surgical Care, Rehab, Injections, and Surgical Ranges
              </Link>
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Note:</strong> If the &ldquo;Living With&rdquo; and cost article slugs differ in your site structure,
            keep the section and update the URLs. The internal linking strategy remains the same.
          </div>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>American College of Veterinary Surgeons (ACVS). Canine Hip Dysplasia (client education).</li>
            <li>Orthopedic Foundation for Animals (OFA). Hip Dysplasia and Hip Evaluation resources.</li>
            <li>AAHA resources related to canine pain management and life-stage guidance.</li>
            <li>WSAVA global nutrition and weight management resources.</li>
            <li>Merck Veterinary Manual resources related to osteoarthritis and chronic pain in dogs.</li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian (and qualified orthopedic or rehabilitation
            professionals) for individualized recommendations. Medication choices and dosing must be made with your
            veterinary team based on your dog&rsquo;s health profile.
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
