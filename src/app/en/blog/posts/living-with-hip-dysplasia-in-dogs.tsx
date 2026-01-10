'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function LivingWithHipDysplasiaInDogs() {
  const locale = useLocale();

  const title =
    'Living With Hip Dysplasia in Dogs: Daily Routines, Home Setup, Exercise, Flare Plans, and Long-Term Quality of Life';
  const date = 'January 9, 2025';
  const slug = 'living-with-hip-dysplasia-in-dogs';

  const description =
    'A comprehensive, owner-first guide to living with canine hip dysplasia day to day, including home traction, stairs and cars, sleep comfort, exercise routines, flare plans, mental enrichment, grooming and handling tips, travel, seasons, and how to monitor progress over time.';

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

        {/* Intro */}
        <section className="mb-8">
          <p className="mb-4">
            Hip dysplasia is not just a diagnosis. It is a day-to-day management problem that lives in your floors, your
            stairs, your routines, your exercise habits, and your ability to prevent flare-ups before they become a bad
            week.
          </p>
          <p className="mb-0">
            This guide is designed to help you build a realistic lifestyle plan that protects your dog&rsquo;s hips
            without turning your home into a medical facility. If you are early in the process and still trying to
            figure out whether the signs you see matter, start here:{' '}
            <Link
              href={`/${locale}/blog/early-signs-of-hip-dysplasia-owners-miss`}
              className="underline font-medium hover:opacity-80"
            >
              Early Signs of Hip Dysplasia Owners Miss
            </Link>
            .
          </p>
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
              <a href="#principles" className="underline hover:opacity-80">
                The Core Principles
              </a>
            </li>
            <li>
              <a href="#home-traction" className="underline hover:opacity-80">
                Floors and Traction
              </a>
            </li>
            <li>
              <a href="#stairs-cars" className="underline hover:opacity-80">
                Stairs, Cars, and Furniture
              </a>
            </li>
            <li>
              <a href="#sleep" className="underline hover:opacity-80">
                Sleep, Beds, and Rest
              </a>
            </li>
            <li>
              <a href="#exercise" className="underline hover:opacity-80">
                Exercise That Builds, Not Breaks
              </a>
            </li>
            <li>
              <a href="#flare-plan" className="underline hover:opacity-80">
                Your Flare Plan
              </a>
            </li>
            <li>
              <a href="#enrichment" className="underline hover:opacity-80">
                Mental Enrichment on Low-Mobility Days
              </a>
            </li>
            <li>
              <a href="#handling" className="underline hover:opacity-80">
                Handling, Grooming, and Daily Care
              </a>
            </li>
            <li>
              <a href="#weather" className="underline hover:opacity-80">
                Weather and Seasonal Strategies
              </a>
            </li>
            <li>
              <a href="#travel" className="underline hover:opacity-80">
                Travel and Schedule Changes
              </a>
            </li>
            <li>
              <a href="#monitoring" className="underline hover:opacity-80">
                Monitoring: What to Track
              </a>
            </li>
            <li>
              <a href="#quality" className="underline hover:opacity-80">
                Quality of Life Decisions
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                Sources
              </a>
            </li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Living well with hip dysplasia is mostly about preventing repeat injury and inflammation. The biggest wins
            usually come from <strong>traction at home</strong>, <strong>predictable exercise</strong>,{' '}
            <strong>smart rest</strong>, and a <strong>clear flare plan</strong> that you follow early instead of late.
            If your dog is comfortable and still enjoying life, you are doing it right.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important:</strong> This article is educational. Medication choices, dosing, and therapy plans must
            be decided with your veterinarian based on your dog&rsquo;s exam findings and health risks.
          </div>
        </section>

        {/* Principles */}
        <section id="principles" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Core Principles That Make the Biggest Difference</h2>
          <p className="mb-4">
            Hip dysplasia is often a pattern problem. Your dog has good days and bad days. Your goal is to reduce the
            things that create &ldquo;bad streaks.&rdquo;
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Principle 1: Avoid Spikes</h3>
          <p className="mb-4">
            Most setbacks come from sudden changes: a big hike, a slippery fall, a wild play session, too many stairs,
            or a long day where your dog tries to keep up.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Principle 2: Keep Moving, But Keep It Controlled</h3>
          <p className="mb-4">
            Muscles stabilize joints. When movement disappears, weakness grows, and the hip becomes less supported. The
            right plan keeps your dog active enough to maintain strength without triggering inflammation.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Principle 3: Comfort Improves Mechanics</h3>
          <p className="mb-4">
            Pain changes how dogs move. When they guard and compensate, other parts of the body get overloaded (knees,
            spine, shoulders). A good plan protects the whole system, not only the hip.
          </p>

          <p className="mb-0">
            If you want a clear picture of how vets confirm hip dysplasia and rule out look-alikes, this guide helps you
            speak the same language as your veterinary team:{' '}
            <Link
              href={`/${locale}/blog/how-veterinarians-diagnose-hip-dysplasia`}
              className="underline font-medium hover:opacity-80"
            >
              How Veterinarians Diagnose Hip Dysplasia in Dogs
            </Link>
            .
          </p>
        </section>

        {/* Traction */}
        <section id="home-traction" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Floors and Traction: The Fastest Home Upgrade</h2>
          <p className="mb-4">
            Slipping looks minor, but it is one of the most common hidden causes of flare-ups. A dog that constantly
            scrambles to find footing uses the hip incorrectly and strains muscles that try to stabilize.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">What to Change First</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Place runners in main walk paths (bed to door, door to food, couch to hallway)</li>
            <li>Add traction mats near water bowls, doorways, and any &ldquo;turning&rdquo; zones</li>
            <li>Use a non-slip mat under food and water bowls to prevent awkward bracing</li>
            <li>Keep nails trimmed so the foot can grip</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">How to Know If Traction Is a Problem</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Rear feet slide even slightly when turning or getting up</li>
            <li>Your dog hesitates before walking on tile or hardwood</li>
            <li>You hear a lot of &ldquo;scratching&rdquo; sounds while they walk</li>
            <li>They choose carpeted areas and avoid smooth surfaces</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Small detail that matters:</strong> A dog that feels safe on the floor moves more normally, and more
            normal movement often means less pain.
          </div>
        </section>

        {/* Stairs and cars */}
        <section id="stairs-cars" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Stairs, Cars, and Furniture: Reduce Repetitive Joint Stress</h2>
          <p className="mb-4">
            Repeated jumping and stair climbing creates a cycle: pain causes awkward movement, awkward movement causes
            strain, strain worsens pain. Your goal is not to restrict your dog&rsquo;s life. Your goal is to reduce
            unnecessary wear.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Stairs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>If you have stairs, reduce the number of trips per day when possible</li>
            <li>Use a harness for slow, controlled stair movement during flare periods</li>
            <li>Consider a baby gate to block stairs when you cannot supervise</li>
            <li>
              If stairs are unavoidable, prioritize traction (carpet treads or non-slip stair covers) and slow pacing
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Cars</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Use a ramp or steps if car entry causes hesitation or &ldquo;stutter&rdquo; jumping</li>
            <li>Train ramp use with calm reinforcement and slow repetition</li>
            <li>Lift smart: support the chest and hips evenly, and avoid twisting the back end</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Furniture</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>If your dog jumps on and off furniture all day, consider a ramp or steps</li>
            <li>Make one or two preferred resting places comfortable so your dog chooses them naturally</li>
            <li>If your dog insists on the couch, remove the need for repeated jumping</li>
          </ul>

          <p className="mb-0">
            If your dog is at the stage of hesitating before car entry or stairs, that is an important early signal.
            This checklist helps you interpret those daily-life signs:{' '}
            <Link
              href={`/${locale}/blog/early-signs-of-hip-dysplasia-owners-miss`}
              className="underline font-medium hover:opacity-80"
            >
              Early Signs of Hip Dysplasia Owners Miss
            </Link>
            .
          </p>
        </section>

        {/* Sleep */}
        <section id="sleep" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Sleep, Beds, and Rest: Reduce Nighttime Stiffness</h2>
          <p className="mb-4">
            Poor sleep makes everything worse. Dogs with hip dysplasia often reposition frequently because they cannot
            stay comfortable, and that repeated &ldquo;get up, turn, lie down&rdquo; cycle can increase stiffness.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">What a Good Bed Does</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Provides support without feeling like a hard floor</li>
            <li>Allows easy entry and exit (not too tall, not too squishy)</li>
            <li>Stays in place so the bed does not slide when your dog stands up</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Common Sleep Setups That Help</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Place the bed near you so your dog does not repeatedly relocate overnight</li>
            <li>Add a second bed in the room your dog spends the most daytime hours in</li>
            <li>Use a washable cover so you can keep the bed clean without removing the support layer</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>What owners often notice:</strong> Better sleep often shows up as improved mornings. If your dog gets
            up faster and seems less stiff, your setup is helping.
          </div>
        </section>

        {/* Exercise */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exercise That Builds, Not Breaks</h2>
          <p className="mb-4">
            You are trying to protect two things at once: the hip joint and your dog&rsquo;s strength. The safest plan
            is usually consistent, controlled movement with clear guardrails.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">The Most Important Rule</h3>
          <p className="mb-4">
            Keep activity steady. Do not create weekday underactivity with weekend hero workouts. Hip dysplasia tends to
            punish extremes.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">A Simple Daily Template Many Dogs Tolerate</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Two to four short leash walks on grippy surfaces</li>
            <li>Slow sniffing is fine if it does not turn into sudden lunges and pivots</li>
            <li>Short controlled play that avoids full-speed sprinting and hard turns</li>
            <li>Rest breaks before your dog looks exhausted</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">What Usually Causes Trouble</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Explosive fetch with repeated stop-and-turn movement</li>
            <li>Wrestling play on slippery flooring</li>
            <li>Long hikes that produce next-day stiffness</li>
            <li>Off-leash chasing with unpredictable terrain</li>
            <li>Stair repetition used as a &ldquo;workout&rdquo;</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Helpful self-check:</strong> If your dog is stiffer the next morning, you did too much yesterday.
            Reduce duration or intensity and rebuild gradually.
          </div>
        </section>

        {/* Flare plan */}
        <section id="flare-plan" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Your Flare Plan: What to Do When Symptoms Spike</h2>
          <p className="mb-4">
            Flare-ups happen. The difference between a one-day setback and a two-week setback is often how early you
            respond and how consistent you are for the next few days.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Step 1: Reduce, Do Not Eliminate, Movement</h3>
          <p className="mb-4">
            Total rest can increase stiffness. Instead, reduce intensity and keep movement controlled. Think shorter
            leash walks, slow pacing, and more rest breaks.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Step 2: Prevent Additional Injury</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Use traction paths in the house immediately</li>
            <li>Block stairs if possible</li>
            <li>Stop jumping on and off furniture during the flare</li>
            <li>Use a harness for controlled transitions</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Step 3: Use the Medication Plan Your Vet Already Approved</h3>
          <p className="mb-4">
            Many owners lose time during a flare because they do not have an agreed plan. Ask your veterinarian to help
            you build a simple &ldquo;flare protocol&rdquo; so you know what is safe to do and when to call.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Step 4: Decide When the Flare Is No Longer Normal</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Pain or limping persists beyond a short, expected window</li>
            <li>Your dog struggles to rise or cannot settle comfortably</li>
            <li>Appetite changes or mood changes accompany the flare</li>
            <li>You suspect a new injury (slip, fall, awkward landing)</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Practical framing:</strong> The goal of a flare plan is not perfection. It is to keep flares smaller
            and shorter.
          </div>
        </section>

        {/* Enrichment */}
        <section id="enrichment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mental Enrichment on Low-Mobility Days</h2>
          <p className="mb-4">
            Many dogs become frustrated when movement is restricted. Mental enrichment keeps your dog satisfied without
            triggering physical overuse.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Low-Impact Enrichment Ideas</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Sniffing games: scatter feeding on a mat or in a towel</li>
            <li>Food puzzles that do not require hard pawing or twisting</li>
            <li>Simple training sessions (sit, down, chin rest, paw, touch) on grippy flooring</li>
            <li>Short sniff walks where the goal is exploration, not distance</li>
            <li>Chews that encourage calm, stationary engagement</li>
          </ul>

          <p className="mb-0">
            Your dog does not have to be exhausted physically to be satisfied. Calm engagement and predictable routines
            can do a lot.
          </p>
        </section>

        {/* Handling */}
        <section id="handling" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Handling, Grooming, and Daily Care Without Causing Pain</h2>
          <p className="mb-4">
            Many dogs with hip discomfort become sensitive during nail trims, brushing, bathing, and transitions. That
            sensitivity is not attitude. It is often pain or instability.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Grooming Tips That Reduce Strain</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Use non-slip mats for grooming areas</li>
            <li>Keep sessions short and calm, with breaks</li>
            <li>Avoid forcing extreme hip extension during handling</li>
            <li>Ask for cooperative care positions (chin rest, stand-stay) instead of restraint wrestling</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Bathing and Slippery Floors</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Use a grippy bath mat or towel in the tub</li>
            <li>Consider bathing in a walk-in shower area if available</li>
            <li>Dry on traction surfaces so your dog does not slip while wet</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Owner perspective that helps:</strong> Many &ldquo;behavior problems&rdquo; improve when handling is
            made physically easier.
          </div>
        </section>

        {/* Weather */}
        <section id="weather" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Weather and Seasonal Strategies</h2>
          <p className="mb-4">
            Many owners notice changes with weather. Some dogs get stiffer in cold months. Others flare more with
            slippery winter conditions or summer overactivity.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Cold and Stiffness</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Longer warm-up before exercise can help (slow pacing before a longer walk)</li>
            <li>Keep movement more frequent and shorter to reduce long periods of immobility</li>
            <li>Use traction strategies aggressively when ice and wet surfaces appear</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Heat and Overuse</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Dogs may feel good and overdo it in warm weather, then pay for it later</li>
            <li>Plan shorter morning and evening outings rather than midday intensity</li>
            <li>Prioritize cool, calm enrichment when outdoor exercise is limited</li>
          </ul>

          <p className="mb-0">
            Seasonal plans are still the same plan. You adjust intensity, traction, and schedule to match the reality of
            the environment.
          </p>
        </section>

        {/* Travel */}
        <section id="travel" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Travel and Schedule Changes: Protect the Routine</h2>
          <p className="mb-4">
            Travel is a common trigger: new floors, more stairs, slippery hotel surfaces, long car rides, and unfamiliar
            excitement that leads to overactivity.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Before You Go</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Bring a familiar bed or mat so your dog rests in a supportive place</li>
            <li>Pack a small traction mat for entryways or hotel floors</li>
            <li>Plan ramps or steps for car entry if needed</li>
            <li>Ask your vet what to do if a flare happens while away</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">During Travel</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Schedule movement breaks on long drives</li>
            <li>Keep exercise controlled even if your dog is excited</li>
            <li>Avoid spontaneous &ldquo;big activity days&rdquo; that break the routine</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Travel mindset:</strong> The goal is not to do everything. It is to enjoy the trip without creating
            a recovery week afterward.
          </div>
        </section>

        {/* Monitoring */}
        <section id="monitoring" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Monitoring: What to Track So You Know What Is Working</h2>
          <p className="mb-4">
            Hip dysplasia management improves when you treat your plan like a simple experiment. Pick a few metrics,
            track them consistently, and make adjustments with your veterinary team.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Household Metrics That Actually Matter</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Morning stiffness duration</li>
            <li>Ease of rising from sleep</li>
            <li>Car entry and exit confidence</li>
            <li>Walk time before slowing down</li>
            <li>Play duration and recovery time</li>
            <li>Sleep quality (restless repositioning or inability to settle)</li>
            <li>Mood: irritability during handling or reluctance to engage</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">What Progress Often Looks Like</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>More consistent good days</li>
            <li>Less next-day payback after normal activity</li>
            <li>Improved confidence on surfaces and transitions</li>
            <li>Reduced guarding and fewer avoidance behaviors</li>
          </ul>

          <p className="mb-0">
            If your vet has not confirmed the diagnosis yet, or if you are unsure whether hip dysplasia is the primary
            issue, use this diagnostic guide to prepare for a clearer appointment:{' '}
            <Link
              href={`/${locale}/blog/how-veterinarians-diagnose-hip-dysplasia`}
              className="underline font-medium hover:opacity-80"
            >
              How Veterinarians Diagnose Hip Dysplasia in Dogs
            </Link>
            .
          </p>
        </section>

        {/* Quality of life */}
        <section id="quality" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Quality of Life Decisions: What You Are Really Aiming For</h2>
          <p className="mb-4">
            The goal is not to create a perfectly normal hip. The goal is to protect your dog&rsquo;s ability to be a
            dog: comfortable movement, stable mood, restful sleep, and participation in household life.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Signs Your Plan Is Working</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Your dog still looks forward to walks and engages happily</li>
            <li>Daily transitions are easier (rising, stairs, car entry)</li>
            <li>Flares are smaller and recover faster</li>
            <li>Sleep improves and restlessness decreases</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Signs It Is Time to Adjust</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Increasing frequency or intensity of pain days</li>
            <li>Noticeable muscle loss in the back end</li>
            <li>Reluctance to do normal daily tasks</li>
            <li>Repeated falls or instability, especially on common surfaces</li>
            <li>Your household routine becomes unsafe or unsustainable</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Simple question:</strong> Is your dog comfortable enough that they still choose to participate in
            life? If the answer is consistently no, it is time for a stronger plan and a clearer veterinary checkpoint.
          </div>

          <p className="mt-4 mb-0">
            If you want the detailed non-surgical playbook for weight, rehab, home modifications, and pain-control
            strategy, read:{' '}
            <Link
              href={`/${locale}/blog/non-surgical-management-hip-dysplasia-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Non-Surgical Management of Hip Dysplasia in Dogs
            </Link>
            .
          </p>
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
