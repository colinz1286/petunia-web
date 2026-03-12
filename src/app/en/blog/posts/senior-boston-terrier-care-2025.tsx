'use client';

// SEO weakness notes: page is still new; overlapping topic coverage with nearby site pages; likely limited backlinks; year-stamped title can weaken evergreen value
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function SeniorBostonTerrierCare2025() {
  const locale = useLocale();

  const title =
    'Senior Boston Terrier Care (2025): Mobility, Cognition, Breathing, Diet & End-of-Life Comfort';
  const date = 'November 27, 2025';
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
            <li><a href="#lifespan" className="underline hover:opacity-80">Lifespan & Senior Age</a></li>
            <li><a href="#mobility" className="underline hover:opacity-80">Mobility & Arthritis</a></li>
            <li><a href="#cognition" className="underline hover:opacity-80">Cognitive Decline</a></li>
            <li><a href="#eyes-breathing" className="underline hover:opacity-80">Eyes & Breathing</a></li>
            <li><a href="#diet" className="underline hover:opacity-80">Diet for Seniors</a></li>
            <li><a href="#exercise" className="underline hover:opacity-80">Safe Exercise</a></li>
            <li><a href="#eol" className="underline hover:opacity-80">End-of-Life Comfort</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers typically reach senior age around 8–10 years. Mobility slows, breathing issues may worsen, 
            and cognitive changes can appear gradually. Senior care focuses on joint support, diet adjustments, gentle 
            exercise, and early detection of age-related conditions. End-of-life planning should focus on comfort, 
            routine, and dignity.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Important:</strong> Senior Boston Terriers thrive with consistency, warmth, and gentle daily habits. 
            Small adjustments greatly improve quality of life.
          </div>
        </section>

        {/* LIFESPAN */}
        <section id="lifespan" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Lifespan Expectations & Senior Age Thresholds</h2>
          <p className="mb-4">
            Boston Terriers typically live 11–15 years, though many exceed this with excellent care. 
            Dogs are generally considered “senior” when their metabolism, joint health, and behavior begin to shift.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>7–8 years:</strong> Early senior stage</li>
            <li><strong>9–11 years:</strong> Noticeable slowing and joint changes</li>
            <li><strong>12+ years:</strong> Advanced senior care needed</li>
          </ul>

          <p className="text-sm text-gray-700">
            For breed structure and health background, see:{' '}
            <Link
              href="/en/blog/boston-terrier-breed-guide-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Breed Guide
            </Link>.
          </p>
        </section>

        {/* MOBILITY */}
        <section id="mobility" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mobility Changes: Arthritis, Stiffness & Joint Support</h2>
          <p className="mb-4">
            Senior Boston Terriers commonly develop arthritis, hip stiffness, and reduced endurance. Many owners 
            notice difficulty jumping, climbing stairs, or rising after naps.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Slower walking pace</li>
            <li>Hesitation before jumping or going upstairs</li>
            <li>Muscle loss in hind legs</li>
            <li>Morning stiffness that improves after warming up</li>
          </ul>

          <h3 className="font-semibold mb-2">Helpful Mobility Support</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Orthopedic beds</li>
            <li>Ramps for furniture or car access</li>
            <li>Joint supplements (glucosamine & omega-3s)</li>
            <li>Low-impact walks instead of high-energy play</li>
          </ul>

          <p className="text-sm text-gray-700">
            If breathing worsens during movement, review:{' '}
            <Link
              href="/en/blog/boston-terrier-breathing-issues-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Breathing Issues
            </Link>.
          </p>
        </section>

        {/* COGNITION */}
        <section id="cognition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cognitive Decline: Signs & Care Strategies</h2>
          <p className="mb-4">
            Cognitive dysfunction (similar to dementia in humans) becomes more common with age. Early signs are subtle, 
            often mistaken for stubbornness or anxiety.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Disorientation or getting “stuck” in corners</li>
            <li>Changes in sleep cycles</li>
            <li>New nighttime pacing or vocalizing</li>
            <li>Decreased interest in toys or play</li>
            <li>Forgetting learned commands</li>
          </ul>

          <h3 className="font-semibold mb-2">Ways to Support Senior Cognition</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Routine and consistency</li>
            <li>Puzzle feeders and scent games</li>
            <li>Omega-3 and brain health supplements</li>
            <li>Gentle training refreshers</li>
          </ul>

          <p className="text-sm text-gray-700">
            If anxiety develops alongside decline, see:{' '}
            <Link
              href="/en/blog/boston-terrier-separation-anxiety-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Separation Anxiety
            </Link>.
          </p>
        </section>

        {/* EYES & BREATHING */}
        <section id="eyes-breathing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Eye & Breathing Concerns That Worsen With Age</h2>
          <p className="mb-4">
            Senior Boston Terriers often experience increased breathing and eye sensitivity due to weakened muscles, 
            decreased tear production, and airway inflammation.
          </p>

          <h3 className="font-semibold mb-2">Common Age-Related Eye Issues</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Dry eye (keratoconjunctivitis sicca)</li>
            <li>Worsening cataracts</li>
            <li>More frequent corneal ulcers</li>
          </ul>

          <p className="text-sm text-gray-700">
            Eye care guidance here:{' '}
            <Link
              href="/en/blog/boston-terrier-eye-problems-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Eye Problems
            </Link>.
          </p>

          <h3 className="font-semibold mb-2 mt-4">Breathing Changes With Age</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>More nighttime snoring</li>
            <li>Increased airway inflammation</li>
            <li>Reduced heat tolerance</li>
            <li>Slower recovery after exercise</li>
          </ul>
        </section>

        {/* DIET */}
        <section id="diet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Diet Adjustments for Senior Boston Terriers</h2>
          <p className="mb-4">
            Senior diets focus on digestion, joint support, weight control, and anti-inflammatory nutrients.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Higher omega-3 content for joints and cognition</li>
            <li>Lower calories for less-active seniors</li>
            <li>Added fiber for digestion</li>
            <li>Softer or moistened kibble for dental comfort</li>
          </ul>

          <p className="text-sm text-gray-700">
            Nutrition details in:{' '}
            <Link
              href="/en/blog/boston-terrier-diet-guide-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Diet Guide
            </Link>.
          </p>
        </section>

        {/* EXERCISE */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safe Exercise Routines for Older Dogs</h2>
          <p className="mb-4">
            Senior Boston Terriers still need movement, but the focus shifts to low-impact, joint-friendly activities.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Shorter, more frequent walks</li>
            <li>Avoid high jumps or rough play</li>
            <li>Indoor play on non-slip surfaces</li>
            <li>Gentle tug or puzzle toys for stimulation</li>
            <li>Swimming (if comfortable and monitored)</li>
          </ul>
        </section>

        {/* END OF LIFE */}
        <section id="eol" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">End-of-Life Comfort Planning (Gentle & Evidence-Based)</h2>
          <p className="mb-4">
            Planning for a senior Boston Terrier’s final years is emotionally difficult, but compassionate preparation 
            ensures comfort and dignity. Focus shifts from prolonging life at all costs to maximizing comfort and reducing stress.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Create warm, quiet resting spaces</li>
            <li>Maintain gentle routines to reduce anxiety</li>
            <li>Use pain management medications when recommended</li>
            <li>Monitor quality of life using veterinary scoring tools</li>
            <li>Seek hospice support when appropriate</li>
          </ul>

          <p className="mb-3">
            Many senior dogs thrive with small changes, loving attention, and predictable routines. 
            Your care becomes their greatest comfort.
          </p>
        </section>

        {/* REFERENCES */}
        
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
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-breathing-issues-2025" className="underline hover:opacity-80">Boston Terrier Breathing Issues (2025): BOAS Warning Signs, Noisy Breathing, Heat Risks &amp; Vet Solutions</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-diet-guide-2025" className="underline hover:opacity-80">Boston Terrier Diet Guide (2025): Nutrition, Feeding Schedules, Allergies &amp; Sensitive Stomach Tips</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-health-problems" className="underline hover:opacity-80">Boston Terrier Health Problems: Eyes, Breathing, Allergies &amp; Wellness</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
<section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary geriatric care guidelines</li>
            <li>Cognitive dysfunction studies</li>
            <li>Arthritis management research</li>
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
