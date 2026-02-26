'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function IsThereAVeterinaryShortage() {
  const locale = useLocale();

  const title =
    'Is There a Veterinary Shortage? Costs, Causes, Specialty Gaps, Salaries, and a 10–15 Year Outlook';
  const date = 'August 29, 2025';
  const categories = ['owner', 'boarding', 'daycare', 'vet'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
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

        {/* Local anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#what-is-shortage" className="underline hover:opacity-80">What Counts as a Shortage?</a></li>
            <li><a href="#drivers" className="underline hover:opacity-80">What Caused Today&#39;s Gaps</a></li>
            <li><a href="#costs" className="underline hover:opacity-80">Cost of Veterinary School</a></li>
            <li><a href="#salaries" className="underline hover:opacity-80">Salaries &amp; Compensation</a></li>
            <li><a href="#specialties" className="underline hover:opacity-80">Where the Shortage Feels Sharpest</a></li>
            <li><a href="#where" className="underline hover:opacity-80">Where It&#39;s Hardest to Find a Vet</a></li>
            <li><a href="#10-15" className="underline hover:opacity-80">10–15 Year Outlook</a></li>
            <li><a href="#for-owners" className="underline hover:opacity-80">Action Steps for Pet Owners</a></li>
            <li><a href="#for-clinics" className="underline hover:opacity-80">Action Steps for Clinics</a></li>
            <li><a href="#for-students" className="underline hover:opacity-80">Is Vet School Worth It?</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <div className="space-y-3">
            <p>
              The United States is not facing a uniform, across-the-board collapse in veterinary capacity. Nationally, major professional groups forecast
              <strong> a more balanced picture over the next decade</strong> as graduating class sizes expand and the post-pandemic appointment spike cools. That said,
              <strong> real shortages persist</strong> in specific places and practice types—especially <em>rural food-animal medicine</em>, some <em>public sector</em> roles, and parts of
              <em> emergency/specialty care</em> where staffing and burnout pressures remain high. Owners feel this as longer waits, limited urgent-care hours, and higher prices.
            </p>
            <p>
              Veterinary school is expensive, commonly resulting in six-figure educational debt. Early-career compensation has improved and debt-to-income ratios are slowly trending more manageable,
              but the economics still push many graduates toward urban companion-animal jobs rather than rural or food-animal service. Policy tools such as loan-repayment programs, better
              technician utilization, and smarter scheduling/triage can ease the pressure. Over 10–15 years, expanded class sizes and targeted incentives are likely to reduce the worst access gaps,
              but <strong>workforce well-being</strong> and <strong>team structure</strong> will determine whether the relief sticks.
            </p>
          </div>
        </section>

        {/* What is a shortage */}
        <section id="what-is-shortage" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Counts as a Shortage?</h2>
          <p className="mb-3">
            When people ask whether there is a veterinary shortage, they usually mean: <em>Why can&#39;t I get an appointment quickly at a fair price?</em> Economists define a shortage differently:
            it exists when the quantity of services demanded exceeds the quantity supplied at current prices, locations, and working conditions. By that definition, shortages can be <strong>local</strong>
            (e.g., a rural county with no food-animal veterinarian), <strong>segment-specific</strong> (e.g., long waits for emergency care), or <strong>temporary</strong> (e.g., a wave of retirements or a post-pandemic demand spike).
          </p>
          <p>
            Two realities can be true at once:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              <strong>National balance</strong> may look acceptable over a decade as new programs and class size expansions increase the number of graduates and demand growth moderates.
            </li>
            <li>
              <strong>Local pain points</strong> can remain severe because graduates cluster in metro areas, fewer clinicians choose food-animal or government roles, and emergency/specialty teams struggle with burnout, overnight shifts, and caseload volatility.
            </li>
          </ul>
          <p className="mb-3">
            Practically speaking, that tension explains why headlines oscillate between dire warnings and cautious optimism. For an owner who waited four weeks for a routine exam or six hours at an emergency hospital,
            the shortage is <em>very real</em>. For workforce planners looking at enrollment curves, internship/residency slots, and long-run demand, the picture looks more mixed.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> If your area is appointment-scarce, pre-book wellness visits every six to twelve months and keep your pet&#39;s records, meds, and vaccine dates tidy in Petunia. A clean file means faster triage and fewer repeat visits.
          </div>
        </section>

        {/* Drivers */}
        <section id="drivers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Caused Today&#39;s Gaps</h2>
          <p className="mb-3">
            The factors behind today&#39;s squeeze overlap and compound. Understanding them helps us target solutions that actually work:
          </p>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Pandemic-era demand shock.</strong> Companion-animal ownership rose and owners spent more on pets. Even as demand normalizes, many clinics redesigned schedules for safety and staff well-being, which can reduce daily appointment capacity compared with pre-2020 norms.
            </li>
            <li>
              <strong>Geography and practice mix.</strong> New clinicians tend to choose <em>companion-animal</em> roles in metro areas. Rural communities, food-animal practices, and some public-sector positions compete with higher pay, lighter call burdens, and lifestyle amenities in cities.
            </li>
            <li>
              <strong>Debt and early-career economics.</strong> Six-figure educational debt steers graduates toward higher-paying companion-animal jobs and away from mission-critical roles with lower cash compensation, even if total benefits are strong.
            </li>
            <li>
              <strong>Burnout and retention.</strong> Overnight ER shifts, online client hostility, compassion fatigue, and staffing gaps compound into turnover. Every departure forces remaining teams to do more with less, fueling a cycle that is hard to break without structural changes.
            </li>
            <li>
              <strong>Team underutilization.</strong> In many practices, credentialed technicians and assistants are not used to the full extent of their training. Doctors end up doing tasks that the nursing team could own with clear protocols, adding to bottlenecks.
            </li>
            <li>
              <strong>Training pipeline constraints.</strong> While class sizes are growing, <em>internship and residency capacity</em> is finite. Even when there are enough new generalists, a lag in specialty training can ripple into ER access and referral wait times.
            </li>
          </ol>
        </section>

        {/* Costs */}
        <section id="costs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Much Does Veterinary School Cost?</h2>
          <p className="mb-3">
            Veterinary school is a professional doctorate, typically four academic years after the undergraduate prerequisites. Costs vary by residency status and school, but a reasonable planning range is:
          </p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>In-state tuition over four years:</strong> roughly tens of thousands into the low hundreds of thousands, depending on the program and fees. Living expenses add substantially.</li>
            <li><strong>Out-of-state tuition over four years:</strong> commonly higher, sometimes by five figures per year compared with in-state rates.</li>
            <li><strong>Total cost of attendance:</strong> tuition and fees plus housing, food, insurance, transportation, books, and clinical travel—often bringing the all-in total well into six-figures.</li>
          </ul>
          <p className="mb-3">
            Recent graduate surveys and program data show mean veterinary educational debt around the high-$100k range for all graduates, and just above $200k among graduates carrying debt. Debt-to-income ratios have steadily improved compared with the 2010s but remain a central financial lever in career decisions. Programs that reduce tuition, stabilize fees, or expand targeted scholarships can directly influence where graduates choose to practice.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Planning tip:</strong> Before applying, use each school&#39;s cost comparison tools and build an all-in budget for both residency scenarios. Run repayment models across multiple salary paths (metro companion-animal, rural mixed/food animal, public health, military).
          </div>
        </section>

        {/* Salaries */}
        <section id="salaries" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Salaries &amp; Compensation: What Do Veterinarians Earn?</h2>
          <p className="mb-3">
            Compensation varies widely by region, practice type, experience, and schedule. Here is a consolidated view of what owners, students, and clinic leaders should know today:
          </p>

          <h3 className="text-lg font-semibold mt-2 mb-1">Big picture</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Median pay (all veterinarians):</strong> around the low-to-mid $120k range nationally, with faster than average job growth projected over the next decade.</li>
            <li><strong>New graduate offers (companion-animal, full-time):</strong> often in the low-$100k to ~\$130k range, with signing bonuses, relocation support, and occasionally student-loan repayment assistance.</li>
            <li><strong>Internship/residency stipends:</strong> substantially lower than private-practice salaries; trainees pursue these paths to access board certification and higher later-career earning potential.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-2 mb-1">What moves pay up or down?</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>High-demand schedules (nights, weekends, holidays) and emergency caseloads.</li>
            <li>Geography (urban vs. rural; high cost-of-living metros vs. smaller markets).</li>
            <li>Production models, referral hospital volume, and advanced procedural skill sets.</li>
            <li>Benefits and non-cash compensation (CE, dues, health insurance, retirement match, loan repayment, housing stipends).</li>
          </ul>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> New grads: use reputable salary estimators and ask for mentorship structure in writing. Owners: understand that healthier staffing ratios and fair schedules reduce burnout and improve medical quality, which benefits your pet directly.
          </div>
        </section>

        {/* Specialties */}
        <section id="specialties" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Where the Shortage Feels Sharpest</h2>
          <p className="mb-3">
            Not all care is equally scarce. Access pressure clusters in a few domains:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Emergency &amp; critical care:</strong> Overnight coverage, burnout, and caseload spikes make staffing difficult. Even in cities with multiple referral centers, owners can face long waits or diversion when teams are at safe capacity.
            </li>
            <li>
              <strong>Specialty services:</strong> Cardiology, neurology, internal medicine, oncology, surgery, anesthesia, and radiology depend on residency training capacity. When the pipeline tightens, referral wait times lengthen.
            </li>
            <li>
              <strong>Rural mixed and food-animal practice:</strong> These roles are <em>strategic infrastructure</em> for animal agriculture and public health. Long drives, emergency call burdens, and fewer lifestyle amenities raise the bar for recruitment and retention.
            </li>
            <li>
              <strong>Shelter and nonprofit medicine:</strong> Mission-heavy work with limited budgets competes with private-practice pay. When nonprofit staffing falters, spay/neuter access and community medicine suffer.
            </li>
          </ul>
          <p className="mt-3">
            The through-line: where the work is hardest and the pipeline narrowest, access pain persists without targeted incentives and better team design.
          </p>
        </section>

        {/* Where */}
        <section id="where" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Where It&#39;s Hardest to Find a Veterinarian</h2>
          <p className="mb-3">
            Federal shortage maps highlight dozens of <em>designated</em> counties and regions each year, mostly in rural areas where food-animal and mixed-animal services are thin.
            Loan-repayment programs up to tens of thousands per year help, but uptake depends on call schedules, family considerations, housing, and school districts—not just dollars.
          </p>
          <p className="mb-3">
            Outside those areas, owners may still experience scarcity when urban ER services are saturated during peak seasons or when a specialty service (e.g., board-certified cardiology) is shared across a large region.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Owner navigation tip:</strong> Save both your primary clinic and your nearest 24-hour hospital contact information in Petunia. For chronic conditions, ask your GP to pre-establish a referral line to the right specialty service <em>before</em> you need it.
          </div>
        </section>

        {/* 10–15 year outlook */}
        <section id="10-15" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">10–15 Year Outlook: Relief, With Caveats</h2>
          <p className="mb-3">
            What does the next decade look like? A few durable signals stand out:
          </p>
          <ol className="list-decimal pl-5 space-y-3 mb-3">
            <li>
              <strong>More graduates.</strong> Several newer U.S. programs have launched cohorts, with more under development. This expands generalist supply. The <em>speed</em> of relief varies by region because graduates tend to cluster near where they train and where partners can find work.
            </li>
            <li>
              <strong>Pipeline lag for specialists.</strong> Even if generalist supply improves, residency slots are finite. Without growth in training positions and faculty, specialty bottlenecks can persist longer.
            </li>
            <li>
              <strong>Demand normalization.</strong> The pandemic appointment bulge is moderating. If frequency of visits stabilizes and clinics keep efficiency gains from new workflows, wait times should ease in many markets.
            </li>
            <li>
              <strong>Policy levers.</strong> Sustained funding for rural loan-repayment, mobile/tele-supported practice, and disease-surveillance roles can redistribute capacity to where it matters most without degrading urban access.
            </li>
            <li>
              <strong>Team redesign.</strong> The single biggest practical lever is <em>using credentialed technicians at the top of their training</em> and freeing doctors for doctor-level work. Practices that restructure roles, triage, and appointment types consistently see more care delivered per doctor with less burnout.
            </li>
            <li>
              <strong>Well-being as a capacity constraint.</strong> Burnout, moral distress, and online hostility are not abstractions—they directly limit how many hours clinicians can sustainably provide. Mentorship, predictable schedules, protected lunch/notes time, and client-communication boundaries are capacity interventions, not perks.
            </li>
          </ol>
          <p>
            Net-net: in ten years, many metro areas may feel <em>adequately staffed</em> for general practice, while rural regions and certain specialties still need deliberate investments. The difference between relief and relapse will be how we train, deploy, and retain <strong>entire teams</strong>.
          </p>
        </section>

        {/* For owners */}
        <section id="for-owners" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Action Steps for Pet Owners</h2>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Pre-book wellness.</strong> Keeping routine care on a cadence prevents urgent scrambles. Schedule the next visit as you leave.</li>
            <li><strong>Complete your profile.</strong> Upload vaccine proofs and expiration dates; list meds and diet. A complete file saves time and reduces re-checks.</li>
            <li><strong>Use triage wisely.</strong> Call for nurse triage before driving. Describe symptoms and timing concisely. Send a clear video when safe.</li>
            <li><strong>Build a contingency plan.</strong> Save your nearest 24-hour hospital, plus an urgent-care option if available. Know parking, entrance, and payment methods.</li>
            <li><strong>Protect clinic staff.</strong> Kind, concise communication shortens visits and reduces burnout. It also gets your pet helped faster.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Store your vaccine files, insurer policy, and current medication list in Petunia. Set renewal reminders for preventives so you never scramble for refills.
          </div>
        </section>

        {/* For clinics */}
        <section id="for-clinics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Action Steps for Clinics &amp; Hospitals</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Redesign appointment types and triage.</strong> Hold same-day blocks for urgent but stable cases. Direct true emergencies to ER early. Use nurse-driven phone/tele-triage protocols.
            </li>
            <li>
              <strong>Maximize technician utilization.</strong> Shift vaccines, client education, sample collection, anesthesia monitoring, and dentistry support to credentialed staff with standing orders and checklists.
            </li>
            <li>
              <strong>Protect focus time.</strong> Dedicated note blocks and lunch are not luxuries; they are throughput infrastructure that prevent late-day cascades.
            </li>
            <li>
              <strong>Invest in mentorship.</strong> New grads stay when they have a named mentor, protected training time, and a growth plan that does not require superhuman speed immediately.
            </li>
            <li>
              <strong>Share care across a network.</strong> Coordinate day-practice, urgent care, and ER so each does what they do best. Publish diversion status and referral lead times to reduce dead-ends for owners.
            </li>
            <li>
              <strong>Compensation clarity.</strong> Tie production models to realistic caseloads and support. Avoid perverse incentives that reward overscheduling or cut corners on communication.
            </li>
          </ol>
        </section>

        {/* For students */}
        <section id="for-students" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Is Vet School Worth It for You?</h2>
          <p className="mb-3">
            The work is meaningful and the path is rigorous. If you love the medicine and the team craft, it can be an extraordinary career. A few realities to weigh:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Debt planning matters.</strong> Choose schools strategically; compare in-state vs. out-of-state costs; run repayment models.</li>
            <li><strong>Try multiple practice types.</strong> Do externships in mixed/food animal, shelter, ER, and specialty. You may be surprised where you thrive.</li>
            <li><strong>Health, not heroics.</strong> Sustainable schedules, boundaries with clients, and a supportive team are not negotiable; they are what keep you in the profession long-term.</li>
            <li><strong>Loan-repayment programs.</strong> Rural and public health roles often qualify for generous repayment support—powerful if you want those paths.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Scholarship tip:</strong> Track application cycles early. Some funds require faculty recommendations, community service documentation, or a rural commitment letter.
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>So, is there a veterinary shortage or not?</strong><br />
            National forecasts suggest a more balanced long-run picture than the headlines imply, but local and specialty gaps remain real. Owners feel scarcity when they need urgent care or live in rural counties. The fix is targeted: loan-repayment for rural roles, more residency capacity, better team utilization, and clinic workflows that protect staff.
          </p>

          <p className="mb-3">
            <strong>Why are emergency rooms so crowded?</strong><br />
            ER volumes are volatile, staffing is challenging, and specialty access downstream can be limited. When a hospital hits safe capacity, diversion protects patient care and staff. Urgent-care models and day-practice triage help absorb non-critical cases earlier.
          </p>

          <p className="mb-3">
            <strong>Are salaries improving?</strong><br />
            Yes, especially early-career compensation in companion-animal practice. Residency stipends remain much lower, reflecting the training investment before specialist salaries. Geography, schedule, and production structures create wide variation.
          </p>

          <p className="mb-3">
            <strong>What about mental health?</strong><br />
            Burnout and psychological distress are widely documented. The trend is improving in some surveys, but the profession still requires deliberate well-being design: predictable schedules, mentorship, boundaries with clients, and strong team culture.
          </p>

          <p className="mb-3">
            <strong>How can owners reduce pressure on the system?</strong><br />
            Keep vaccines and preventives current, pre-book wellness, use triage for non-emergencies, and communicate kindly. It shortens your visit and helps keep teams intact.
          </p>

          <p className="text-xs text-gray-600">
            Educational content only. Regional costs and regulations vary. Always consult your veterinary team for individualized medical and financial guidance.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              AVMA. No dire shortage of veterinarians anticipated in coming years (Oct 2024).
              <a href="https://www.avma.org/news/no-dire-shortage-veterinarians-anticipated-coming-years" target="_blank" rel="noopener noreferrer"> AVMA overview</a>
            </li>
            <li>
              AVMA. Chart of the month: No dire shortage of veterinarians ahead (Oct 2024).
              <a href="https://www.avma.org/blog/chart-month-no-dire-shortage-veterinarians-ahead" target="_blank" rel="noopener noreferrer"> AVMA chart</a>
            </li>
            <li>
              U.S. Bureau of Labor Statistics. Veterinarians: pay and outlook (updated 2025; May 2024 wage data).
              <a href="https://www.bls.gov/ooh/healthcare/veterinarians.htm" target="_blank" rel="noopener noreferrer"> BLS profile</a>
            </li>
            <li>
              AAVMC. Demand for and Supply of Veterinarians in the U.S. to 2032 (2024) &amp; 2024–2025 Annual Data Report.
              <a href="https://www.aavmc.org/wp-content/uploads/2024/06/Demand-for-and-Supply-of-Veterinarians-in-the-U.S.-to-2032-New.pdf" target="_blank" rel="noopener noreferrer"> Workforce paper</a>
              {' '}|<a href="https://www.aavmc.org/wp-content/uploads/2025/05/2025-AAVMC-Annual-Data-Report-Final.pdf" target="_blank" rel="noopener noreferrer"> Annual Data</a>
            </li>
            <li>
              AVMA. 2024 senior survey highlights on debt and debt-to-income ratios; policy update on federal student loans (July 2025).
              <a href="https://www.avma.org/news/congress-overhauls-federal-student-loan-program" target="_blank" rel="noopener noreferrer"> AVMA policy brief</a>
            </li>
            <li>
              USDA/NIFA. Veterinary Medicine Loan Repayment Program: shortage situations and map (2025).
              <a href="https://www.nifa.usda.gov/vmlrp-map" target="_blank" rel="noopener noreferrer"> Shortage map</a>
              {' '}|<a href="https://www.nifa.usda.gov/grants/programs/veterinary-medicine-loan-repayment-program" target="_blank" rel="noopener noreferrer"> Program page</a>
            </li>
            <li>
              Mars Veterinary Health. Characterizing the need for companion-animal veterinarians (2023) and shortage explainer.
              <a href="https://www.marsveterinary.com/media/uploads/2023/08/Characterizing-the-Need.pdf" target="_blank" rel="noopener noreferrer"> Report PDF</a>
              {' '}|<a href="https://www.marsveterinary.com/tackling-the-veterinary-professional-shortage/" target="_blank" rel="noopener noreferrer"> Shortage page</a>
            </li>
            <li>
              AAVMC. VIRMP salary reports for residencies and internships (2024).
              <a href="https://www.aavmc.org/wp-content/uploads/2024/04/2024-Academic-Residency-Salaries-Offered-through-the-VIRMP.pdf" target="_blank" rel="noopener noreferrer"> Residency salaries</a>
              {' '}|<a href="https://www.aavmc.org/wp-content/uploads/2024/04/2024-Academic-Internship-Salaries-Offered-through-the-VIRMP.pdf" target="_blank" rel="noopener noreferrer"> Internship salaries</a>
            </li>
            <li>
              Merck Animal Health &amp; AVMA. Fourth Veterinary Wellbeing Study (2024).
              <a href="https://www.merck-animal-health.com/blog/2024/01/15/4th-veterinary-wellbeing-study/" target="_blank" rel="noopener noreferrer"> Wellbeing study</a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Sources are provided for general education. Figures are approximate and may vary by region, specialty, and market conditions. Consult your veterinary team and professional advisors for local guidance.
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
