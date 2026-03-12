'use client';

// SEO weakness notes: page is still new; crowded query with low perceived distinctiveness; likely limited backlinks; year-stamped title can weaken evergreen value
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ShouldYourDogUseDaycare2025() {
  const locale = useLocale();

  const title = 'Should Your Dog Use Daycare? How to Tell If Daycare Could Benefit Your Pup';
  const date = 'December 2, 2025';
  const categories = ['owner', 'daycare'] as const;

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

        {/* Local Nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#why-daycare-helps" className="underline hover:opacity-80">Why Daycare Helps</a></li>
            <li><a href="#is-your-dog-a-good-candidate" className="underline hover:opacity-80">Is Your Dog a Good Candidate?</a></li>
            <li><a href="#red-flags" className="underline hover:opacity-80">When It May Not Be a Fit</a></li>
            <li><a href="#how-to-test" className="underline hover:opacity-80">How to Test It</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* Why It Helps */}
        <section id="why-daycare-helps" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Why Daycare Helps Many Dogs</h2>
          <p className="mb-3">
            For the right dog, daycare provides exercise, mental stimulation, social skills, and companionship in a structured environment.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Exercise outlet:</strong> High-energy dogs benefit from structured play and activity throughout the day.</li>
            <li><strong>Socialization:</strong> Regular interaction with other dogs can support emotional regulation and confidence.</li>
            <li><strong>Prevents loneliness:</strong> Dogs left alone for long periods may become bored, stressed, or destructive.</li>
            <li><strong>Mental enrichment:</strong> New environments, toys, play groups, and trained staff provide mental stimulation.</li>
          </ul>
          <p>
            For a deeper comparison of daycare vs. boarding, see our guides: <Link href="https://www.petuniapets.com/en/blog/boarding-vs-daycare-2025" className="underline">2025 Boarding vs Daycare</Link> and <Link href="https://www.petuniapets.com/en/blog/dog-boarding-vs-daycare" className="underline">Dog Boarding vs Daycare</Link>.
          </p>
        </section>

        {/* Good Candidate */}
        <section id="is-your-dog-a-good-candidate" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Is Your Dog a Good Candidate?</h2>
          <p className="mb-3">Consider daycare if your dog exhibits any of the following:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>High or moderate energy levels.</li>
            <li>Friendly with unfamiliar people or dogs.</li>
            <li>Shows curiosity or enthusiasm when meeting other dogs.</li>
            <li>Experiences boredom or destructive behavior when left alone.</li>
            <li>Needs structured social exposure to maintain or build confidence.</li>
          </ul>
        </section>

        {/* Red Flags */}
        <section id="red-flags" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">When Daycare May Not Be a Good Fit</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Dogs who are fearful, anxious, or overwhelmed in loud or highly active environments.</li>
            <li>Older dogs or those with mobility issues who may not tolerate fast-paced group play.</li>
            <li>Dogs with aggression, resource guarding, or fear-based reactivity.</li>
            <li>Dogs who prefer quiet environments or predictable one-on-one interactions.</li>
          </ul>
        </section>

        {/* How to Test */}
        <section id="how-to-test" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Test Whether Daycare Is Right</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Start with a half-day trial:</strong> Observe pickup behavior — calm, relaxed dogs usually had a positive experience.</li>
            <li><strong>Review temperament assessments:</strong> Most facilities conduct behavioral evaluations before group play.</li>
            <li><strong>Watch stress signals:</strong> Excessive panting, drooling, hiding, or trembling may indicate daycare isn’t a match.</li>
            <li><strong>Assess energy level afterward:</strong> A well-matched daycare experience results in pleasant tiredness, not exhaustion or overstimulation.</li>
            <li><strong>Choose facilities with proper grouping:</strong> Dogs should be separated by size, temperament, and energy level.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>

          <p className="mb-4">
            <strong>Can shy or adult dogs still benefit?</strong><br />
            Yes — with structured exposure and slow introductions, adult dogs can learn social comfort over time.
          </p>

          <p className="mb-4">
            <strong>How often should a dog attend daycare?</strong><br />
            Many dogs thrive with 1–3 days per week depending on age, energy, and temperament.
          </p>

          <p>
            <strong>Is daycare a replacement for training?</strong><br />
            No — daycare provides social and physical outlets, but obedience training still requires focused one-on-one guidance.
          </p>
        </section>

        {/* Sources */}
        
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
            <li><a href="https://www.petuniapets.com/en/blog/daycare-dropoff-stress-vs-separation-anxiety-7-day-guide" className="underline hover:opacity-80">Daycare Drop-Off Stress vs Separation Anxiety: How to Tell the Difference in 7 Days</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/crocs-safety-dog-daycare" className="underline hover:opacity-80">Are Crocs Safe to Wear at Dog Boarding &amp; Daycare Facilities?</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/back-to-school-dog-daycare" className="underline hover:opacity-80">Back to School Season in Dog Daycare and Boarding: What I’ve Learned and What You Can Try</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
<section id="sources" className="mb-20">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources & Further Reading</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Dogtopia — How daycare affects dog behavior.</li>
            <li>Rover.com — Dog daycare fit guide.</li>
            <li>PetStop — Pros & cons of dog daycare.</li>
            <li>NCBI (PMCID: PMC9655304) — Effects of social exposure on behavioral health.</li>
          </ul>
        </section>

        <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
