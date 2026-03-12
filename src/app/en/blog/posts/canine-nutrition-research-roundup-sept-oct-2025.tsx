'use client';

// SEO weakness notes: likely limited backlinks; time-bound topic can look temporary; schema is only baseline BlogPosting
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CanineNutritionResearchRoundupSeptOct2025() {
  const locale = useLocale();

  const title = 'Canine Nutrition Research Roundup: September–October 2025';
  const date = 'October 19, 2025';
  const categories = ['owner', 'vet', 'boarding'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    vet: 'Veterinary Clinics',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
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
            <li><a href="#plant-meat" className="underline hover:opacity-80">Plant- vs. Meat-Based Diets</a></li>
            <li><a href="#environmental-impact" className="underline hover:opacity-80">Environmental Impact Study</a></li>
            <li><a href="#kibble-raw" className="underline hover:opacity-80">Kibble vs. Raw Diets</a></li>
            <li><a href="#apop-survey" className="underline hover:opacity-80">APOP 2025 Survey</a></li>
            <li><a href="#references" className="underline hover:opacity-80">References</a></li>
          </ul>
        </nav>

        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Between September and October 2025, several peer-reviewed studies reshaped the discussion around dog diets. 
            Researchers found that most complete plant-based and meat-based dry foods met major nutrient targets, though 
            some plant-based and therapeutic diets were low in specific amino acids or micronutrients. Environmental analyses 
            suggested plant-based diets have a lower ecological footprint, while Finnish data indicated raw meat-based diets 
            may improve certain metabolic biomarkers compared to high-carbohydrate kibble.  
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Disclaimer:</strong> This article is for informational purposes only and should not replace veterinary advice.
          </div>
        </section>

        <section id="plant-meat" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">PLOS ONE (Sept 3 2025): Nutritional Analysis of UK Dry Foods</h2>
          <p className="mb-3">
            A UK-based team analyzed 31 commercial dry foods (plant-based, meat-based, and veterinary renal) for amino acids, minerals, 
            fatty acids, and vitamins D and B. Most met FEDIAF nutrient profiles, though plant-based recipes contained less iodine 
            and several B-vitamins. Veterinary renal diets intentionally lowered protein but sometimes under-delivered essential 
            amino acids.  
          </p>
          <p className="mb-3">
            <strong>Key takeaway:</strong> Plant-based diets can satisfy canine nutrition when properly fortified; therapeutic 
            formulations require individualized oversight.
          </p>
          <p className="text-sm">
            <a
              href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0328506"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Read the PLOS ONE study
            </a>
          </p>
        </section>

        <section id="environmental-impact" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Frontiers in Sustainable Food Systems (Sept 2025 + Oct Correction): Environmental Assessment</h2>
          <p className="mb-3">
            Companion research from the same group compared greenhouse-gas output, land use, and water footprint of plant- 
            versus meat-based diets. Plant-based formulas had substantially lower emissions and resource use per 1,000 kcal. 
            A minor correction issued in October 2025 refined data tables without changing conclusions.
          </p>
          <p className="mb-3">
            <strong>Key takeaway:</strong> For facilities feeding large groups of dogs, sustainable food sourcing can 
            materially reduce environmental impact.
          </p>
          <p className="text-sm space-x-4">
            <a
              href="https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2025.1633312/full"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Read the study
            </a>
            <a
              href="https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2025.1713231/full"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              October Correction
            </a>
          </p>
        </section>

        <section id="kibble-raw" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Veterinary Journal (Oct 8 2025): Kibble vs. Raw Diet Metabolism</h2>
          <p className="mb-3">
            Finnish researchers at the University of Helsinki monitored Staffordshire Bull Terriers fed either a 
            carbohydrate-rich kibble or a high-fat, raw meat-based diet for roughly four months. Dogs on the raw diet 
            showed lower fasting glucose, triglycerides, and insulin-resistance markers, while kibble diets elevated 
            blood lipids and long-term glucose indicators.
          </p>
          <p className="mb-3">
            <strong>Key takeaway:</strong> Dietary macronutrient ratio—particularly carbohydrate load—significantly influences 
            canine metabolic profiles, though food-handling safety remains critical.
          </p>
          <p className="text-sm space-x-4">
            <a
              href="https://www.helsinki.fi/en/news/dogs/canine-metabolism-responds-better-fat-carbs-research-suggests"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Helsinki University Summary
            </a>
            <a
              href="https://doi.org/10.1016/j.tvjl.2025.106462"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              The Veterinary Journal DOI
            </a>
          </p>
        </section>

        <section id="apop-survey" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">APOP 2025 Survey (Opened Oct 1 2025)</h2>
          <p className="mb-3">
            The Association for Pet Obesity Prevention launched its 2025 national opinion survey on October 1, 
            focusing on feeding practices, calorie awareness, and owner–veterinarian communication about weight. 
            The timing coincides with broader public interest in canine diet research during fall 2025.
          </p>
          <p className="text-sm space-x-4">
            <a
              href="https://www.petobesityprevention.org/2025"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              APOP Survey Page
            </a>
            <a
              href="https://www.petobesityprevention.org/pet-obesity-survey-toolkit-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Survey Toolkit
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Practical Takeaways</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ensure plant-based foods contain fortified iodine and B-vitamins.</li>
            <li>Review amino-acid adequacy in therapeutic renal diets before long-term use.</li>
            <li>In multi-dog operations, consider sustainability scores when selecting bulk feed.</li>
            <li>Monitor glucose and lipid trends when adjusting macronutrient ratios in dogs with metabolic risks.</li>
          </ul>
        </section>

        
        {/* Expanded depth content start */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How professionals evaluate a feeding plan before calling it good or bad</h2>
          <p className="mb-4">The most useful nutrition lens is not hype or tribe loyalty. It is whether the plan is complete, practical, tolerated by the dog in front of you, and monitored closely enough to catch trouble early. Good feeding decisions hold up across body condition, stool quality, appetite, energy, skin, long-term compliance, and risk profile for that dog&rsquo;s age and medical history.</p>
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
            <li><a href="https://www.petuniapets.com/en/blog/dog-nutrition-updates-2025" className="underline hover:opacity-80">2025 Dog Nutrition Updates: How Prescription Weight-Control Diets Are Changing Vet Care</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-diet-guide-2025" className="underline hover:opacity-80">Boston Terrier Diet Guide (2025): Nutrition, Feeding Schedules, Allergies &amp; Sensitive Stomach Tips</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-weight-chart-and-puppy-growth-2025" className="underline hover:opacity-80">Boston Terrier Weight Chart &amp; Puppy Growth (2025): Normal Ranges, Warning Signs &amp; Nutrition Tips</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
<section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Brociek, R. A., Li, D., Broughton, R., &amp; Gardner, D. S. (2025, September 3). 
              <i>Nutritional analysis of commercially available, complete plant- and meat-based dry dog foods in the UK.</i> PLOS ONE, 20(9), e0328506. 
              <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0328506" target="_blank" rel="noopener noreferrer" className="underline">Link</a>
            </li>
            <li>
              Brociek, R. A., &amp; Gardner, D. S. (2025). 
              <i>Environmental impact of feeding plant-based vs. meat-based dry dog foods in the UK.</i> Frontiers in Sustainable Food Systems. 
              <a href="https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2025.1633312/full" target="_blank" rel="noopener noreferrer" className="underline">Link</a>. 
              Correction (Oct 2025): 
              <a href="https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2025.1713231/full" target="_blank" rel="noopener noreferrer" className="underline">Link</a>
            </li>
            <li>
              Holm, S., Baarman, E., Anturaniemi, J., &amp; Hemida, M. (2025, October 8). 
              <i>The effect of a kibble diet versus a raw meat-based diet on energy metabolism biomarkers in dogs.</i> The Veterinary Journal, 314, 106462. 
              <a href="https://doi.org/10.1016/j.tvjl.2025.106462" target="_blank" rel="noopener noreferrer" className="underline">DOI</a>
            </li>
            <li>
              Association for Pet Obesity Prevention. (2025, October 1). 
              <i>2025 Pet Obesity &amp; Nutrition Opinion Survey.</i> 
              <a href="https://www.petobesityprevention.org/2025" target="_blank" rel="noopener noreferrer" className="underline">Link</a>
            </li>
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
