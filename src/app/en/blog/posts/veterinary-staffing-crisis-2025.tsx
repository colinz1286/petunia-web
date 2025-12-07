'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function VeterinaryStaffingCrisis2025() {
  const locale = useLocale();

  const title =
    'Why It’s Getting Harder to Find a Vet — and How Pet Owners Can Plan Ahead';
  const date = 'October 7, 2025';
  const categories = ['owner', 'vet'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="Veterinary medicine faces record burnout, staff shortages, and clinic closures. Learn what’s driving the crisis, how vet schools are responding, and how pet owners can plan ahead for care access."
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
          Across the United States, veterinary clinics are struggling to keep up with demand.
          According to the American Veterinary Medical Association (AVMA, 2025) and the Association
          of American Veterinary Medical Colleges (AAVMC, 2022), the profession faces one of its most
          serious workforce shortages in decades. Rising pet ownership, burnout, and an aging
          workforce have created longer wait times, limited appointment availability, and in some
          regions, complete service gaps.
        </p>

        <p className="mb-6">
          This article explains why it’s getting harder to find a veterinarian, what schools and
          organizations are doing to address the shortage, and how pet owners can take proactive
          steps to secure consistent, high-quality care.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Answer (Straight to the Point)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Burnout is at record levels:</strong> Nearly half of U.S. veterinarians report
            emotional exhaustion and high workload stress (Capuzzi, 2025; HumanePro, 2025).
          </li>
          <li>
            <strong>Clinic capacity is shrinking:</strong> Many hospitals have reduced hours or
            closed due to chronic understaffing (HumanePro, 2025).
          </li>
          <li>
            <strong>Vet schools are expanding:</strong> Institutions are increasing class sizes and
            opening new programs, but results will take years to materialize (AAVMC, 2022).
          </li>
          <li>
            <strong>Rural areas are hit hardest:</strong> The USDA designated more than 240 rural
            veterinary shortage zones in 2025 (USDA & AVMA, 2025).
          </li>
          <li>
            <strong>Pet owners can adapt:</strong> Build a long-term relationship with a clinic,
            schedule early, and budget for preventive and emergency care.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 1 — What’s Driving the Veterinary Shortage
        </h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Burnout and compassion fatigue</h3>
        <p className="mb-4">
          Long hours, emotional intensity, and economic pressure have led to widespread burnout.
          Compassion fatigue and administrative overload are major factors in early career attrition
          (HumanePro, 2025; Capuzzi, 2025). Many professionals cite the emotional toll of handling
          euthanasia cases and financial disputes as key stressors.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Retirement and attrition</h3>
        <p className="mb-4">
          The average veterinarian age in the U.S. continues to climb. As older practitioners retire,
          fewer younger vets are entering clinical practice fast enough to replace them (AAVMC, 2022;
          AVMA, 2024). This creates gaps in both leadership and mentorship across the industry.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Debt and financial stress</h3>
        <p className="mb-4">
          Veterinary graduates leave school with median debt exceeding $180,000 (AVMA Economics Division,
          2024). The financial strain drives some to corporate or non-clinical roles instead of small
          practice, reducing the pool of available clinicians.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Training and regional shortages</h3>
        <p className="mb-6">
          Despite new programs and satellite campuses, U.S. veterinary schools can’t yet meet national
          demand. As of 2025, the USDA recognized 243 rural shortage areas across 46 states — the
          highest total on record (USDA & AVMA, 2025).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 2 — How the Profession Is Responding
        </h2>
        <p className="mb-4">
          The AVMA’s *Future Workforce Needs Initiative* and the AAVMC’s *Workforce Report* outline
          several solutions. Universities are expanding class sizes and introducing accelerated
          programs (AAVMC, 2022). Federal and state agencies are funding **loan-repayment incentives**
          for graduates who serve in shortage regions (USDA & AVMA, 2025).
        </p>
        <p className="mb-6">
          Another proposal gaining traction is the creation of **mid-level practitioners**, similar
          to physician assistants in human healthcare (Capuzzi, 2025). These professionals could
          perform routine procedures and triage cases, freeing veterinarians for complex care.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 3 — How the Shortage Affects Pet Owners
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Longer wait times for appointments, especially new-client visits.</li>
          <li>Reduced weekend or after-hours coverage in many clinics.</li>
          <li>Emergency facilities experiencing overcrowding or diversion.</li>
          <li>Rural pet owners traveling farther for basic services.</li>
          <li>Rising prices as clinics compete for scarce staff.</li>
        </ul>

        <p className="mb-6">
          For owners, these delays can mean slower access to preventive care or delayed diagnoses.
          Being proactive—rather than reactive—has become essential.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 4 — Practical Steps Pet Owners Can Take
        </h2>
        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>
            <strong>Establish a “home clinic.”</strong> Build an ongoing relationship before your pet
            has an emergency. Many hospitals now limit new clients.
          </li>
          <li>
            <strong>Book early and stay consistent.</strong> Schedule wellness exams months in
            advance to ensure continuity of care.
          </li>
          <li>
            <strong>Budget for emergency care.</strong> Rising costs and limited capacity make a
            $2 000–$5 000 reserve essential.
          </li>
          <li>
            <strong>Use tele-vet services appropriately.</strong> Many practices now offer virtual
            re-checks or triage to reduce clinic load.
          </li>
          <li>
            <strong>Support veterinary staff.</strong> Kindness, patience, and understanding reduce
            stress on teams already working at capacity.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm mb-10">
          <li>
            American Association of Veterinary Medical Colleges (AAVMC). (2022). 
            <em>Statement on U.S. Veterinary Workforce and Education Expansion.</em>
          </li>
          <li>
            American Veterinary Medical Association (AVMA). (2024). 
            <em>Workforce Survey and Economic Report 2024.</em>
          </li>
          <li>
            American Veterinary Medical Association (AVMA). (2025). 
            <em>USDA announces plan to address rural veterinary shortages 2025.</em>
          </li>
          <li>
            AVMA Economics Division. (2024). 
            <em>Veterinary Student Debt and Financial Health Report.</em>
          </li>
          <li>
            Capuzzi, J. (2025, June 26). <em>Overcoming Understaffing.</em> dvm360 Magazine.
          </li>
          <li>
            HumanePro. (2025). <em>The Crisis of Veterinary Care: Staffing and Sustainability Update.</em>
          </li>
          <li>
            U.S. Department of Agriculture & American Veterinary Medical Association. (2025). 
            <em>Rural Veterinary Shortage Areas Announcement 2025.</em>
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
          This article provides general educational information and does not replace professional
          veterinary or financial advice. Statistics and reports are cited from reputable
          organizations including the AVMA, AAVMC, USDA, and HumanePro.
        </p>
      </main>
    </>
  );
}
