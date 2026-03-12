'use client';

// SEO weakness notes: page is still new; likely limited backlinks; year-stamped title can weaken evergreen value; schema is only baseline BlogPosting
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierWeightChartAndPuppyGrowth2025() {
  const locale = useLocale();

  const title =
    'Boston Terrier Weight Chart & Puppy Growth (2025): Normal Ranges, Warning Signs & Nutrition Tips';
  const date = 'November 26, 2025';
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
    breed_specific_guides: 'Breed Specific Guides'
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

        {/* Navigation */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#timeline" className="underline hover:opacity-80">Growth Timeline</a></li>
            <li><a href="#ranges" className="underline hover:opacity-80">Weight Ranges</a></li>
            <li><a href="#warning" className="underline hover:opacity-80">Warning Signs</a></li>
            <li><a href="#factors" className="underline hover:opacity-80">Diet & Genetics</a></li>
            <li><a href="#stall" className="underline hover:opacity-80">Growth Stalls</a></li>
            <li><a href="#transition" className="underline hover:opacity-80">Transition to Adult Food</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terrier puppies grow rapidly between 8 weeks and 6 months, then slow down toward adulthood. 
            Healthy adult weight is typically 10–25 lbs depending on genetics. Underweight puppies appear bony, low-energy, 
            or lethargic; overweight puppies show belly rounding or difficulty running. Diet quality, breed lines, and 
            health conditions all influence growth. Growth stalls should be evaluated by a veterinarian. Transition to adult 
            food usually occurs around 10–12 months.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Boston Terriers have varying body types—some are naturally petite and others 
            stockier. Weight must always be judged alongside body condition.
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Growth Timeline: 8 Weeks to 12 Months</h2>
          <p className="mb-4">
            Boston Terrier puppies grow quickly early on, reaching most of their height by 6–7 months. 
            Full weight and muscle development take longer.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>8–12 weeks:</strong> Rapid weight gain; early socialization stage</li>
            <li><strong>3–4 months:</strong> Steady weekly growth; teething begins</li>
            <li><strong>4–6 months:</strong> Major body changes; legs lengthen; appetite increases</li>
            <li><strong>6–9 months:</strong> Growth slows; muscle tone improves</li>
            <li><strong>9–12 months:</strong> Approaching adult size; weight stabilizing</li>
          </ul>

          <p className="text-sm text-gray-700">
            Breed development details available in:{' '}
            <Link
              href="/en/blog/boston-terrier-breed-guide-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Breed Guide
            </Link>.
          </p>
        </section>

        {/* WEIGHT RANGES */}
        <section id="ranges" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Expected Weight Ranges by Age</h2>
          <p className="mb-4">
            These ranges represent common averages. Puppies above or below these numbers may still be healthy depending 
            on genetics and body type.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>8 weeks:</strong> 2.5–4.5 lbs</li>
            <li><strong>12 weeks:</strong> 4–7 lbs</li>
            <li><strong>4 months:</strong> 6–10 lbs</li>
            <li><strong>6 months:</strong> 9–14 lbs</li>
            <li><strong>9 months:</strong> 10–18 lbs</li>
            <li><strong>12 months:</strong> 10–25 lbs (adult range)</li>
          </ul>

          <p className="text-sm text-gray-700">
            For health problems affecting growth, see:{' '}
            <Link href="/en/blog/boston-terrier-health-problems" className="underline hover:opacity-80">
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* WARNING SIGNS */}
        <section id="warning" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Underweight vs Overweight Warning Signs</h2>
          <p className="mb-4">
            Monitoring body condition is more accurate than focusing solely on weight numbers.
          </p>

          <h3 className="font-semibold mb-2">Underweight Signs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Visible ribs or hip bones</li>
            <li>Poor appetite or digestion issues</li>
            <li>Lack of energy or slow growth</li>
            <li>Dull coat or dry skin</li>
          </ul>

          <h3 className="font-semibold mb-2">Overweight Signs</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Rounded belly</li>
            <li>Difficulty running or overheating quickly</li>
            <li>Low stamina during walks</li>
            <li>Fat pads over ribs or spine</li>
          </ul>

          <p className="text-sm text-gray-700">
            Overweight puppies often struggle more in warm weather. Compare with:{' '}
            <Link
              href="/en/blog/boston-terrier-heat-sensitivity-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Heat Sensitivity
            </Link>.
          </p>
        </section>

        {/* FACTORS */}
        <section id="factors" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Diet & Genetics Influence Growth</h2>
          <p className="mb-4">
            Not all Boston Terriers grow at the same rate. Bloodlines, parental size, and nutrition contribute 
            heavily to expected adult weight.
          </p>

          <h3 className="font-semibold mb-2">Genetics</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Puppies from smaller parents tend to stay petite</li>
            <li>Some lines mature slower than others</li>
            <li>Skull and chest development varies by breeder line</li>
          </ul>

          <h3 className="font-semibold mb-2">Diet</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>High-quality protein supports muscle growth</li>
            <li>Frequent meals are needed for puppies under 6 months</li>
            <li>Digestive sensitivity may affect weight gain</li>
          </ul>

          <p className="text-sm text-gray-700">
            Diet and skin sensitivities discussed in:{' '}
            <Link
              href="/en/blog/boston-terrier-allergies-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Allergies
            </Link>.
          </p>

          <p className="text-sm text-gray-700 mt-2">
            Feeding strategies also covered here:{' '}
            <Link
              href="/en/blog/boston-terrier-diet-guide-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Diet Guide
            </Link>.
          </p>
        </section>

        {/* GROWTH STALLS */}
        <section id="stall" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When Growth Stalls (Possible Medical Causes)</h2>
          <p className="mb-4">
            Puppies who stop gaining weight or fail to progress along their growth curve may have an underlying issue.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Parasites (roundworms, hookworms)</li>
            <li>Food intolerance or poor digestion</li>
            <li>Heart or respiratory conditions</li>
            <li>Genetic growth disorders</li>
            <li>Chronic stress or anxiety reducing appetite</li>
          </ul>

          <p className="text-sm text-gray-700">
            Anxiety-related appetite problems covered in:{' '}
            <Link
              href="/en/blog/how-to-stop-a-boston-terrier-from-barking-2025"
              className="underline hover:opacity-80"
            >
              How to Stop a Boston Terrier from Barking
            </Link>.
          </p>
        </section>

        {/* TRANSITION */}
        <section id="transition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Transitioning from Puppy to Adult Food</h2>
          <p className="mb-4">
            Most Boston Terriers switch to adult food between 10 and 12 months. Transition too early, and puppies 
            may miss essential nutrients. Transition too late, and weight gain becomes more likely.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Begin transition around 10 months</li>
            <li>Mix 25% new food with 75% old food for 3–5 days</li>
            <li>Increase ratios gradually over 1–2 weeks</li>
            <li>Monitor stools and appetite during the switch</li>
          </ul>

          <p className="text-sm text-gray-700">
            Nutritional transition tips also appear in:{' '}
            <Link
              href="/en/blog/boston-terrier-diet-guide-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Diet Guide
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        
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
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-breathing-issues-2025" className="underline hover:opacity-80">Boston Terrier Breathing Issues (2025): BOAS Warning Signs, Noisy Breathing, Heat Risks &amp; Vet Solutions</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-heat-sensitivity-2025" className="underline hover:opacity-80">Boston Terrier Heat Sensitivity (2025): Overheating Risks, Early Warning Signs, Safe Temperatures &amp; Cooling Strategies</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-paw-and-nail-care-guide-2025" className="underline hover:opacity-80">Boston Terrier Paw &amp; Nail Care Guide (2025): Trimming Schedule, Paw Pad Health, Seasonal Risks &amp; Allergy Warning Signs</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
<section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Puppy growth curve research</li>
            <li>Veterinary nutrition guidelines</li>
            <li>Breed-development data from AKC and breed clubs</li>
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
