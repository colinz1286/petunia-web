'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function PetInsuranceDogDaycare2025() {
  const locale = useLocale();

  const title = 'Pet Insurance and Dog Daycare: What’s Covered, What’s Not';
  const date = 'October 11, 2025';
  const categories = ['owner', 'daycare', 'insurance'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    daycare: 'Daycare Facilities',
    insurance: 'Pet Insurance',
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
          content="Pet insurance can reduce unexpected costs, but many owners are unsure if daycare injuries or illnesses are covered. Learn what’s typically included, what’s excluded, and how to choose the right plan for your dog."
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
          As pet insurance becomes more common, many owners are surprised to learn that
          coverage for daycare or boarding-related incidents is often limited. Understanding
          what’s covered—and what’s not—can prevent frustration when unexpected injuries or
          illnesses occur.
        </p>

        <p className="mb-6">
          This article breaks down how leading U.S. pet insurance providers handle dog
          daycare claims, clarifies key exclusions, and helps you identify optional add-ons
          or wellness riders that can protect your dog during supervised group care.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Quick Answer (Straight to the Point)
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Standard pet insurance <strong>does not</strong> cover daycare fees or routine
            supervision costs.
          </li>
          <li>
            Injuries or illnesses that occur <strong>during daycare</strong> may be covered,
            depending on policy terms.
          </li>
          <li>
            Preventable issues (kennel cough, parasites, behavioral training) are typically
            excluded.
          </li>
          <li>
            Premium wellness plans may include limited coverage for vaccinations and
            preventive care required by daycare facilities.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 1 — How Pet Insurance Works
        </h2>
        <p className="mb-4">
          Pet insurance functions similarly to human health insurance but with more defined
          exclusions. Policies reimburse a percentage of eligible veterinary expenses after
          you pay the bill upfront. Most providers offer customizable plans with deductibles
          ranging from $200–$1,000 and reimbursement rates between 70–90%.
        </p>

        <p className="mb-6">
          Commonly covered expenses include accidents (broken bones, lacerations),
          illnesses (infections, allergies), surgeries, and prescriptions. However, coverage
          rarely extends to “non-medical services” such as grooming, daycare, or training.
          That’s where many owners get confused.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 2 — What’s Typically Covered During Daycare
        </h2>
        <p className="mb-4">
          While the daycare service itself isn’t insurable, your dog’s <em>medical care</em>{' '}
          during or after an incident at daycare may be. If another dog injures yours during
          play, or if your dog becomes ill after exposure, insurance can help offset the
          cost of treatment.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#d9cfc2] text-sm">
            <thead className="bg-[#e4dbcb] text-[#2c4a30]">
              <tr>
                <th className="p-2 text-left">Event</th>
                <th className="p-2 text-left">Usually Covered?</th>
                <th className="p-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Dog bite or fight injury</td>
                <td className="p-2">✅ Yes</td>
                <td className="p-2">Covered under accident or injury claims.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Illness from daycare exposure (e.g., kennel cough)</td>
                <td className="p-2">⚠️ Sometimes</td>
                <td className="p-2">
                  Covered only if illness wasn’t preventable or vaccine-preventable.
                </td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Stress-induced digestive issues</td>
                <td className="p-2">✅ Often</td>
                <td className="p-2">Typically falls under illness coverage.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Behavioral issues or aggression</td>
                <td className="p-2">❌ No</td>
                <td className="p-2">Excluded unless you add a behavioral plan.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Routine vaccinations or daycare health checks</td>
                <td className="p-2">⚠️ Sometimes</td>
                <td className="p-2">
                  May be included in wellness or preventive care riders.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          Always confirm whether your policy defines coverage based on “accident,” “injury,”
          or “incident.” These distinctions affect whether a daycare-related situation
          qualifies for reimbursement.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 3 — What’s Not Covered
        </h2>
        <p className="mb-4">
          Even comprehensive plans have exclusions. Insurance is not a substitute for
          responsible management or preventive care. Common exclusions include:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Routine boarding or daycare fees</li>
          <li>Behavioral training and socialization classes</li>
          <li>Preventable diseases (kennel cough, parasites)</li>
          <li>Pre-existing conditions or chronic anxiety</li>
          <li>Vaccination and grooming expenses without a wellness add-on</li>
        </ul>

        <p className="mb-6">
          Each insurer’s list varies slightly, so it’s essential to review sample policies
          before enrollment. Transparency is key—avoid plans that hide exclusions in fine
          print or don’t define daycare-related coverage explicitly.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 4 — Real-World Examples from Major Providers
        </h2>
        <p className="mb-4">
          The following summaries reflect real coverage examples from leading U.S. pet
          insurers as of 2025. Terms can change, so always verify with the provider before
          purchase.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Nationwide Pet Insurance:</strong> Covers daycare-related accidents but
            excludes illness prevention. Optional Wellness Plus plan covers required
            vaccines for daycare admission.
          </li>
          <li>
            <strong>Trupanion:</strong> Covers medical care from injuries sustained during
            supervised play. Excludes behavioral training and socialization programs.
          </li>
          <li>
            <strong>Healthy Paws:</strong> Covers emergency treatment after daycare
            incidents but excludes routine care or preventive medicine.
          </li>
          <li>
            <strong>ASPCA Pet Health Insurance:</strong> Accident and Illness plan covers
            treatment after daycare injuries; preventive Care add-ons include vaccinations
            and dental cleaning.
          </li>
          <li>
            <strong>Fetch by The Dodo:</strong> Provides reimbursement for accident-related
            daycare claims, including wound repair, medication, and diagnostic testing.
          </li>
        </ul>

        <p className="mb-6">
          Across all providers, a consistent theme emerges: daycare injuries and
          post-incident medical care are often covered, but the daycare service itself never
          is. Preventive riders can bridge the gap by covering vaccines and checkups
          required by facilities.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 5 — The Role of Wellness and Preventive Care Add-Ons
        </h2>
        <p className="mb-4">
          Many insurers now offer wellness add-ons that complement traditional accident and
          illness coverage. These plans help offset costs for services required by most
          daycare programs, including vaccinations and parasite screening.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Rabies and distemper vaccination</li>
          <li>Bordetella (kennel cough) booster</li>
          <li>Fecal testing and parasite prevention</li>
          <li>Heartworm screening</li>
          <li>Annual wellness exam</li>
        </ul>

        <p className="mb-6">
          The North American Pet Health Insurance Association (NAPHIA, 2024) reports that
          policies bundling wellness riders have increased 42% since 2021—driven largely by
          pet owners using daycare or group play services. Preventive coverage ensures your
          dog meets facility health standards without unexpected out-of-pocket costs.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 6 — Liability and Third-Party Coverage
        </h2>
        <p className="mb-4">
          Some owners wonder if insurance covers liability when their dog injures another
          dog at daycare. In most cases, the daycare facility’s commercial policy—not your
          pet insurance—covers such incidents. However, if the other dog’s owner pursues
          medical reimbursement through your provider, accident coverage may apply.
        </p>

        <p className="mb-6">
          Always confirm that your daycare facility carries its own business liability
          policy and staff training certifications. Shared accountability ensures smooth
          claims resolution and transparent communication.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 7 — Questions to Ask Before Choosing a Policy
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Does the plan cover accidents that occur during daycare?</li>
          <li>Are vaccine-preventable illnesses excluded?</li>
          <li>Is boarding or daycare considered a “high-risk activity”?</li>
          <li>Can you add a wellness rider to cover facility-required vaccines?</li>
          <li>How are claims handled if daycare staff are at fault?</li>
        </ul>

        <p className="mb-6">
          Reputable insurers will answer these questions clearly and provide written
          confirmation. If a representative avoids specifics, consider it a red flag.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 8 — Tips for Maximizing Protection
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Keep vaccination and wellness records updated—most claims require proof of
            preventive care.
          </li>
          <li>
            Save invoices from both your veterinarian and daycare provider for cross-reference.
          </li>
          <li>
            Choose a deductible that fits your budget—lower deductibles make smaller claims
            more worthwhile.
          </li>
          <li>
            Read the policy’s definitions for “incident,” “injury,” and “accident.”
          </li>
        </ul>

        <p className="mb-6">
          Treat insurance as part of your dog’s overall safety strategy, alongside choosing
          a reputable daycare with transparent health and behavior policies.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 9 — Final Takeaway</h2>
        <p className="mb-6">
          Pet insurance can save you thousands in emergency costs—but it won’t cover the
          price of daily daycare itself. Instead, it protects you when accidents or
          illnesses arise during those visits. Combining accident coverage with a wellness
          rider creates the most comprehensive protection for dogs in social environments.
        </p>

        <p className="mb-6">
          As dog daycare continues to grow in popularity post-pandemic, understanding these
          nuances will help owners make informed, confident financial decisions—and keep
          every pup happy, healthy, and covered.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm mb-10">
          <li>
            North American Pet Health Insurance Association (2024). <em>State of the
            Industry Report on Pet Insurance Adoption and Wellness Trends.</em>
          </li>
          <li>
            Nationwide Pet Insurance (2024). <em>Comprehensive Accident &amp; Illness Plan
            Guide.</em>
          </li>
          <li>
            ASPCA Pet Health Insurance (2024). <em>Accident and Wellness Policy Details.</em>
          </li>
          <li>
            Trupanion (2024). <em>Understanding Coverage for Group Play and Daycare
            Incidents.</em>
          </li>
          <li>
            Fetch by The Dodo (2025). <em>Pet Insurance FAQs and Exclusions for Daycare
            Clients.</em>
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
          This article is for informational purposes only and should not be interpreted as
          insurance or legal advice. Always review policy documents and consult your
          provider for specific coverage details before enrolling in or using daycare
          services.
        </p>
      </main>
    </>
  );
}
