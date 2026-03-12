'use client';

// SEO weakness notes: page is still new; likely limited backlinks; schema is only baseline BlogPosting
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function KennelCoughNewVaccineGuide() {
  const locale = useLocale();

  const title =
    'New Injectable Vaccine for Kennel Cough: What Dog Owners & Daycare/Boarding Facilities Need to Know';
  const date = 'November 22, 2025';
  const categories = ['owner', 'boarding', 'grooming'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding & Daycare',
    food: 'Dog Food & Nutrition',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    grooming: 'Grooming & Care',
    breed_specific_guides: 'Breed-Specific Guides',
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
          A newly approved injectable vaccine against Bordetella bronchiseptica — a leading cause of
          kennel cough — has been released for veterinary use. This is important news for dog owners
          and for boarding/daycare operators who must decide whether to adjust vaccine requirements.
          Below is an evidence-based overview of how the new injectable works, its benefits, and how
          facilities can incorporate it into safety protocols.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          What’s New: Zoetis Vanguard Recombishield Injectable
        </h2>
        <p className="mb-4">
          In November 2025, Zoetis officially launched **Vanguard Recombishield**, a recombinant,
          non-adjuvanted injectable vaccine for Bordetella bronchiseptica. It is licensed for dogs 8
          weeks of age and older.  
          <br />
          <strong>Source:</strong>{' '}
          <a
            href="https://www.zoetisus.com/news-and-media/zoetis-launches-vanguard-recombishield-injectable-vaccine/?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Zoetis News Release
          </a>
        </p>

        <p className="mb-4">
          Veterinary reporting notes that the injectable option may be better tolerated by dogs who
          dislike intranasal/oral vaccination methods, as well as seniors or immunosuppressed dogs.
          <br />
          <strong>Source:</strong>{' '}
          <a
            href="https://www.veterinarypracticenews.com/injectable-vaccine-kennel-cough-treatment/?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Veterinary Practice News
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">How the Injectable Works</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            The vaccine is a 1 mL subcutaneous injection, recommended for healthy dogs 8+ weeks.
            <br />
            <strong>Source:</strong>{' '}
            <a
              className="underline"
              href="https://www.drugs.com/vet/vanguard-recombishield-injectable-bordetella.html?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drugs.com Veterinary Monograph
            </a>
          </li>
          <li>
            Initial protocol includes **two doses, 3–4 weeks apart** for full immunity.
          </li>
          <li>
            Non-adjuvanted formulation reduces likelihood of injection-site reactions.
          </li>
          <li>
            Duration of immunity is still being studied; follow veterinarian guidance for boosters.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why This Matters for Boarding & Daycare
        </h2>
        <p className="mb-4">
          Kennel cough spreads extremely easily in indoor group-care settings. Dogs can transmit the
          infection **before showing symptoms**, making it one of the most disruptive illnesses for
          daycare and boarding facilities.
          <br />
          <strong>Source:</strong>{' '}
          <a
            href="https://www.dvm360.com/view/new-vaccine-is-launched-to-protect-dogs-against-kennel-cough?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            dvm360 Veterinary News
          </a>
        </p>

        <p className="mb-6">
          The new injectable option expands the available vaccine types and may help reduce
          outbreaks—especially among dogs who previously could not tolerate intranasal vaccines.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Recommendations for Dog Owners
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Ask your veterinarian whether **Vanguard Recombishield** is appropriate for your dog,
            especially if they attend group care or have had reactions to intranasal/oral vaccines.
          </li>
          <li>
            Complete the **two-dose series** at least **2–4 weeks before** boarding, daycare, or
            training classes.
          </li>
          <li>
            Keep vaccination records organized and accessible in your Petunia profile.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Recommendations for Boarding & Daycare Facilities
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Update your intake forms to include vaccine type:
            <br />
            <em>“Bordetella — Injectable (Vanguard Recombishield)”</em>
          </li>
          <li>
            Require a minimum wait period after dose two before group exposure.
          </li>
          <li>
            Educate clients on the difference between intranasal/oral vs. injectable vaccines.
          </li>
          <li>
            Maintain strong CIRD protocols even with vaccination: sanitation, ventilation, illness
            screening, and isolation procedures.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Limitations & Unknowns</h2>
        <p className="mb-4">
          Because this vaccine is newly released, its long-term duration of immunity is still under
          evaluation. Current manufacturer information emphasizes the need for veterinarian-guided
          booster scheduling.
        </p>

        <p className="mb-6">
          As with all Bordetella vaccines, protection reduces risk but does not eliminate it. A
          layered prevention strategy remains essential.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Related Petunia Guides</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            <Link href="https://www.petuniapets.com/en/blog/dog-titer-testing-explained-where-to-get-it-us-uk">
              <a className="underline" target="_blank" rel="noopener noreferrer">
                Dog Titer Testing Explained (Where to Get It in the US & UK)
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.petuniapets.com/en/blog/kennel-cough-cirdc-global-guide-owners-boarding-daycare-2025">
              <a className="underline" target="_blank" rel="noopener noreferrer">
                Kennel Cough / CIRDc: Global Guide for Owners & Boarding/Daycare (2025)
              </a>
            </Link>
          </li>
        </ul>


        {/* Expanded depth content start */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Operational details that prevent preventable incidents</h2>
          <p className="mb-4">The safest boarding and daycare operations are usually the least dramatic. They rely on predictable intake, clear dog notes, controlled transitions, enforced rest, and immediate documentation when something changes. If a system depends on one staff member remembering every special case, it will fail under pressure.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Intake should be specific:</strong> feeding, medications, triggers, escape risk, recovery needs, and owner communication preferences should be written, not verbal only.</li>
            <li><strong>Group decisions should be reversible:</strong> dogs need the option to move to quieter space when arousal rises, not only after conflict appears.</li>
            <li><strong>Handoffs matter:</strong> the next shift needs the same picture of the dog, not a shorter version built from memory.</li>
            <li><strong>Follow-up closes the loop:</strong> a strong operation tells the owner what happened, what was observed, and what should change next visit.</li>
          </ul>
          <p className="mb-0">Those details are where trust is actually built and where minor issues stop becoming reputation-damaging events.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">A cleaner implementation checklist</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-0">
            <li>Standardize what staff must document before the dog joins the day.</li>
            <li>Make rest, enrichment, and medication instructions visible at the point of care.</li>
            <li>Use one incident format for near-misses and actual events so patterns are easier to spot.</li>
            <li>Review what owners are told after pickup and remove vague phrases that hide useful detail.</li>
          </ol>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Related Reading Inside Petunia</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li><a href="https://www.petuniapets.com/en/blog/kennel-cough-guide-pittsburgh-boarding-daycare-2025" className="underline hover:opacity-80">Kennel Cough (CIRDC) in Pittsburgh: A Practical, Evidence-Informed Guide for Owners and Boarding &amp; Daycare Facilities</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/kennel-cough-cirdc-global-guide-owners-boarding-daycare-2025" className="underline hover:opacity-80">Kennel Cough (CIRDC): The 2025 Global Guide for Owners and Boarding &amp; Daycare Facilities (U.S., Canada, U.K., Ireland, Australia &amp; New Zealand)</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/crocs-safety-dog-daycare" className="underline hover:opacity-80">Are Crocs Safe to Wear at Dog Boarding &amp; Daycare Facilities?</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        <p className="text-xs text-gray-500 mt-8">
          This article is for general informational purposes only. Always consult your veterinarian
          before making decisions about your dog’s vaccination schedule.
        </p>
      </main>
    </>
  );
}
