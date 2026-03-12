'use client';

// SEO weakness notes: overlapping topic coverage with nearby site pages; crowded query with low perceived distinctiveness; likely limited backlinks; year-stamped title can weaken evergreen value
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowMuchDoBostonTerriersCost2025() {
  const locale = useLocale();

  const title = 'How Much Do Boston Terriers Cost in 2025? Upfront, Yearly & Lifetime Expenses';
  const date = 'November 6, 2025';
  const categories = ['owner', 'breed_specific_guides'] as const;

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

        {/* Category Pills */}
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

        {/* Anchor Navigation */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#upfront" className="underline hover:opacity-80">Upfront Costs</a></li>
            <li><a href="#medical" className="underline hover:opacity-80">Medical Costs</a></li>
            <li><a href="#grooming" className="underline hover:opacity-80">Grooming</a></li>
            <li><a href="#food" className="underline hover:opacity-80">Food Costs</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training</a></li>
            <li><a href="#insurance" className="underline hover:opacity-80">Insurance</a></li>
            <li><a href="#senior" className="underline hover:opacity-80">Senior Care</a></li>
            <li><a href="#hidden" className="underline hover:opacity-80">Hidden Costs</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            A Boston Terrier typically costs $900–$3,000 from a reputable breeder or $150–$500 from a rescue. Annual 
            expenses include food, routine vet care, preventives, grooming supplies, training, and optional insurance. 
            Over a lifetime, most families spend between $10,000 and $25,000 depending on health, region, and lifestyle.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Breathing issues, allergies, and eye conditions can increase lifetime costs — 
            especially in a dog&apos;s senior years.
          </div>
        </section>

        {/* UPFRONT COSTS */}
        <section id="upfront" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Upfront Breeder Costs vs Rescue Fees</h2>
          <p className="mb-3">
            Boston Terrier prices vary based on breeder reputation, bloodlines, health testing, and geographic demand. 
            Rescue fees are significantly lower and often include vaccinations, spay/neuter, and basic health screening.
          </p>

          <h3 className="font-semibold mb-2">Typical 2025 Pricing</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Reputable Breeder:</strong> $1,500–$3,000</li>
            <li><strong>Champion Lines / Show Quality:</strong> $3,000–$5,000+</li>
            <li><strong>Rescue Adoption:</strong> $150–$500</li>
          </ul>

          <p className="text-sm text-gray-700">
            Before buying, review temperament and health info in the{' '}
            <Link href="/en/blog/boston-terrier-breed-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Breed Guide 2025
            </Link>.
          </p>
        </section>

        {/* MEDICAL COSTS */}
        <section id="medical" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Yearly Medical Expenses</h2>
          <p className="mb-3">
            Though Boston Terriers are generally healthy, their brachycephalic features, eye structure, and allergy 
            tendencies require ongoing care and monitoring.
          </p>

          <h3 className="font-semibold mb-2">Estimated Annual Costs</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Routine Vet Visits:</strong> $200–$400</li>
            <li><strong>Vaccinations:</strong> $100–$200</li>
            <li><strong>Preventives (flea/tick/heartworm):</strong> $200–$350</li>
            <li><strong>Allergy Management:</strong> $100–$600</li>
            <li><strong>Eye Care:</strong> $80–$300</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Learn why these conditions are common:{' '}
            <Link href="/en/blog/boston-terrier-health-problems" className="underline hover:opacity-80">
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* GROOMING */}
        <section id="grooming" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Grooming Costs (Low but Recurring)</h2>
          <p className="mb-3">
            Thanks to their short coat, Boston Terriers have low grooming requirements. Most grooming can be handled 
            at home with basic tools.
          </p>

          <h3 className="font-semibold mb-2">Typical Grooming Expenses</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>At-Home Supplies:</strong> $50–$120/year</li>
            <li><strong>Nail Trims:</strong> $15–$25 every 4–8 weeks</li>
            <li><strong>Occasional Full Groom:</strong> $40–$70</li>
          </ul>

          <p className="text-sm text-gray-700">
            Grooming guidance:{' '}
            <Link href="/en/blog/boston-terrier-grooming-guide" className="underline hover:opacity-80">
              Boston Terrier Grooming Guide
            </Link>.
          </p>
        </section>

        {/* FOOD COSTS */}
        <section id="food" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Food Costs (Size + Sensitivity)</h2>
          <p className="mb-3">
            Although small, Boston Terriers often need higher-quality foods due to allergies or sensitive digestion.
          </p>

          <h3 className="font-semibold mb-2">Annual Food Budget</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Standard Diet:</strong> $250–$400/year</li>
            <li><strong>Hypoallergenic / Sensitive-Stomach Diet:</strong> $400–$700/year</li>
            <li><strong>Treats:</strong> $80–$150/year</li>
          </ul>
        </section>

        {/* TRAINING COSTS */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training & Behavior Support</h2>
          <p className="mb-3">
            Proper training helps reduce stubbornness, anxiety, and reactivity. Many Boston Terriers benefit from early 
            classes followed by occasional tune-ups.
          </p>

          <h3 className="font-semibold mb-2">Training Cost Estimates</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Puppy Group Classes:</strong> $120–$200</li>
            <li><strong>Private Training:</strong> $60–$120/session</li>
            <li><strong>Behaviorist (if needed):</strong> $200–$400/session</li>
          </ul>

          <p className="text-sm text-gray-700">
            Training basics:{' '}
            <Link href="/en/blog/boston-terrier-training-101" className="underline hover:opacity-80">
              Boston Terrier Training 101
            </Link>.
          </p>
        </section>

        {/* INSURANCE */}
        <section id="insurance" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Insurance Estimates</h2>
          <p className="mb-3">
            Insurance can substantially reduce unexpected medical costs, especially for eye, breathing, or orthopedic issues.
          </p>

          <h3 className="font-semibold mb-2">Typical Monthly Premiums</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Accident-Only:</strong> $15–$25</li>
            <li><strong>Accident + Illness:</strong> $30–$60</li>
            <li><strong>Premium Plans:</strong> $60–$90</li>
          </ul>
        </section>

        {/* SENIOR CARE */}
        <section id="senior" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Senior-Year Medical Costs</h2>
          <p className="mb-3">
            Senior Boston Terriers usually require more frequent veterinary care, monitoring for chronic pain, eye 
            changes, dental disease, and breathing changes.
          </p>

          <h3 className="font-semibold mb-2">Typical Senior-Year Costs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Senior Exams:</strong> $150–$300</li>
            <li><strong>Diagnostics:</strong> $200–$600</li>
            <li><strong>Joint/Arthritis Medications:</strong> $200–$500/year</li>
            <li><strong>Dental Cleanings:</strong> $300–$800</li>
          </ul>
        </section>

        {/* HIDDEN COSTS */}
        <section id="hidden" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Hidden or Overlooked Expenses</h2>
          <p className="mb-3">
            Many Boston Terrier owners underestimate small recurring costs that build up over the dog&apos;s lifetime.
          </p>

          <h3 className="font-semibold mb-2">Common Hidden Costs</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Replacement toys (they chew enthusiastically)</li>
            <li>Seasonal coats for winter + cooling gear for summer</li>
            <li>Emergency vet visits</li>
            <li>Training refreshers during adolescence</li>
            <li>Allergy medications or prescription diets</li>
          </ul>
        </section>

        {/* REFERENCES */}
        
        {/* Expanded depth content start */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Evaluate software by failure cost, not just monthly price</h2>
          <p className="mb-4">A platform is cheap only if it reduces operational friction without creating new billing errors, vaccine misses, staff workarounds, and owner confusion. The better comparison is not subscription price alone. It is the cost of preventable mistakes, unpaid invoices, time spent chasing records, and how difficult it is to onboard new staff into the system you chose.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Measure time saved:</strong> booking, check-in, medication notes, customer reminders, and incident follow-up should all be easier to execute.</li>
            <li><strong>Look at error prevention:</strong> vaccine enforcement, waiver version control, and payment reconciliation matter more than nice dashboard language.</li>
            <li><strong>Check the export story:</strong> if you cannot leave cleanly with your client and dog records, your price is not the real price.</li>
            <li><strong>Review support under stress:</strong> response quality during busy periods matters more than sales responsiveness during demos.</li>
          </ul>
          <p className="mb-0">That operating view is what separates a low-cost tool from a low-value one.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Vendor questions that prevent painful migrations later</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-0">
            <li>How are records exported, in what format, and with what limits?</li>
            <li>What core workflows are included at base price versus upsold later?</li>
            <li>How are failed payments, vaccine expirations, and incident notes surfaced to staff?</li>
            <li>What happens when we grow, add locations, or need to change pricing structures?</li>
          </ol>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Related Reading Inside Petunia</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li><a href="https://www.petuniapets.com/en/blog/how-much-do-french-bulldogs-cost" className="underline hover:opacity-80">How Much Do French Bulldogs Cost? Realistic First-Year, Annual &amp; Lifetime Budgets</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/how-much-does-a-cane-corso-cost-to-own" className="underline hover:opacity-80">How Much Does a Cane Corso Cost to Own? Purchase vs Adoption, Food by Life Stage, Healthcare, Insurance Math, Boarding/Daycare, Gear, and Lifetime Total</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/how-much-does-dog-boarding-and-daycare-software-cost-2025" className="underline hover:opacity-80">How Much Does Dog Boarding &amp; Daycare Software Cost in 2025?</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
<section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>American Kennel Club cost and care data</li>
            <li>Veterinary economic trend reports, 2024–2025</li>
            <li>Pet insurance company pricing breakdowns</li>
          </ul>
        </section>

        {/* Back to Blog */}
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
