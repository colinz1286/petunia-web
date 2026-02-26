'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhyDoesMyDogBarkAtNight() {
  const locale = useLocale();

  const title = 'Why Does My Dog Bark at Night? Causes, Solutions, and When to Worry';
  const date = 'October 6, 2025';
  const categories = ['owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    health: 'Dog Health',
    behavior: 'Behavior & Training',
    boarding: 'Boarding & Daycare',
  };

  return (
    <>

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
          It’s 2&nbsp;a.m., and your dog won’t stop barking. Whether it’s every night or once in a
          while, persistent nighttime barking can be frustrating and confusing for pet owners.
          Dogs rarely bark without a reason, and figuring out that reason is the key to restoring
          peace (and sleep). This guide breaks down why dogs bark after dark, how to fix it, and when
          to call in professional help.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Common Reasons Dogs Bark at Night</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Loneliness or boredom:</strong> Many dogs bark simply because they miss their
            humans or feel isolated. Nighttime separation, especially after social days, can trigger
            anxiety or attention-seeking behavior.
          </li>
          <li>
            <strong>Outside noises or wildlife:</strong> Rustling leaves, neighboring dogs, or wild
            animals can wake your dog’s instincts and cause reactive barking. Even distant sounds can
            feel close to sensitive canine hearing.
          </li>
          <li>
            <strong>Discomfort or medical pain:</strong> Dogs with arthritis, ear infections, or
            gastrointestinal upset may whine or bark at night due to physical pain. If the behavior
            starts suddenly, schedule a vet check.
          </li>
          <li>
            <strong>Breed tendencies:</strong> Some breeds (herding, guard, or alert breeds) are
            naturally more vocal and vigilant at night. Their genetics can amplify environmental
            triggers.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Behavioral vs. Anxiety-Driven Barking</h2>
        <p className="mb-4">
          Not all barking is the same. Some dogs bark because they’ve learned it gets attention,
          while others bark from genuine stress or panic. Distinguishing between learned behavior and
          emotional distress helps tailor the solution.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Behavioral barking:</strong> Often patterned and short-lived. The dog barks,
            pauses, listens, and may stop when ignored. Common in young dogs or under-stimulated
            breeds.
          </li>
          <li>
            <strong>Anxiety-driven barking:</strong> Escalates, sounds more desperate or rhythmic,
            and often includes pacing, whining, or door scratching. Common in dogs struggling with
            isolation or separation anxiety.
          </li>
          <li>
            <strong>How to tell:</strong> Record a short clip. Look for repeated pacing, panting,
            salivation, or howling — all signs of emotional stress rather than boredom.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Home Fixes That Actually Work</h2>
        <p className="mb-4">
          Most nighttime barking can be reduced by adjusting your dog’s evening routine and
          environment. Simple consistency and preparation go a long way.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Increase pre-bedtime exercise:</strong> A 30-minute walk or short training
            session before bedtime helps burn energy and reduces restlessness.
          </li>
          <li>
            <strong>Crate or rest area routine:</strong> Give your dog a calm, familiar place to
            sleep. Cover wire crates partially to block stimulation and play soft white noise.
          </li>
          <li>
            <strong>Check the basics:</strong> Make sure your dog has relieved itself, isn’t hungry,
            and has access to water. Small discomforts can trigger barking that feels like
            “attention-seeking.”
          </li>
          <li>
            <strong>White noise or fans:</strong> Consistent background sound masks environmental
            triggers and creates a soothing sleep cue.
          </li>
          <li>
            <strong>Ignore the test bark:</strong> If your dog learns barking brings attention,
            you’ll reinforce the behavior. Wait until silence before rewarding or re-engaging.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">When to Call a Trainer or Veterinarian</h2>
        <p className="mb-4">
          If barking continues despite environmental changes or becomes more panicked over time,
          consult a professional. A certified dog trainer can evaluate triggers and develop a
          structured desensitization plan, while your veterinarian can rule out pain or underlying
          medical issues.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Sudden onset barking in a previously quiet dog warrants a vet check.</li>
          <li>
            Dogs with known separation anxiety may need behavior modification or anxiety medication.
          </li>
          <li>
            Persistent barking across multiple settings (home, crate, car) indicates a deeper
            behavioral issue.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Learn More About Separation Anxiety</h2>
        <p className="mb-6">
          Many dogs that bark at night are actually showing early signs of separation distress.
          Understanding that connection can prevent the problem from worsening. Read our related
          articles below for step-by-step guidance:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            <Link
              href="https://www.petuniapets.com/en/blog/dog-daycare-and-separation-anxiety"
              target="_blank"
              className="underline text-[#2c4a30] hover:opacity-80"
            >
              Dog Daycare and Separation Anxiety
            </Link>
          </li>
          <li>
            <Link
              href="https://www.petuniapets.com/en/blog/separation-anxiety-dogs"
              target="_blank"
              className="underline text-[#2c4a30] hover:opacity-80"
            >
              Separation Anxiety in Dogs: How to Help Your Pet Cope
            </Link>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Nighttime barking almost always has an underlying cause—find it first, then fix it.</li>
          <li>
            Address boredom and loneliness before bedtime through exercise and calm bonding time.
          </li>
          <li>
            If barking worsens or includes signs of panic or pain, involve a trainer or veterinarian
            early.
          </li>
          <li>
            Consistency, patience, and the right nighttime environment can end most barking cycles
            within weeks.
          </li>
        </ul>

        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        <p className="text-xs text-gray-500 mt-8">
          This article is for general information only and is not a substitute for professional
          veterinary or behavioral advice. If barking persists or worsens, consult your veterinarian
          or a certified trainer.
        </p>
      </main>
    </>
  );
}
