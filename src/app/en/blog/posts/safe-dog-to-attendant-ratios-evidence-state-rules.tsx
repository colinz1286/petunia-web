'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ArticlePage() {
  const locale = useLocale();

  const title = 'How Many Dogs Per Attendant Is Actually Safe? Evidence, State Rules, and Practical Ratios';
  const date = 'January 3, 2026';
  const categories = ["owner","boarding","vet"] as const;

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
    food: 'Food Guide',
    train: 'Training',
    allergy: 'Allergies',
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
      <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((key) => (
          <span key={key} className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]">
            {categoryLabels[key] ?? key}
          </span>
        ))}
      </div>

      <nav className="mb-8 text-sm">
        <ul className="flex flex-wrap gap-3">
          <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
          <li><a href="#audience" className="underline hover:opacity-80">Who This Is For</a></li>
          <li><a href="#framework" className="underline hover:opacity-80">Execution Framework</a></li>
          <li><a href="#checklist" className="underline hover:opacity-80">Detailed Checklist</a></li>
          <li><a href="#mistakes" className="underline hover:opacity-80">Common Mistakes</a></li>
          <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
          <li><a href="#related" className="underline hover:opacity-80">Related Reading</a></li>
          <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
        </ul>
      </nav>

      <section id="tldr" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">TL;DR</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>How Many Dogs Per Attendant Is Actually Safe? Evidence, State Rules, and Practical Ratios</strong> is easiest to manage when you use a repeatable system, not one-off decisions.</li>
          <li>Prioritize high-risk failure points first, then build a step-by-step plan around those points.</li>
          <li>Keep one authoritative record set with matching identifiers, dates, and notes across all touchpoints.</li>
          <li>Use a two-checkpoint verification process (final prep and day-of execution) to catch preventable errors.</li>
          <li>Escalate early when symptoms, logistics, or compliance details move outside your normal baseline.</li>
          <li>Internal documentation quality is a major predictor of outcomes, confidence, and cost control.</li>
        </ul>
      </section>

      <section id="audience" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Who This Is For</h2>
        <p className="mb-4">This guide is for pet owners and boarding/daycare operators who need predictable, safe, and auditable workflows.</p>
        <p>This guide is designed to be practical first: what to check, what to document, what to do next, and what to avoid.</p>
      </section>

      <section id="framework" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Execution Framework</h2>
        <h3 className="text-xl font-semibold mb-2">Step 1: Define your risk profile</h3>
        <p className="mb-4">Identify non-negotiables (rules, health constraints, timing windows) and separate them from flexible choices. This prevents last-minute chaos and makes decisions faster when plans shift.</p>
        <h3 className="text-xl font-semibold mb-2">Step 2: Build a single operating file</h3>
        <p className="mb-4">Document your operating standard with clear intake gates, exclusion criteria, and escalation paths.</p>
        <h3 className="text-xl font-semibold mb-2">Step 3: Run two verification checkpoints</h3>
        <p className="mb-4">Re-verify details at T-72 hours and again at execution. Use a checkbox log so every required field is actively confirmed, not assumed.</p>
        <h3 className="text-xl font-semibold mb-2">Step 4: Track outcomes with measurable KPIs</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Intake completeness before admission: target 95%+ without same-day scrambling</li>
          <li>Incident-prevention controls documented and executed: target 100%</li>
          <li>Post-stay owner confidence score and retention trend: target upward</li>
        </ul>
      </section>

      <section id="checklist" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Detailed Checklist</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Confirm the current official requirements for your exact scenario, date range, and location.</li>
          <li>Audit names, identifiers, and date formats for exact match across every record.</li>
          <li>Prepare one primary packet and one backup packet (digital + printable).</li>
          <li>Document medication, feeding, and handling routines in plain language for handoff clarity.</li>
          <li>Define red-flag thresholds that require immediate escalation to a vet or operations lead.</li>
          <li>Set an emergency contact tree with primary, secondary, and after-hours numbers.</li>
          <li>Schedule a post-event review to identify what should be improved next cycle.</li>
        </ol>
      </section>

      <section id="mistakes" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Common Mistakes That Reduce Outcomes</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Treating behavior notes as optional and losing key trigger/context details.</li>
          <li>Combining dogs without a repeatable compatibility protocol.</li>
          <li>Using ambiguous handoffs between front desk and floor staff.</li>
          <li>Skipping post-incident debriefs that should update policy and training.</li>
        </ul>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">FAQ</h2>
        <h3 className="text-xl font-semibold mb-2">What is the highest-impact change for safer operations?</h3>
        <p className="mb-4">Standardized intake plus objective compatibility screening consistently reduces preventable incidents.</p>
        <h3 className="text-xl font-semibold mb-2">How often should policies be reviewed?</h3>
        <p className="mb-4">At minimum quarterly, and immediately after any incident, staffing change, or regulatory update.</p>
        <h3 className="text-xl font-semibold mb-2">Can a small facility use the same framework as a large facility?</h3>
        <p>Yes. The framework scales if you keep decision gates explicit and documentation disciplined.</p>
      </section>

      <section id="related" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Related Reading</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><Link href={`/${locale}/blog/daycare-safety-standards-2025`} className="underline hover:opacity-80">Daycare Safety Standards</Link></li>
          <li><Link href={`/${locale}/blog/dog-daycare-and-boarding-laws-by-state-2025`} className="underline hover:opacity-80">Boarding and Daycare Laws by State</Link></li>
          <li><Link href={`/${locale}/blog/dog-boarding-vaccination-requirements-2025`} className="underline hover:opacity-80">Boarding Vaccination Requirements</Link></li>
          <li><Link href={`/${locale}/blog/boarding-vs-daycare-2025`} className="underline hover:opacity-80">Boarding vs Daycare Guide</Link></li>
        </ul>
      </section>

      <section id="sources" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Sources To Verify Before Acting</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>State and municipal licensing/regulatory pages for animal facilities</li>
          <li>Facility written policies, emergency SOPs, and vaccine requirements</li>
          <li>AAHA/AVMA-style infection-control and welfare guidance</li>
          <li>Your veterinarian for dog-specific medical and behavior constraints</li>
        </ul>
        <p className="text-xs text-gray-600 mt-4">Educational content only. This article does not replace veterinary or legal advice. Verify current official requirements and consult your vet for dog-specific decisions.</p>
      </section>

      <div className="mt-8">
        <Link href={`/${locale}/blog`} className="underline hover:opacity-80">&larr; Back to Blog</Link>
      </div>
    </main>
  );
}
