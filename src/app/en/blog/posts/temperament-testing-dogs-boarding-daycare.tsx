'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function TemperamentTestingDogsBoardingDaycare() {
  const locale = useLocale();

  const title =
    'How to Temperament Test Dogs for Boarding & Daycare: A Step-By-Step Professional Evaluation Guide';
  const date = 'December 1, 2025';
  const categories = ['boarding', 'owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding & Daycare',
    food: 'Dog Food & Nutrition',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Tags */}
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
          Temperament testing is one of the most important responsibilities of any boarding or
          daycare facility. A structured assessment protects dogs, prevents fights, reduces stress,
          and creates a calm, well-managed environment. This guide provides a detailed, replicable
          step-by-step temperament test you can use with new clients during meet-and-greets or trial
          days.
        </p>

        <p className="mb-6">
          This article also pairs with our guide on documenting temperament notes inside Petunia’s
          software. If you want to learn how to track patterns and record behavior over time, read
          this support article:{' '}
          <a
            href="https://www.petuniapets.com/en/blog/behavior-temperament-notes-dog-boarding-daycare-software"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium"
          >
            Behavior &amp; Temperament Notes for Dog Boarding and Daycare
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Summary (What You Should Look For)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Comfort with new people and new environments.</li>
          <li>Body language indicators of stress vs. confidence.</li>
          <li>Reaction to unfamiliar noises, surfaces, and handling.</li>
          <li>Dog-to-dog interactions: curiosity, play style, tolerance.</li>
          <li>Resource guarding tendencies (food, toys, resting spots).</li>
          <li>Energy level and group suitability.</li>
          <li>Ability to self-regulate (taking breaks, disengaging).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Why Temperament Testing Matters</h2>
        <p className="mb-4">
          Dogs enter boarding and daycare with widely different backgrounds: confident social dogs,
          under-socialized dogs, anxious rescues, high-energy adolescents, and dogs who thrive only
          in calm settings. A clear temperament test allows you to properly place each dog, avoid
          unnecessary risks, and communicate transparently with their owners.
        </p>

        <p className="mb-6">
          A strong evaluation also builds trust. When owners see that your facility uses structured,
          predictable procedures, they feel confident that their dog will be treated safely and
          respectfully.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Step 1 — Intake Interview With the Owner
        </h2>
        <p className="mb-4">Before meeting the dog, gather relevant behavioral history:</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Has the dog attended daycare or boarding before?</li>
          <li>Any history of fear, reactivity, or aggression?</li>
          <li>Any situations the dog finds overwhelming (children, large groups, crates)?</li>
          <li>Play preferences (gentle, rowdy, chase, wrestling).</li>
          <li>Any resource guarding with toys, chews, food, or space?</li>
          <li>Energy level at home and during outings.</li>
          <li>How the dog behaves on walks around other dogs.</li>
        </ul>

        <p className="mb-6">
          You are not judging the owner. You are simply collecting data so you can tailor the
          evaluation safely.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Step 2 — Initial Greeting (People Interaction Test)
        </h2>
        <p className="mb-4">
          The goal is to observe how the dog responds to unfamiliar humans. Important signals
          include:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Loose wiggly body = good early sign.</li>
          <li>Approaches with curiosity and relaxed ears.</li>
          <li>Accepts light handling (touching collar, harness check).</li>
          <li>Shows mild caution but recovers quickly.</li>
          <li>Excessive fear, stiff posture, growling, freezing, or avoidance are red flags.</li>
        </ul>

        <p className="mb-6">
          Many dogs need a full 2–5 minutes to acclimate. Confidence should build, not deteriorate.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Step 3 — Environmental Confidence Check
        </h2>
        <p className="mb-4">
          Move the dog through the facility slowly and observe reactions to:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>New flooring types (rubber, tile, turf).</li>
          <li>Gate sounds, kennel doors closing, barking dogs.</li>
          <li>Visual stimulation (dogs behind barriers, windows, fencing).</li>
          <li>Elevated platforms, ramps, stairs, or narrow hallways.</li>
        </ul>

        <p className="mb-6">
          A confident or mildly cautious dog will explore. A fearful dog may freeze, pancake to the
          floor, or continuously pull away from stimuli.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Step 4 — Light Handling &amp; Touch Sensitivity
        </h2>
        <p className="mb-4">
          Boarding requires feeding, leash handling, possibly medication administration, and
          occasional crate rest. You should assess:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Reaction to gentle collar touch.</li>
          <li>Response to brief lift of paws, chest, or ears.</li>
          <li>
            Comfort level when you guide the dog a few steps by the harness or collar (no dragging).
          </li>
          <li>Any signs of pain sensitivity or defensiveness.</li>
        </ul>

        <p className="mb-6">
          Severe sensitivity may require special handling notes or may disqualify the dog from group
          play entirely.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Step 5 — Dog-to-Dog Introduction</h2>
        <p className="mb-4">
          Introduce one calm, socially skilled “helper dog.” Your goal is not to force interaction,
          but to observe natural behavior. Look for:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Soft tail wags at mid-height.</li>
          <li>Curiosity without overexcitement.</li>
          <li>Appropriate sniffing and polite disengagement.</li>
          <li>Healthy play bows or gentle invitations.</li>
          <li>Neutral tolerance (totally acceptable).</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Red Flags</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Stiff posture or intense staring.</li>
          <li>Mounting immediately without context.</li>
          <li>Snapping, growling, or escalating quickly.</li>
          <li>Hiding behind handler while trembling.</li>
          <li>Explosive or uncontrollable excitement.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Step 6 — Small Group Observation (3–5 Dogs)
        </h2>
        <p className="mb-4">
          If the dog does well with the helper dog, introduce a group of 3–5 well-balanced dogs.
          This is where play style, intensity, and boundaries become clearer.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Does the dog respect space when another dog signals discomfort (lip lick, head turn)?
          </li>
          <li>Does the dog escalate rough play instead of adjusting?</li>
          <li>Does the dog become overwhelmed and need breaks?</li>
          <li>Does the dog start conflicts over toys, water bowls, or resting spaces?</li>
        </ul>

        <p className="mb-6">
          Group behavior is one of the strongest predictors of long-term suitability for daycare.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Step 7 — Quiet Time and Crate Test (Boarding Only)
        </h2>
        <p className="mb-4">
          For boarding, evaluate crate or kennel tolerance for short periods:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Does the dog settle within a few minutes?</li>
          <li>Any panic behaviors (biting the door, excessive drooling, vocalizing nonstop)?</li>
          <li>
            Does the dog rest calmly when left briefly while you leave the room or move out of sight?
          </li>
        </ul>

        <p className="mb-6">
          Crate distress is not disqualifying for daycare but can be a major issue for overnight
          boarding.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Step 8 — Final Assessment and Owner Communication
        </h2>
        <p className="mb-4">
          Once the test is complete, summarize the dog’s behavior in clear, plain English:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Play style (gentle, rowdy, selective).</li>
          <li>Energy level (low, moderate, high).</li>
          <li>Comfort level with people and new environments.</li>
          <li>Group suitability (small group, large group, or solo care only).</li>
          <li>Any triggers or situations requiring staff notes.</li>
        </ul>

        <p className="mb-6">
          This transparency builds trust and helps owners understand your professional reasoning.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Common Outcomes (How to Classify Each Dog)
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            <strong>Green Light:</strong> Social, confident, respectful, recovers quickly from new
            stimuli.
          </li>
          <li>
            <strong>Yellow Light:</strong> Needs slow introductions, small groups, calmer energy
            levels, or extra monitoring.
          </li>
          <li>
            <strong>Red Light:</strong> Unsafe behaviors, uncontrolled escalation, significant fear,
            or strong resource guarding.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          References &amp; Further Reading
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            American Veterinary Society of Animal Behavior — body language and fear resources.
          </li>
          <li>
            IAABC guidelines for dog behavior evaluation and canine social communication.
          </li>
          <li>
            Petunia guide:
            <a
              href="https://www.petuniapets.com/en/blog/behavior-temperament-notes-dog-boarding-daycare-software"
              className="underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behavior &amp; Temperament Notes for Boarding/Daycare
            </a>
          </li>
        </ul>

        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article is for general informational purposes only and does not replace professional
          behavioral assessment or veterinary guidance.
        </p>
      </main>
    </>
  );
}
