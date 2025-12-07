'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ChooseDogBoardingFacility2025() {
  const locale = useLocale();

  const title = 'How to Choose a Dog Boarding Facility You Can Trust';
  const date = 'October 9, 2025';
  const categories = ['owner', 'boarding', 'vet'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding & Daycare',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="Learn how to evaluate a dog boarding facility for safety, cleanliness, and transparency. Use this professional checklist and insider advice to choose a trustworthy boarding environment for your dog."
        />
        <meta name="robots" content="all" />
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
          Leaving your dog overnight can feel nerve-wracking—even for experienced owners.
          The best boarding facilities balance safety, transparency, and genuine care.
          Choosing wisely means your dog will not only be safe but comfortable and happy
          while you’re away.
        </p>

        <p className="mb-6">
          In this guide, we’ll walk through the professional standards, behavioral signs,
          and red flags to watch for when evaluating a dog boarding facility. The goal is to
          give you a clear, evidence-based process for choosing a place that aligns with
          your dog’s needs and your peace of mind.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Quick Answer (Straight to the Point)
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Visit facilities in person and observe cleanliness, calm energy, and staff
            attentiveness.
          </li>
          <li>
            Ask about vaccination requirements, staff training, and overnight supervision.
          </li>
          <li>
            Review safety measures—double-gated entries, secure fencing, and controlled
            group play.
          </li>
          <li>
            Transparency and communication are non-negotiable signs of a trustworthy
            facility.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 1 — Start with Research and Referrals
        </h2>
        <p className="mb-4">
          Word-of-mouth remains one of the most reliable ways to find quality care. Ask
          veterinarians, groomers, and fellow owners for recommendations. Read online
          reviews carefully—look for consistent themes such as “staff knows every dog by
          name” or “facility smells clean and calm.” Occasional complaints are normal, but
          repeated mentions of injury, illness, or communication breakdowns are warning
          signs.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Check credentials:</strong> Facilities accredited by the Pet Care Services Association (PCSA) or local animal-care boards
            follow recognized industry standards.
          </li>
          <li>
            <strong>Review insurance and licensing:</strong> Confirm business licenses and
            proof of liability or veterinary partnerships.
          </li>
          <li>
            <strong>Confirm vaccination policies:</strong> Rabies, distemper, parvovirus,
            and Bordetella should be required for all guests.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 2 — Tour the Facility In Person
        </h2>
        <p className="mb-4">
          A physical visit reveals far more than photos ever could. Trust your senses:
          does it smell clean but not perfumed? Are dogs relaxed or barking excessively?
          Does staff greet you promptly and answer questions without hesitation?
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#d9cfc2] text-sm">
            <thead className="bg-[#e4dbcb] text-[#2c4a30]">
              <tr>
                <th className="p-2 text-left">Area</th>
                <th className="p-2 text-left">What to Look For</th>
                <th className="p-2 text-left">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Kennels / Suites</td>
                <td className="p-2">Clean bedding, good lighting, quiet zones</td>
                <td className="p-2">Reduces stress and prevents disease</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Play Areas</td>
                <td className="p-2">Non-slip surfaces, shade, double-gated entries</td>
                <td className="p-2">Prevents escapes and injuries</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Feeding Stations</td>
                <td className="p-2">Sanitized bowls, labeled meals</td>
                <td className="p-2">Avoids contamination and diet errors</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Staff Behavior</td>
                <td className="p-2">Calm voices, positive handling</td>
                <td className="p-2">Indicates training and empathy</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 3 — Ask the Right Questions
        </h2>
        <p className="mb-4">
          Interviews separate good facilities from great ones. The following checklist
          mirrors what professional auditors use when evaluating pet-care operations.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>How many dogs are housed per staff member?</li>
          <li>Is there 24-hour onsite staff or remote monitoring?</li>
          <li>How are emergency medical situations handled?</li>
          <li>Are temperament tests performed before group play?</li>
          <li>What cleaning and disinfection protocols are in place?</li>
          <li>Are enrichment activities (puzzles, walks) included daily?</li>
        </ul>

        <p className="mb-6">
          The American Veterinary Medical Association (AVMA, 2023) notes that facilities with
          defined staff-to-dog ratios and written safety procedures report significantly
          fewer incidents. Don’t hesitate to request documentation—responsible operators are
          proud to share it.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 4 — Recognize Red Flags
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>No proof of vaccination:</strong> exposes all dogs to contagious
            illnesses like kennel cough.
          </li>
          <li>
            <strong>Strong odors or constant noise:</strong> often indicate poor sanitation
            or stress-inducing environments.
          </li>
          <li>
            <strong>Unclear pricing or add-on confusion:</strong> reputable facilities are
            transparent about rates and policies.
          </li>
          <li>
            <strong>No behavioral screening:</strong> mixing incompatible dogs can lead to
            injuries.
          </li>
          <li>
            <strong>Defensive communication:</strong> dismissive staff responses suggest
            deeper management issues.
          </li>
        </ul>

        <p className="mb-6">
          Transparency is the cornerstone of trust. If an operator resists questions or
          prohibits tours, consider it a deal-breaker. Reliable businesses know that
          informed clients make long-term partners.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 5 — Understand Facility Types
        </h2>
        <p className="mb-4">
          Boarding comes in several models—each with unique advantages depending on your
          dog’s temperament and your travel style.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Traditional Kennels:</strong> Individual runs with scheduled playtimes;
            best for structured or reactive dogs.
          </li>
          <li>
            <strong>Home-Style Boarding:</strong> Dogs stay in a caregiver’s home; ideal for
            social dogs accustomed to family environments.
          </li>
          <li>
            <strong>Luxury Suites:</strong> Private rooms, cameras, and elevated amenities;
            great for owners seeking maximum comfort.
          </li>
          <li>
            <strong>Veterinary Boarding:</strong> Supervision by medical staff—vital for
            seniors or dogs with chronic conditions.
          </li>
        </ul>

        <p className="mb-6">
          The Pet Care Services Association (2023) recommends verifying whether staff
          training differs by model. Even luxury settings require proper enrichment and
          sanitation protocols.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 6 — Observe Canine Behavior
        </h2>
        <p className="mb-4">
          Dogs tell you everything you need to know. During your tour, note body language:
          relaxed posture, soft eyes, and wagging tails indicate comfort. Excessive pacing,
          trembling, or hiding signal stress or inadequate staff engagement.
        </p>

        <p className="mb-6">
          Behaviorists emphasize that the atmosphere of a facility directly influences
          canine cortisol levels (Ruff Translating, 2020). Calm music, natural light, and
          predictable schedules reduce stress and prevent post-boarding fatigue.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 7 — Checklist Before Booking
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>☑ Verify license and insurance documents.</li>
          <li>☑ Tour every area dogs will access.</li>
          <li>☑ Meet at least one staff member assigned to your dog.</li>
          <li>☑ Review feeding, medication, and emergency plans.</li>
          <li>☑ Provide updated vaccination records and ID tags.</li>
        </ul>

        <p className="mb-6">
          Create a folder with your dog’s veterinary contact, feeding instructions, and
          emergency backup contact. Organized paperwork ensures quick response in case of
          illness or weather-related delays.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 8 — Insider Advice</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Schedule a <strong>trial day</strong> before long travel. Short stays reveal how
            your dog adapts and how staff communicate.
          </li>
          <li>
            Bring familiar items—a blanket or toy—to provide scent comfort.
          </li>
          <li>
            Avoid changing diets right before boarding; consistency supports digestion.
          </li>
          <li>
            Ask about decompression time after drop-off to reduce separation stress.
          </li>
        </ul>

        <p className="mb-6">
          A facility’s willingness to customize care is often the best indicator of quality.
          Look for empathy, not perfection.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 9 — Final Takeaway</h2>
        <p className="mb-6">
          A trustworthy boarding facility combines professionalism with genuine affection
          for animals. When policies are transparent, staff are communicative, and
          environments are calm, both dogs and owners feel secure. Taking the time to vet
          your options ensures a positive experience for everyone involved.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm mb-10">
          <li>
            American Veterinary Medical Association (2023). <em>Canine Boarding Safety and
            Sanitation Standards.</em>
          </li>
          <li>
            Pet Care Services Association (2023). <em>Facility Accreditation Manual for Dog
            Boarding and Daycare.</em>
          </li>
          <li>
            Ruff Translating (2020). <em>Environmental Enrichment and Cortisol Regulation in
            Group Care Settings.</em>
          </li>
          <li>
            Centers for Disease Control and Prevention (2023). <em>Group Housing Hygiene for
            Domestic Animals.</em>
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
          This article is for educational purposes only and does not replace veterinary
          consultation. Always tour facilities personally and verify credentials before
          booking overnight care.
        </p>
      </main>
    </>
  );
}
