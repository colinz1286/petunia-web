'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CostOfHipDysplasiaTreatmentInDogs() {
  const locale = useLocale();

  const title =
    'Cost of Hip Dysplasia Treatment in Dogs: Non-Surgical Care, Rehab, Injections, and Surgical Ranges';
  const date = 'January 10, 2026';

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
            Hip dysplasia costs are rarely one single bill. They are usually a mix of diagnostics, a management plan,
            follow-up checkpoints, and (sometimes) bigger steps like rehab programs, injections, or surgery. The confusing
            part is that two dogs can have the same diagnosis and completely different cost paths depending on age,
            severity, goals, and response to conservative care.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important:</strong> All cost ranges here are educational estimates that vary widely by region,
            clinic type, dog size, and medical complexity. Your veterinary team is the only source of an accurate quote.
            Medication and sedation decisions must be made with your veterinarian.
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
              <a href="#what-drives-cost" className="underline hover:opacity-80">
                What Drives Cost
              </a>
            </li>
            <li>
              <a href="#typical-paths" className="underline hover:opacity-80">
                Typical Cost Paths
              </a>
            </li>
            <li>
              <a href="#diagnostics" className="underline hover:opacity-80">
                Exams, X-Rays, PennHIP, OFA
              </a>
            </li>
            <li>
              <a href="#non-surgical" className="underline hover:opacity-80">
                Non-Surgical Cost Categories
              </a>
            </li>
            <li>
              <a href="#rehab" className="underline hover:opacity-80">
                Rehab and Physical Therapy
              </a>
            </li>
            <li>
              <a href="#meds" className="underline hover:opacity-80">
                Meds, Monitoring, and Follow-Ups
              </a>
            </li>
            <li>
              <a href="#injections" className="underline hover:opacity-80">
                Injections and Newer Therapies
              </a>
            </li>
            <li>
              <a href="#assistive" className="underline hover:opacity-80">
                Assistive Devices and Home Setup
              </a>
            </li>
            <li>
              <a href="#surgery" className="underline hover:opacity-80">
                Surgical Ranges
              </a>
            </li>
            <li>
              <a href="#budgeting" className="underline hover:opacity-80">
                Budgeting and Smart Questions
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
            The lowest-cost hip dysplasia plan is usually a clear diagnosis, weight management, controlled exercise, and
            a basic pain-control strategy with periodic rechecks. Costs rise when a dog needs structured rehab,
            multi-medication pain plans, frequent monitoring labs, injections, or surgery. The most expensive path is
            often the unclear path, because uncertainty leads to repeated visits, repeated tests, and trial-and-error.
          </p>

          <p className="mb-0">
            If you want to reduce wasted spending, start with clarity: what exactly your vet is diagnosing, what else
            they ruled out, and what the next 2 to 8 weeks should look like. This diagnostic guide helps you prepare for
            that conversation:{' '}
            <Link
              href={`/${locale}/blog/how-veterinarians-diagnose-hip-dysplasia`}
              className="underline font-medium hover:opacity-80"
            >
              How Veterinarians Diagnose Hip Dysplasia in Dogs
            </Link>
            .
          </p>
        </section>

        {/* What drives cost */}
        <section id="what-drives-cost" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Drives Cost in Real Life</h2>
          <p className="mb-4">
            Hip dysplasia costs are not just about the hip. They are about how complex the situation is and how many
            tools are needed to keep your dog functional and comfortable.
          </p>

          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Severity and life stage:</strong> young dogs with laxity may be discussed differently than older
              dogs with arthritis.
            </li>
            <li>
              <strong>Dog size:</strong> larger dogs often require higher medication volumes and higher surgical costs.
            </li>
            <li>
              <strong>Comorbidities:</strong> kidney, liver, GI sensitivity, or other issues can increase monitoring and
              limit medication options.
            </li>
            <li>
              <strong>Access to rehab:</strong> clinics with underwater treadmill or formal physical therapy programs
              cost more, but can reduce flares and improve function.
            </li>
            <li>
              <strong>Specialist involvement:</strong> referral to orthopedics, neurology, or rehab medicine often adds
              cost but increases clarity.
            </li>
            <li>
              <strong>Owner goals and household realities:</strong> some families want maximum athletic function, others
              want comfort and stability with minimal intervention.
            </li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Key mindset:</strong> Your goal is not necessarily the cheapest plan. Your goal is the plan that
            produces the most consistent good days for the dollars you spend.
          </div>
        </section>

        {/* Typical paths */}
        <section id="typical-paths" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Typical Cost Paths Owners Experience</h2>
          <p className="mb-4">
            Most hip dysplasia journeys fall into one of these patterns. You can use these to predict what your next
            year might look like.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Path A: Mild Signs, Strong Response to Conservative Care</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Diagnosis confirmation</li>
            <li>Weight targets, traction improvements, controlled exercise</li>
            <li>Occasional flare management</li>
            <li>Periodic rechecks</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Path B: Moderate Symptoms, Rehab and Medication Strategy</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Diagnosis + rule-outs</li>
            <li>Rehab sessions and at-home program</li>
            <li>NSAIDs or multi-modal pain control with monitoring</li>
            <li>Possible injections depending on response</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Path C: Severe Dysfunction, Specialist and Surgery Discussion</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Advanced imaging or specialist evaluation in some cases</li>
            <li>Surgical planning</li>
            <li>Post-op rehab and follow-ups</li>
            <li>Long-term strengthening and environment management</li>
          </ul>

          <p className="mb-0">
            If you are not sure what category your dog is drifting toward, this daily-life guide helps you track the
            signs that matter over time:{' '}
            <Link
              href={`/${locale}/blog/living-with-hip-dysplasia-in-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Living With Hip Dysplasia in Dogs
            </Link>
            .
          </p>
        </section>

        {/* Diagnostics */}
        <section id="diagnostics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Exams, X-Rays, PennHIP, OFA: What Owners Typically Pay For</h2>
          <p className="mb-4">
            Diagnostics are where many owners either save money long-term (by getting clarity early) or lose money (by
            repeating unclear workups). Good imaging and a complete orthopedic exam matter.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Initial Visit and Orthopedic Exam</h3>
          <p className="mb-4">
            An initial workup often includes history, gait observation, orthopedic exam, and discussion of likely
            sources of pain (hip, knee, spine, muscle). Costs vary by region and clinic type.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Hip Radiographs (X-Rays)</h3>
          <p className="mb-4">
            Hip films are a major cost pivot because sedation is often recommended for positioning quality and safety.
            That adds cost, but poor films can lead to misinterpretation and repeat imaging later.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">PennHIP and OFA Screening</h3>
          <p className="mb-4">
            PennHIP and OFA are often discussed in breeding contexts and in early risk evaluation. Costs vary based on
            provider certification, radiograph requirements, sedation, and submission or interpretation fees.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Cost-saving concept:</strong> Paying for proper positioning and clear interpretation once is often
            cheaper than paying for repeated visits and repeated imaging due to uncertainty.
          </div>
        </section>

        {/* Non-surgical categories */}
        <section id="non-surgical" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Non-Surgical Cost Categories: Where Most Owners Spend Money</h2>
          <p className="mb-4">
            Most dogs with hip dysplasia spend the majority of their lifetime costs on non-surgical management. These
            categories can be mixed and matched, and your dog may not need all of them.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Common Cost Buckets</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Veterinary follow-ups and rechecks</li>
            <li>Medications and bloodwork monitoring</li>
            <li>Rehab or physical therapy sessions</li>
            <li>Specialty consults (orthopedics, rehab medicine)</li>
            <li>Injections or advanced pain-control options</li>
            <li>Home setup improvements (traction, ramps, supportive bedding)</li>
          </ul>

          <p className="mb-0">
            If you want the full non-surgical playbook (what to do, how to structure it, and what tends to work), read:{' '}
            <Link
              href={`/${locale}/blog/non-surgical-management-of-hip-dysplasia`}
              className="underline font-medium hover:opacity-80"
            >
              Non-Surgical Management of Hip Dysplasia in Dogs
            </Link>
            .
          </p>
        </section>

        {/* Rehab */}
        <section id="rehab" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Rehab and Physical Therapy: What Costs Look Like and Why It Adds Up</h2>
          <p className="mb-4">
            Rehab is one of the most effective quality-of-life investments for many dogs, but it can be a meaningful
            budget line because it is often a program, not a single appointment.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">What You Are Paying For</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Assessment of gait, muscle symmetry, and pain triggers</li>
            <li>A progression plan (what to do now, what to do in two weeks, what to do next month)</li>
            <li>Hands-on therapy or guided exercise sessions</li>
            <li>Home exercise plan design and adjustments</li>
            <li>Specialty equipment access (underwater treadmill, therapeutic modalities)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Common Payment Patterns</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Short series of sessions to learn an at-home routine</li>
            <li>More intensive blocks for flare recovery or post-op rehab</li>
            <li>Periodic maintenance visits to refine the plan</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Budgeting tip:</strong> Ask for a &ldquo;minimum effective program&rdquo; quote. Many owners can do
            fewer sessions if they commit to the home program.
          </div>
        </section>

        {/* Meds */}
        <section id="meds" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Meds, Monitoring, and Follow-Ups: The Ongoing Costs Owners Forget</h2>
          <p className="mb-4">
            Medication cost is not only the medication. It is also the follow-up plan that keeps medication safe and
            effective, especially when NSAIDs are used long-term.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Common Cost Components</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Prescription refills</li>
            <li>Periodic veterinary rechecks</li>
            <li>Bloodwork monitoring (especially for long-term NSAID strategies)</li>
            <li>Adjustments when a dog has flares or side effects</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Why This Category Varies So Much</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Dog size changes dosing volume</li>
            <li>Some dogs need one medication, others need multi-modal plans</li>
            <li>Health risk factors can increase monitoring frequency</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Smart question to ask:</strong> &ldquo;What does a stable month look like in costs, and what does a
            flare month look like?&rdquo; That framing helps you budget realistically.
          </div>
        </section>

        {/* Injections */}
        <section id="injections" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Injections and Newer Therapies: Why They Can Be Expensive</h2>
          <p className="mb-4">
            Many owners consider injections or newer pain-control approaches when daily function is limited or when
            medications alone are not producing consistent comfort. These options vary widely by clinic and by region,
            and they may involve repeated treatments.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Why Costs Add Up</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Some options require a series, not a single visit</li>
            <li>Sedation or imaging guidance may be used depending on approach</li>
            <li>Follow-up evaluation and outcome tracking are part of doing it correctly</li>
            <li>Not every dog responds, which can create trial costs</li>
          </ul>

          <p className="mb-0">
            If you are in the stage of trying to keep daily life comfortable and functional while weighing next steps,
            this guide helps you build a sustainable routine and reduce flares (which often reduces spending over time):{' '}
            <Link
              href={`/${locale}/blog/living-with-hip-dysplasia-in-dogs`}
              className="underline font-medium hover:opacity-80"
            >
              Living With Hip Dysplasia in Dogs
            </Link>
            .
          </p>
        </section>

        {/* Assistive */}
        <section id="assistive" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Assistive Devices and Home Setup: Low Cost, High Value</h2>
          <p className="mb-4">
            Some of the best ROI spending in hip dysplasia management is not medical at all. It is environmental: traction,
            ramps, supportive beds, and harnesses that reduce strain and reduce falls.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Common Items Owners Buy</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Runners or rugs for traction pathways</li>
            <li>Non-slip mats for entryways, bowls, and grooming areas</li>
            <li>Supportive bedding</li>
            <li>Car ramps or steps</li>
            <li>Harnesses for controlled walking and assistance</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Hidden savings:</strong> Preventing slips and falls can reduce flare frequency, which can reduce vet
            visits, medication increases, and rehab resets.
          </div>
        </section>

        {/* Surgery */}
        <section id="surgery" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Surgical Ranges: What Owners Typically Need to Budget For</h2>
          <p className="mb-4">
            Surgery can be an appropriate path for some dogs, particularly when daily comfort and function cannot be
            achieved with conservative care. Costs vary dramatically by region, surgeon, dog size, and surgical type.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
            <strong>Why ranges are wide:</strong> Surgical quotes can include different bundles. Some quotes include
            pre-op imaging, anesthesia, hospitalization, pain medication, follow-ups, and rehab guidance. Others price
            those separately.
          </div>

          <h3 className="text-lg font-semibold mt-2 mb-1">Common Surgery-Related Cost Categories</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Specialist consult and surgical planning</li>
            <li>Pre-op labs and imaging (and sometimes advanced imaging)</li>
            <li>Anesthesia and monitoring</li>
            <li>Hospitalization and nursing care</li>
            <li>Post-op medications</li>
            <li>Follow-up rechecks and repeat imaging in some cases</li>
            <li>Post-op rehab or physical therapy</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">Practical Reality for Budgeting</h3>
          <ul className="list-disc pl-5 space-y-1 mb-0">
            <li>Ask for an &ldquo;all-in expected total&rdquo; plus a list of potential add-ons</li>
            <li>Ask what post-op rehab is recommended and what that costs</li>
            <li>Ask about expected recovery timeline and what you may need at home</li>
          </ul>
        </section>

        {/* Budgeting */}
        <section id="budgeting" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Budgeting and Smart Questions That Reduce Surprise Bills</h2>
          <p className="mb-4">
            The biggest financial stress usually comes from unpredictability. These questions help you convert
            uncertainty into a plan.
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Questions to Ask Your Vet or Specialist</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              &ldquo;What is the most likely plan for the next 2 to 8 weeks, and what does that usually cost?&rdquo;
            </li>
            <li>
              &ldquo;What would make you escalate to rehab, injections, or a surgical consult?&rdquo;
            </li>
            <li>
              &ldquo;What should a stable month cost versus a flare month cost?&rdquo;
            </li>
            <li>
              &ldquo;If we do rehab, what is the minimum effective program to get a safe at-home routine?&rdquo;
            </li>
            <li>
              &ldquo;If we consider surgery, what is the all-in expected total, including follow-ups and rehab?&rdquo;
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">How to Spend Smarter</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Prioritize clarity early: a clear diagnosis can prevent repeated trial spending.
            </li>
            <li>
              Spend on traction and environment: it can reduce flares and therefore reduce repeated visits.
            </li>
            <li>
              Build a plan with checkpoints: you want to know when the plan is working and when it is not.
            </li>
            <li>
              Track outcomes in plain English: stairs, car entry, morning stiffness, walk endurance.
            </li>
          </ul>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>American College of Veterinary Surgeons (ACVS). Canine Hip Dysplasia (client education).</li>
            <li>Orthopedic Foundation for Animals (OFA). Hip dysplasia and evaluation resources.</li>
            <li>PennHIP. Screening concepts and hip laxity information.</li>
            <li>AAHA resources related to canine pain management and life-stage guidance.</li>
            <li>Merck Veterinary Manual resources related to osteoarthritis and chronic pain in dogs.</li>
            <li>WSAVA global nutrition and weight management resources.</li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian (and qualified orthopedic or rehabilitation
            professionals) for individualized recommendations. Medication choices, sedation decisions, and surgical plans
            must be made with your veterinary team based on your dog&rsquo;s health profile.
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
