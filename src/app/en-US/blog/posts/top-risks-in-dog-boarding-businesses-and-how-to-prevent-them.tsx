'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function TopRisksInDogBoardingBusinesses() {
  const locale = useLocale();

  const title = 'Top Risks in Dog Boarding Businesses (and How to Prevent Them)';
  const date = 'October 6, 2025';
  const categories = ['boarding'] as const;

  const categoryLabels: Record<string, string> = {
    boarding: 'Boarding & Daycare',
    business: 'Pet Care Businesses',
    owner: 'Pet Owners',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="Running a boarding or daycare business carries real risks—from medical emergencies to liability claims. Learn the top five risk areas every facility faces and the proven strategies, waivers, and policies to prevent costly incidents."
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
          Boarding and daycare facilities give owners peace of mind—but behind the wagging tails is a
          business model that carries serious risk exposure. Every year, pet care businesses face
          preventable losses tied to safety, medical emergencies, and legal oversight. Whether you
          board ten dogs or a hundred, understanding these risks is step one to running a compliant,
          trustworthy operation. This article breaks down the five biggest categories of risk and how
          to safeguard your business from each one.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">1️⃣ Medical Emergencies</h2>
        <p className="mb-4">
          Dogs can develop illness or injury at any moment—vomiting, kennel cough, bloat, or allergic
          reactions. The liability risk rises sharply when response plans are vague or undocumented.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Keep a written <strong>Emergency Medical Protocol</strong> on file: who calls the vet,
            transportation plan, and owner notification timeline.
          </li>
          <li>
            Maintain <strong>24-hour vet contact cards</strong> and backup clinics within 10 miles.
          </li>
          <li>
            Require owner-signed authorization for emergency care and cost responsibility within your
            waiver agreement.
          </li>
          <li>
            Train all staff on CPR for pets and shock symptoms—minutes matter with gastric torsion or
            heatstroke.
          </li>
        </ul>
        <p className="mb-6">
          Case example: a Labrador develops bloat after dinner. Staff recognized the distended belly,
          called the emergency clinic immediately, and documented each step. Because a vet-authorization clause
          existed, the business avoided a lawsuit and saved the dog’s life.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">2️⃣ Behavioral Incidents</h2>
        <p className="mb-4">
          Fights and bites are among the most common—and preventable—boarding incidents. Behavioral
          risk grows with overcrowding, poor grouping, or inattentive supervision.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Perform <strong>behavior assessments</strong> before admission; use trial daycare visits.
          </li>
          <li>
            Group by size, play style, and temperament—not owner request alone.
          </li>
          <li>
            Maintain <strong>1 staff : 10 dogs</strong> or better ratios in open-play settings.
          </li>
          <li>
            Document every scuffle, even minor ones, in the client record to build transparency.
          </li>
        </ul>
        <p className="mb-6">
          Case example: a Shepherd and Doodle fight left minor scratches. Because the staff logged the
          event, called both owners, and updated training notes, trust was preserved and no claim
          followed.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">3️⃣ Facility and Environmental Risks</h2>
        <p className="mb-4">
          A single maintenance lapse—loose fencing, slick floors, or heat failure—can turn into major
          loss. Regular inspections and preventive maintenance are the cheapest insurance you’ll ever
          buy.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Inspect gates, latches, and HVAC systems daily; log findings in a checklist.</li>
          <li>Install non-slip surfaces and safe drainage in play and kennel areas.</li>
          <li>
            Sanitize shared areas between groups to prevent disease spread such as kennel cough or
            parvo.
          </li>
          <li>
            Keep generator backup power for HVAC in heat-sensitive climates—failure equals liability.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">4️⃣ Legal &amp; Liability Exposure</h2>
        <p className="mb-4">
          Contracts, waivers, and compliance with local laws define whether a mistake becomes a
          lawsuit. Too many small operators rely on verbal agreements or outdated forms.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Use a comprehensive <strong>boarding waiver</strong> covering medical care, emergencies,
            photos/media, and behavior acknowledgment.
          </li>
          <li>
            Verify <strong>insurance coverage</strong> includes animal-bailee liability—not just
            general business insurance.
          </li>
          <li>
            Stay updated on legislation like{' '}
            <Link
              href="https://www.petuniapets.com/en/blog/ollies-law-kennel-safety-2025"
              target="_blank"
              className="underline text-[#2c4a30] hover:opacity-80"
            >
              Ollie’s Law
            </Link>{' '}
            in Massachusetts, which is influencing new kennel safety standards nationwide.
          </li>
          <li>
            Ensure employee handbooks define who has decision authority during emergencies.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">5️⃣ Staffing &amp; Training Risks</h2>
        <p className="mb-4">
          Staff turnover, lack of training, or fatigue can undo every policy you have in place. People
          safety equals dog safety.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Build structured onboarding: first-week shadowing, written SOPs, and skill checklists.
          </li>
          <li>
            Use continuing education incentives and cross-training between kennel, front desk, and
            playgroup roles.
          </li>
          <li>
            Encourage whistleblowing for unsafe handling without retaliation—culture prevents cover-ups.
          </li>
          <li>
            Reference our guide on{' '}
            <Link
              href="https://www.petuniapets.com/en/blog/hiring-and-retaining-great-kennel-staff"
              target="_blank"
              className="underline text-[#2c4a30] hover:opacity-80"
            >
              hiring and retaining great kennel staff
            </Link>
            .
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Case Studies: Lessons from the Field</h2>
        <p className="mb-4">
          • <strong>Infection outbreak:</strong> A daycare experienced canine cough affecting twelve
          dogs. Post-incident review revealed gaps in vaccination checks and air-exchange rates.
          Updating vaccine policy to include Bordetella and influenza plus new HVAC filters prevented
          recurrence.  
        </p>
        <p className="mb-6">
          • <strong>Dog fight claim:</strong> Two intact males clashed during group play. The facility
          updated policy to require neuter status or separation during heat cycles—see{' '}
          <Link
            href="https://www.petuniapets.com/en/blog/daycare-for-intact-dogs-policies-heat-cycles-safety-us-uk-au"
            target="_blank"
            className="underline text-[#2c4a30] hover:opacity-80"
          >
            Daycare for Intact Dogs
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Insurance &amp; Waiver Essentials</h2>
        <p className="mb-4">
          Solid documentation can turn chaos into a defensible event. Pair strong contracts with
          realistic coverage levels:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Maintain <strong>general liability + animal bailee</strong> insurance (covers injury,
            escape, or death while in your care).
          </li>
          <li>
            Require client acknowledgment of medical emergencies, vaccinations, and social-play risk.
          </li>
          <li>
            Digitally store waivers using secure platforms like Petunia’s integrated waiver tool.
          </li>
          <li>
            Review policy exclusions annually with your broker—especially heatstroke, transport, and
            staff negligence clauses.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Cross-Reference Reading</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            <Link
              href="https://www.petuniapets.com/en/blog/managing-group-play-safely"
              target="_blank"
              className="underline text-[#2c4a30] hover:opacity-80"
            >
              Managing Group Play Safely
            </Link>
          </li>
          <li>
            <Link
              href="https://www.petuniapets.com/en/blog/feeding-dogs-in-daycare-and-boarding"
              target="_blank"
              className="underline text-[#2c4a30] hover:opacity-80"
            >
              Feeding Dogs in Daycare and Boarding
            </Link>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Identify and plan for five core risk areas: medical, behavior, facility, legal, staffing.</li>
          <li>Use written SOPs, daily logs, and trained staff to minimize accidents.</li>
          <li>
            Keep waivers and insurance current—documents are your strongest defense in a dispute.
          </li>
          <li>
            Regular policy reviews under new laws like Ollie’s Law keep your operation compliant.
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
          This article is for informational purposes only and does not replace professional legal or
          insurance advice. Always review local kennel regulations and consult qualified counsel when
          drafting business waivers or policies.
        </p>
      </main>
    </>
  );
}
