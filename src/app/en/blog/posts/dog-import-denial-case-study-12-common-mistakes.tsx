'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ArticlePage() {
  const locale = useLocale();

  const title = 'Dog Import Denial Case Study: 12 Real Mistakes That Trigger Border or Airline Rejection';
  const date = 'February 18, 2026';
  const categories = ["owner","vet"] as const;

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
          <li><strong>Dog Import Denial Case Study 12 Real Mistakes That Trigger Border or Airline Rejection</strong> is easiest to manage when you use a repeatable system, not one-off decisions.</li>
          <li>Prioritize high-risk failure points first, then build a step-by-step plan around those points.</li>
          <li>Keep one authoritative record set with matching identifiers, dates, and notes across all touchpoints.</li>
          <li>Use a two-checkpoint verification process (final prep and day-of execution) to catch preventable errors.</li>
          <li>Escalate early when symptoms, logistics, or compliance details move outside your normal baseline.</li>
          <li>Internal documentation quality is a major predictor of outcomes, confidence, and cost control.</li>
        </ul>
      </section>

      <section id="audience" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Who This Is For</h2>
        <p className="mb-4">This guide is for pet owners traveling across borders or by air who need their documents and timing exactly right.</p>
        <p>This guide is designed to be practical first: what to check, what to document, what to do next, and what to avoid.</p>
      </section>

      <section id="framework" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Execution Framework</h2>
        <h3 className="text-xl font-semibold mb-2">Step 1: Define your risk profile</h3>
        <p className="mb-4">Identify non-negotiables (rules, health constraints, timing windows) and separate them from flexible choices. This prevents last-minute chaos and makes decisions faster when plans shift.</p>
        <h3 className="text-xl font-semibold mb-2">Step 2: Build a single operating file</h3>
        <p className="mb-4">Build a single source-of-truth travel packet with every required record and one backup print set.</p>
        <h3 className="text-xl font-semibold mb-2">Step 3: Run two verification checkpoints</h3>
        <p className="mb-4">Re-verify details at T-72 hours and again at execution. Use a checkbox log so every required field is actively confirmed, not assumed.</p>
        <h3 className="text-xl font-semibold mb-2">Step 4: Track outcomes with measurable KPIs</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Document match rate (name, ID, microchip, dates, signatures): target 100%</li>
          <li>Verification checkpoints completed on time: target 2 of 2 (T-72 and day-of)</li>
          <li>Backup routing/boarding plan documented before travel: target yes</li>
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
          <li>Using old screenshots instead of current official pages for your exact route/date.</li>
          <li>Assuming one country rule automatically satisfies airline or destination rule sets.</li>
          <li>Missing a formatting mismatch (microchip digit, date format, signature field).</li>
          <li>Not creating a fallback plan for delays, weather, or check-in rejection.</li>
        </ul>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">FAQ</h2>
        <h3 className="text-xl font-semibold mb-2">How far in advance should I start travel paperwork?</h3>
        <p className="mb-4">For most routes, start 4-8 weeks early so you can resolve retests, document corrections, and scheduling bottlenecks.</p>
        <h3 className="text-xl font-semibold mb-2">What causes most same-day travel denials?</h3>
        <p className="mb-4">Most denials come from documentation mismatches and outdated assumptions, not complex medical issues.</p>
        <h3 className="text-xl font-semibold mb-2">Do I still verify on travel day if everything looked fine last week?</h3>
        <p>Yes. Policy wording and operational interpretations can change quickly, so final-day verification is essential.</p>
      </section>

      <section id="related" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Related Reading</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><Link href={`/${locale}/blog/cdc-dog-import-rules-us-2025-2026`} className="underline hover:opacity-80">CDC Dog Import Rules (U.S.)</Link></li>
          <li><Link href={`/${locale}/blog/cfia-pet-import-rules-canada-2025`} className="underline hover:opacity-80">CFIA Pet Import Rules (Canada)</Link></li>
          <li><Link href={`/${locale}/blog/dog-boarding-checklist-what-to-bring-what-to-upload-when-to-book`} className="underline hover:opacity-80">Boarding and Document Checklist</Link></li>
          <li><Link href={`/${locale}/blog/airline-pet-travel-2025-italy-in-cabin-large-dogs-what-it-means-us`} className="underline hover:opacity-80">Airline Pet Travel Rule Changes</Link></li>
        </ul>
      </section>

      <section id="sources" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Sources To Verify Before Acting</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>U.S. CDC import/re-entry guidance and any route-specific notices</li>
          <li>CFIA or destination-country import pages and updates</li>
          <li>Airline live-animal and in-cabin policy pages for your carrier and route</li>
          <li>Your veterinarian for medication timing and travel-stress planning</li>
        </ul>
        <p className="text-xs text-gray-600 mt-4">Educational content only. This article does not replace veterinary or legal advice. Verify current official requirements and consult your vet for dog-specific decisions.</p>
      </section>

      <div className="mt-8">
        <Link href={`/${locale}/blog`} className="underline hover:opacity-80">&larr; Back to Blog</Link>
      </div>
    </main>
  );
}
