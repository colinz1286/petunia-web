'use client';

// SEO weakness notes: page is still new; likely limited backlinks; year-stamped title can weaken evergreen value; schema is only baseline BlogPosting
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HomemadeDogFoodRisks2025() {
  const locale = useLocale();

  const title = 'Homemade Dog Food: What New Research Reveals About Nutrient Gaps';
  const date = 'December 2, 2025';
  const categories = ['owner', 'health', 'nutrition'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    health: 'Health',
    nutrition: 'Nutrition',
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

        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[cat] ?? cat}
            </span>
          ))}
        </div>

        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#study" className="underline hover:opacity-80">Study Summary</a></li>
            <li><a href="#gaps" className="underline hover:opacity-80">Common Nutrient Gaps</a></li>
            <li><a href="#risks" className="underline hover:opacity-80">Why These Gaps Matter</a></li>
            <li><a href="#how" className="underline hover:opacity-80">How To Prepare Meals Correctly</a></li>
            <li><a href="#care" className="underline hover:opacity-80">Boarding & Daycare Feeding Notes</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
          </ul>
        </nav>

        {/* STUDY SUMMARY */}
        <section id="study" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">New Research: Most Home-Prepared Meals Lack Required Nutrients</h2>
          <p className="mb-4">
            The Dog Aging Project recently evaluated more than 1,700 homemade dog food recipes submitted by owners. Only a small fraction met the essential nutrient requirements for a complete canine diet. These findings were highlighted by Texas A&M University and later summarized by science news outlets such as Phys.org.
          </p>
          <p className="mb-4">
            Researchers assessed recipes using the same nutrient recommendations followed by veterinary nutritionists and commercial pet-food formulators. Many recipes looked wholesome on the surface but were missing vitamins, minerals, and critical macronutrient balances.
          </p>
        </section>

        {/* GAPS */}
        <section id="gaps" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Common Nutrient Gaps in Homemade Meals</h2>
          <p className="mb-4">
            Studies show that home-prepared meals frequently lack important nutrients such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Calcium</li>
            <li>Phosphorus</li>
            <li>Vitamin D</li>
            <li>Zinc</li>
            <li>Essential fatty acids</li>
            <li>Balanced amino acids</li>
          </ul>
          <p>
            Even small deviations in ingredient amounts or missing supplements can significantly change the meal’s nutritional profile.
          </p>
        </section>

        {/* RISKS */}
        <section id="risks" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Why These Deficiencies Matter</h2>
          <p className="mb-4">
            Long-term nutrient shortages can contribute to bone weakness, heart abnormalities, immune dysfunction, growth issues in puppies, reduced energy production, and organ strain. These risks are higher in senior dogs or dogs with chronic conditions.
          </p>
          <p>
            Because home cooking lacks the strict formulation and testing applied to commercial foods, health problems often develop slowly and may go unnoticed without regular veterinary care.
          </p>
        </section>

        {/* HOW TO DO IT RIGHT */}
        <section id="how" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How To Prepare Homemade Meals Correctly</h2>
          <p className="mb-4">If owners choose to prepare meals at home, experts recommend:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Working directly with a board-certified veterinary nutritionist</li>
            <li>Using laboratory-tested or professionally formulated recipes</li>
            <li>Measuring ingredients with a scale, not cups</li>
            <li>Adding veterinarian-approved supplements to meet full requirements</li>
            <li>Scheduling periodic veterinary check-ups with bloodwork</li>
          </ul>
        </section>

        {/* BOARDING & DAYCARE FEEDING NOTES */}
        <section id="care" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">If Your Dog Attends Boarding or Daycare</h2>
          <p className="mb-4">
            Home-prepared meals can be more difficult for boarding and daycare teams to manage. Facilities often prefer clearly labeled commercial foods to ensure consistency, safety, and accurate portioning. Learn more in our full guide on{' '}
            <Link href="https://www.petuniapets.com/en/blog/feeding-dogs-in-daycare-and-boarding" className="underline">
              Feeding Dogs in Daycare and Boarding
            </Link>.
          </p>

          <p>
            For a broader look at nutrition trends and scientific updates, see{' '}
            <Link href="https://www.petuniapets.com/en/blog/dog-nutrition-updates-2025" className="underline">
              Dog Nutrition Updates 2025
            </Link>.
          </p>
        </section>

        {/* SOURCES */}
        
        {/* Expanded depth content start */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How professionals evaluate a feeding plan before calling it good or bad</h2>
          <p className="mb-4">The most useful nutrition lens is not hype or tribe loyalty. It is whether the plan is complete, practical, tolerated by the dog in front of you, and monitored closely enough to catch trouble early. Good feeding decisions hold up across body condition, stool quality, appetite, energy, skin, long-term compliance, and risk profile for that dog's age and medical history.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Start with adequacy:</strong> can the plan reliably meet protein, mineral, fatty acid, and calorie needs?</li>
            <li><strong>Then look at tolerance:</strong> stools, appetite, vomiting, itching, and weight trend are part of the evaluation.</li>
            <li><strong>Do not ignore logistics:</strong> safe storage, household consistency, cost, and who is actually preparing the food all matter.</li>
            <li><strong>Match the plan to the patient:</strong> puppies, seniors, pancreatitis-prone dogs, and medically complex dogs have less margin for experimentation.</li>
          </ul>
          <p className="mb-0">A practical plan that your dog does well on is more valuable than a perfect-sounding one that the household cannot execute safely.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">A transition and monitoring framework that reduces guesswork</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-0">
            <li>Change one major feeding variable at a time so you can interpret the result.</li>
            <li>Track stool, appetite, energy, skin, and weight for at least two weeks after a meaningful change.</li>
            <li>Move faster to veterinary input if vomiting, lethargy, pain, dehydration, or recurrent diarrhea enters the picture.</li>
            <li>Reassess the plan if the dog is thriving only when the household is compensating with constant add-ons or workaround feeding.</li>
          </ol>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Related Reading Inside Petunia</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li><a href="https://www.petuniapets.com/en/blog/fda-raw-pet-food-advisory-july-2025" className="underline hover:opacity-80">FDA Advises: Do Not Feed Certain Darwin’s Raw Dog Food Lots; FDA Warning Letter to Answers Pet Food — A Practical Owner’s Guide to Risks, Symptoms, Cleanup, Reporting &amp; Refunds</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/ollies-law-kennel-safety-2025" className="underline hover:opacity-80">“Ollie’s Law” (2025): What It Is, How It Happened, Where It Applies, and What It Means for Dog Boarding &amp; Daycare — With Global Context and Operator Playbooks</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/airline-pet-travel-2025-italy-in-cabin-large-dogs-what-it-means-us" className="underline hover:opacity-80">Airline Pet Travel Is Shifting (Italy Allows Big Dogs In-Cabin): What U.S. Flyers Should Know Now</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
<section id="sources" className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">Sources</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Phys.org – Coverage of Dog Aging Project findings</li>
            <li>Texas A&M University – Summary of homemade diet research</li>
            <li>Peer-reviewed veterinary nutrition studies on nutrient deficiencies in home-prepared meals</li>
            <li>VCA Veterinary Hospitals – Guidance on homemade diet risks</li>
          </ul>
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
