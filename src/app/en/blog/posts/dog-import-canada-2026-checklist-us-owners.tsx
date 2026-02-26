'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogImportCanada2026ChecklistUSOwners() {
  const locale = useLocale();

  const title =
    'Dog Import to Canada in 2026: Checklist for U.S. Owners (Airline, CFIA, Border, and Return-to-U.S. Rules)';
  const date = 'February 26, 2026';
  const categories = ['owner', 'vet'] as const;

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
          <span
            key={key}
            className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
          >
            {categoryLabels[key] ?? key}
          </span>
        ))}
      </div>

      <nav className="mb-8 text-sm">
        <ul className="flex flex-wrap gap-3">
          <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
          <li><a href="#quick-checklist" className="underline hover:opacity-80">Quick Checklist</a></li>
          <li><a href="#who-this-is-for" className="underline hover:opacity-80">Who This Guide Is For</a></li>
          <li><a href="#what-you-need" className="underline hover:opacity-80">Documents You Need</a></li>
          <li><a href="#doc-matrix" className="underline hover:opacity-80">Document Matrix</a></li>
          <li><a href="#airline-layer" className="underline hover:opacity-80">Airline Rules Layer</a></li>
          <li><a href="#crossing-border" className="underline hover:opacity-80">Crossing the Border</a></li>
          <li><a href="#return-us" className="underline hover:opacity-80">Returning to the U.S.</a></li>
          <li><a href="#special-scenarios" className="underline hover:opacity-80">Special Scenarios</a></li>
          <li><a href="#owner-templates" className="underline hover:opacity-80">Owner Templates</a></li>
          <li><a href="#boarding-planning" className="underline hover:opacity-80">Boarding + Travel Planning</a></li>
          <li><a href="#mistakes" className="underline hover:opacity-80">Most Common Mistakes</a></li>
          <li><a href="#timeline" className="underline hover:opacity-80">30-Day Timeline</a></li>
          <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
          <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
        </ul>
      </nav>

      <section id="tldr" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">TL;DR</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Think in layers: <strong>airline rules + Canada entry rules + U.S. re-entry rules</strong>.</li>
          <li>Do not rely on one checklist screenshot from social media; carrier and government requirements can differ by route and timing.</li>
          <li>For U.S. return, your CDC-related requirements still apply based on your dog&rsquo;s travel history and paperwork.</li>
          <li>Create a single packet (digital + printed) and carry duplicates for airport and border agents.</li>
          <li>Rules can change; use this guide as a planning framework and verify official sources right before travel day.</li>
        </ul>
      </section>

      <section id="quick-checklist" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Quick Checklist (Copy/Paste)</h2>
        <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Check your airline pet policy for every segment (not just the first flight).</li>
            <li>Confirm Canada entry requirements for your dog&rsquo;s age, documentation, and travel purpose.</li>
            <li>Confirm U.S. re-entry requirements before departure from the U.S.</li>
            <li>Verify microchip and vaccine records match exactly (name, number, date, issuing clinic).</li>
            <li>Save all docs as PDF offline on your phone + print two full sets.</li>
            <li>Carry food in original packaging and medications in original labeled containers.</li>
            <li>Re-check rules at T-72 hours and again on travel morning.</li>
          </ul>
        </div>
      </section>

      <section id="who-this-is-for" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Who This Guide Is For</h2>
        <p className="mb-4">
          This article is designed for U.S.-based dog owners traveling to Canada in 2026 and returning
          to the United States. It is especially useful if you are flying one-way and driving back,
          connecting through multiple airports, or boarding your dog before/after international travel.
        </p>
        <p className="mb-4">
          If you have not reviewed your U.S. return requirements recently, start here first:{' '}
          <Link href={`/${locale}/blog/cdc-dog-import-rules-us-2025-2026`} className="underline hover:opacity-80">
            CDC Dog Import Rules (2025–2026)
          </Link>.
        </p>
        <p>
          If your trip is primarily about air travel planning and in-cabin constraints, pair this with:{' '}
          <Link
            href={`/${locale}/blog/airline-pet-travel-2025-italy-in-cabin-large-dogs-what-it-means-us`}
            className="underline hover:opacity-80"
          >
            Airline Pet Travel: What U.S. Flyers Should Know
          </Link>.
        </p>
      </section>

      <section id="what-you-need" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Documents You Should Prepare</h2>
        <h3 className="text-xl font-semibold mb-2">Core Travel Packet</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Microchip details and scannable confirmation</li>
          <li>Current vaccination records (with clinic contact info)</li>
          <li>Recent health certificate if required by your carrier or route</li>
          <li>Proof of ownership and emergency contacts</li>
          <li>Medication list with dosing instructions for travel days</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Add-On Docs Many Owners Forget</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Backup rabies documentation copy in separate bag</li>
          <li>Carrier size/spec confirmation screenshot from airline site</li>
          <li>Layover-country requirements if transiting outside U.S./Canada</li>
          <li>PDF exports of all forms in offline phone storage</li>
          <li>Vet letter for ongoing conditions (motion sickness, seizure history, endocrine needs)</li>
          <li>Emergency clinic list for destination city and route stopovers</li>
        </ul>
      </section>

      <section id="doc-matrix" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Document Matrix: Who Asks for What?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-[#d9cfc2] mb-4">
            <thead className="bg-[#e4dbcb]">
              <tr>
                <th className="text-left p-2">Document</th>
                <th className="text-left p-2">Airline Check-In</th>
                <th className="text-left p-2">Canada Border</th>
                <th className="text-left p-2">U.S. Re-Entry</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Microchip record</td>
                <td className="p-2">Sometimes</td>
                <td className="p-2">May be requested</td>
                <td className="p-2">Commonly relevant</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Vaccination records</td>
                <td className="p-2">Often</td>
                <td className="p-2">Commonly relevant</td>
                <td className="p-2">Commonly relevant</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Health certificate</td>
                <td className="p-2">Route/carrier dependent</td>
                <td className="p-2">Context dependent</td>
                <td className="p-2">Context dependent</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Carrier compliance proof</td>
                <td className="p-2">Yes</td>
                <td className="p-2">No</td>
                <td className="p-2">No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm">
          Use this matrix as planning guidance, then verify exact requirements from official sources for your travel week.
        </p>
      </section>

      <section id="airline-layer" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Airline Rules Are a Separate Layer</h2>
        <p className="mb-4">
          Many rejected check-ins happen because owners only verify government entry rules. Airlines can
          still deny boarding based on carrier dimensions, route embargoes, or weather cutoffs even when
          your health paperwork is correct.
        </p>
        <h3 className="text-xl font-semibold mb-2">Airline Layer Checklist</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Confirm pet acceptance for each segment under your exact flight number.</li>
          <li>Check in-cabin carrier dimensions and total weight constraints.</li>
          <li>Check seasonal or weather restrictions for cargo/checked transport.</li>
          <li>Confirm layover airport handling process if you must reclaim and re-check.</li>
        </ul>
        <p className="mb-4">
          If your trip involves changing policy environments (for example, Italy policy headlines vs U.S.
          carrier constraints), review this context before booking:{' '}
          <Link
            href={`/${locale}/blog/airline-pet-travel-2025-italy-in-cabin-large-dogs-what-it-means-us`}
            className="underline hover:opacity-80"
          >
            Airline Pet Travel 2025: Italy In-Cabin Update
          </Link>.
        </p>
      </section>

      <section id="crossing-border" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Crossing Into Canada: Practical Border Workflow</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Keep your documents in this order: identity, vaccine record, health paperwork, travel forms.</li>
          <li>Answer destination and duration questions clearly and consistently.</li>
          <li>If bringing dog food, keep original packaging and ingredient label visible.</li>
          <li>Do not present partial screenshots; show complete, readable records.</li>
        </ol>
        <p className="mt-4">
          For baseline Canadian import framing, compare this companion article:{' '}
          <Link href={`/${locale}/blog/cfia-pet-import-rules-canada-2025`} className="underline hover:opacity-80">
            CFIA Pet Import Rules for Canada
          </Link>.
        </p>
        <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 mt-4 text-sm">
          <strong>Pro tip:</strong> Keep answers concise and factual. Border interactions go smoother when your
          stated destination, stay duration, and pet documents align cleanly.
        </div>
      </section>

      <section id="return-us" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Returning to the U.S.: The Part Owners Miss Most</h2>
        <p className="mb-4">
          Return-to-U.S. rules should be treated as your primary planning anchor, not a last-day task.
          In practice, your re-entry success depends on clean document continuity from departure through
          return.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Verify dog age and identity requirements well in advance</li>
          <li>Confirm that all submitted forms match microchip and vaccination records</li>
          <li>Re-check requirements close to departure and again before return travel day</li>
        </ul>
        <p className="mt-4">
          If you plan to board before or after an international trip, also confirm local facility intake
          documentation windows so timing does not conflict with your travel paperwork.
        </p>
      </section>

      <section id="special-scenarios" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Special Scenarios Owners Should Plan For</h2>
        <h3 className="text-xl font-semibold mb-2">Scenario 1: Flight Cancelled Mid-Itinerary</h3>
        <p className="mb-4">
          Keep one printed packet in your carry-on and one in your checked luggage so rebooking at a
          different desk does not create a documentation gap.
        </p>
        <h3 className="text-xl font-semibold mb-2">Scenario 2: Chronic Medical Needs</h3>
        <p className="mb-4">
          Carry medication schedule cards and ask your veterinarian for a brief case summary letter in
          plain language, especially for seizure disorders, Addison&rsquo;s disease, diabetes, or heart disease.
        </p>
        <h3 className="text-xl font-semibold mb-2">Scenario 3: Multi-Country Transit</h3>
        <p>
          Transit-country requirements may apply even when you do not leave the airport terminal. Verify
          each country in your route map before you purchase tickets.
        </p>
      </section>

      <section id="owner-templates" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Owner Templates You Can Copy</h2>
        <h3 className="text-xl font-semibold mb-2">Airline Verification Script</h3>
        <p className="mb-4 text-sm">
          &ldquo;I am traveling with one dog on booking [reference]. Can you confirm pet acceptance, carrier specs,
          segment restrictions, and required documents for every leg on this itinerary?&rdquo;
        </p>
        <h3 className="text-xl font-semibold mb-2">Pre-Trip Vet Visit Checklist</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Confirm record consistency (name/chip/date fields)</li>
          <li>Confirm travel-safe medication plan and dosing windows</li>
          <li>Request copies in both paper and PDF</li>
          <li>Confirm what must be renewed before return travel</li>
        </ul>
      </section>

      <section id="boarding-planning" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Boarding + Travel Planning (If You Need Interim Care)</h2>
        <p className="mb-4">
          International travel often involves one or two nights of interim boarding. Build that into your
          documentation plan so you are not rushing vaccine uploads while packing.
        </p>
        <p className="mb-4">
          Use these related resources to reduce stress and documentation errors:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link href={`/${locale}/blog/dog-boarding-checklist-what-to-bring-what-to-upload-when-to-book`} className="underline hover:opacity-80">
              Boarding Checklist: What to Bring, What to Upload, and When to Book
            </Link>
          </li>
          <li>
            <Link href={`/${locale}/blog/dog-boarding-vaccination-requirements-2025`} className="underline hover:opacity-80">
              Dog Boarding Vaccination Requirements
            </Link>
          </li>
        </ul>
      </section>

      <section id="mistakes" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Most Common Failure Points</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Assuming prior travel success guarantees current-trip compliance</li>
          <li>Using outdated PDFs from old forum threads</li>
          <li>Mismatched document details (name spelling, chip number, or date fields)</li>
          <li>No backup plan when a flight segment changes aircraft or carrier rules</li>
        </ul>
      </section>

      <section id="timeline" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">30-Day Practical Timeline</h2>
        <h3 className="text-xl font-semibold mb-2">30 to 21 Days Before Travel</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Confirm route and carrier pet acceptance for each segment</li>
          <li>Book veterinary appointment for travel-document review</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">20 to 10 Days Before Travel</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Compile digital and print packet</li>
          <li>Run a detail audit: every number and date must match</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Final 72 Hours</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Re-check airline and re-entry policy pages</li>
          <li>Prepare backup food, medication, and calming travel routine</li>
          <li>Print one final full packet and keep a second copy in a separate bag</li>
        </ul>
      </section>

      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">FAQ</h2>
        <h3 className="text-xl font-semibold mb-2">Can one set of documents satisfy airline and border agents?</h3>
        <p className="mb-4">
          Sometimes, but not always. Treat airline requirements and government entry requirements as
          separate compliance tracks.
        </p>
        <h3 className="text-xl font-semibold mb-2">Should I trust third-party summaries?</h3>
        <p className="mb-4">
          Use them only as secondary orientation. Final decisions should be based on primary airline
          and government sources.
        </p>
        <h3 className="text-xl font-semibold mb-2">What if my dog has chronic health needs?</h3>
        <p>
          Build a travel care sheet signed by your veterinarian and keep medications in original
          containers with dosing schedule visible.
        </p>
        <h3 className="text-xl font-semibold mb-2 mt-6">Can I use a pet relocation service instead?</h3>
        <p className="mb-4">
          Yes, but you still need to verify document ownership and final requirements yourself. Services can
          reduce friction, but the traveler remains responsible for compliance.
        </p>
        <h3 className="text-xl font-semibold mb-2">How early should I start if I travel in peak season?</h3>
        <p>
          Start at least 4-6 weeks out so you have buffer for appointment delays, route changes, and document corrections.
        </p>
      </section>

      <section id="sources" className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Sources</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>CFIA import guidance (official source pages)</li>
          <li>CDC dog entry guidance (official source pages)</li>
          <li>Carrier pet-travel policy pages for all booked flight segments</li>
          <li>Border agency travel guidance where applicable to your route</li>
        </ul>
        <p className="text-xs text-gray-600 mt-4">
          Educational use only. Travel and public-health rules can change; confirm current official requirements before travel.
        </p>
      </section>

      <div className="mt-8">
        <Link href={`/${locale}/blog`} className="underline hover:opacity-80">
          &larr; Back to Blog
        </Link>
      </div>
    </main>
  );
}
