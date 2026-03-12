'use client';

// SEO weakness notes: overlapping topic coverage with nearby site pages; likely limited backlinks; schema is only baseline BlogPosting
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierHealthProblems() {
  const locale = useLocale();

  const title = 'Boston Terrier Health Problems: Eyes, Breathing, Allergies & Wellness';
  const date = 'November 3, 2025';
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

        {/* Anchor Nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#eyes" className="underline hover:opacity-80">Eye Problems</a></li>
            <li><a href="#breathing" className="underline hover:opacity-80">Breathing Issues</a></li>
            <li><a href="#allergies" className="underline hover:opacity-80">Allergies</a></li>
            <li><a href="#joints" className="underline hover:opacity-80">Joints & Spine</a></li>
            <li><a href="#temperature" className="underline hover:opacity-80">Temperature Sensitivity</a></li>
            <li><a href="#preventive" className="underline hover:opacity-80">Preventive Care</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers are sturdy small dogs, but their eye shape, breathing structure, skin sensitivities, and 
            temperature vulnerability mean owners should focus on prevention. Early detection, routine veterinary care, 
            and awareness of red flags make a dramatic difference in long-term wellness.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Eye issues, allergies, and heat sensitivity are extremely common. Owners should 
            monitor these areas closely throughout the dog&apos;s life.
          </div>
        </section>

        {/* EYE PROBLEMS */}
        <section id="eyes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Eye Problems</h2>
          <p className="mb-3">
            Boston Terriers&apos; large, rounded eyes are beautiful—but they also make the breed more prone to injury, 
            irritation, and chronic conditions. Early evaluation and prompt treatment are key to protecting long-term vision.
          </p>

          <h3 className="font-semibold mb-2">Common Conditions</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Cherry Eye:</strong> Prolapse of the third eyelid gland causing a red bulge in the corner.</li>
            <li><strong>Corneal Ulcers:</strong> Painful scratches that need immediate veterinary treatment.</li>
            <li><strong>Cataracts:</strong> Cloudiness that can lead to impaired vision or blindness.</li>
          </ul>

          <p className="text-sm text-gray-700">
            Full breakdown here:{' '}
            <Link href="/en/blog/boston-terrier-eye-problems" className="underline hover:opacity-80">
              Boston Terrier Eye Problems
            </Link>.
          </p>
        </section>

        {/* BREATHING ISSUES */}
        <section id="breathing" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Brachycephalic Breathing Challenges</h2>
          <p className="mb-3">
            As a brachycephalic (short-muzzled) breed, Boston Terriers may experience restricted airflow during exercise, 
            excitement, or warm weather. Mild snorting is common, but persistent breathing difficulties require veterinary care.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Noisy breathing or snoring at rest</li>
            <li>Fatigue during light exercise</li>
            <li>Difficulty cooling down in heat</li>
            <li>Stress-triggered breathing episodes</li>
          </ul>

          <p className="text-sm text-gray-700">
            Learn about safe activity here:{' '}
            <Link href="/en/blog/boston-terrier-exercise-requirements" className="underline hover:opacity-80">
              Boston Terrier Exercise Requirements
            </Link>.
          </p>
        </section>

        {/* ALLERGIES */}
        <section id="allergies" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Skin & Allergy Tendencies</h2>
          <p className="mb-3">
            Allergies are one of the most widespread health issues in Boston Terriers. Both food and environmental 
            triggers can lead to chronic itching, redness, infections, or digestive issues.
          </p>

          <h3 className="font-semibold mb-2">Main Allergy Categories</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Food Allergies:</strong> Chicken, beef, wheat, soy, and dairy.</li>
            <li><strong>Environmental Allergies:</strong> Pollens, dust mites, mold, grass.</li>
            <li><strong>Skin Sensitivities:</strong> Redness, hotspots, dryness—worse during seasonal shifts.</li>
          </ul>
        </section>

        {/* JOINTS */}
        <section id="joints" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Spinal & Joint Issues</h2>
          <p className="mb-3">
            Although Boston Terriers don’t rank among the highest-risk breeds for orthopedic issues, they can still 
            experience joint and spinal conditions, particularly as they age or gain excess weight.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Patellar luxation (kneecap shifting)</li>
            <li>Hip dysplasia with genetic components</li>
            <li>Arthritis and mobility decline in senior years</li>
            <li>Occasional spinal disc discomfort</li>
          </ul>

          <p className="mt-3">
            Maintaining a healthy weight is crucial for reducing joint stress.
          </p>
        </section>

        {/* TEMPERATURE SENSITIVITY */}
        <section id="temperature" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Heat Intolerance & Cold Sensitivity</h2>
          <p className="mb-3">
            Boston Terriers do not tolerate temperature extremes well. Their short muzzle makes heat regulation difficult, 
            while their thin coat leaves them vulnerable to cold weather.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Heat Intolerance:</strong> Risk of overheating during summer.</li>
            <li><strong>Cold Sensitivity:</strong> Shivering, discomfort, and stiffness in winter.</li>
            <li>Requires exercise adjustments during both heat waves and cold spells.</li>
          </ul>
        </section>

        {/* PREVENTIVE CARE */}
        <section id="preventive" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Preventive Care & Recommended Veterinary Checks</h2>
          <p className="mb-3">
            Preventive care is the best way to ensure Boston Terriers live long, comfortable lives. Regular screenings 
            help catch issues long before they become serious or expensive.
          </p>

          <h3 className="font-semibold mb-2">Recommended Care Schedule</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Annual physical exam</li>
            <li>Yearly eye exam from middle age onward</li>
            <li>Regular dental cleanings</li>
            <li>Allergy monitoring and treatment planning</li>
            <li>Weight checks to prevent joint stress</li>
          </ul>

          <p className="text-sm text-gray-700">
            For full breed context, see{' '}
            <Link href="/en/blog/boston-terrier-breed-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Breed Guide 2025
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        
        {/* Expanded depth content start */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What a strong Boston Terrier monitoring plan looks like</h2>
          <p className="mb-4">Owners make better decisions when they stop waiting for obvious crises and start tracking baseline health. For Boston Terrier, that usually means knowing normal appetite, stool quality, weight trend, exercise recovery, breathing effort, sleep quality, coat condition, and behavior at home. Once you know the baseline, small but meaningful changes stop blending into daily life.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Check the basics monthly:</strong> body condition, weight, gum color, nail length, ear odor, and any new lumps or skin changes.</li>
            <li><strong>Record recovery, not just activity:</strong> how quickly your dog settles after play, stairs, heat, or excitement tells you a lot.</li>
            <li><strong>Track repeat patterns:</strong> intermittent stomach upset, paw licking, coughing, stiffness, or reluctance to jump are more useful than one-off anecdotes.</li>
            <li><strong>Keep preventive care visible:</strong> recheck dates, dental work, parasite prevention, and screening recommendations should live in one easy-to-review place.</li>
          </ul>
          <p className="mb-0">That kind of monitoring is what makes veterinary appointments more productive and helps owners intervene before a mild issue becomes an expensive one.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Questions that sharpen the next veterinary conversation</h2>
          <p className="mb-4">A short list of better questions usually improves the appointment more than bringing in ten vague worries. Ask what matters most for your dog's age, body condition, lifestyle, and family history.</p>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>Which changes in stamina, weight, or behavior would you treat as early warning signs rather than normal variation?</li>
            <li>Are there screening tests, imaging decisions, or referral thresholds that make sense for this breed and age bracket?</li>
            <li>What would make you want photos, videos, or a symptom log before the next visit?</li>
            <li>Which problems are appropriate to monitor at home, and which ones should change my timeline to same-day care?</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Related Reading Inside Petunia</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-coat-care" className="underline hover:opacity-80">Boston Terrier Coat Care: Shedding, Allergies, and Skin Health</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/adult-boston-terrier-care-2025" className="underline hover:opacity-80">Adult Boston Terrier Care (2025): Daily Routine, Weight Maintenance, Joint Health &amp; Preventive Vet Care</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-allergies-2025" className="underline hover:opacity-80">Boston Terrier Allergies (2025): Food, Seasonal, Environmental Triggers, Itching Patterns &amp; Treatment Options</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
<section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary ophthalmology and brachycephalic care literature</li>
            <li>American Kennel Club breed health resources</li>
            <li>Veterinary dermatology and allergy management guidelines</li>
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
