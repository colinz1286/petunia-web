'use client';

// SEO weakness notes: overlapping topic coverage with another strong site page; likely limited backlinks
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogEarInfectionsCausesSymptomsAndTreatmentOptions() {
  const locale = useLocale();

  const title = 'Dog Ear Infections: Causes, Symptoms, and Treatment Options';
  const date = 'October 6, 2025';
  const categories = ['health'] as const;

  const categoryLabels: Record<string, string> = {
    health: 'Dog Health',
    owner: 'Pet Owners',
    vet: 'Veterinary Clinics',
  };

  return (
    <>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* 🏷️ Category Tags */}
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
          If your dog is shaking their head, scratching at their ears, or has a sudden foul odor, an
          ear infection may be to blame. Ear inflammation—known as <em>otitis</em>—is one of the most
          common reasons dogs visit the veterinarian. Quick recognition and the right care can stop
          discomfort before it becomes chronic or leads to hearing loss. This guide explains the
          causes, signs, and treatment options for dog ear infections, along with prevention tips for
          swimmers and allergy-prone pups.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Understanding Dog Ear Infections
        </h2>
        <p className="mb-4">
          Dog ears are built differently than human ears—they’re longer, more angled, and trap
          moisture easily. That shape makes them prone to trapped debris and microbial growth. Ear
          infections are usually categorized into two types:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Otitis externa:</strong> Infection of the outer ear canal. The most common form
            and often visible on inspection.
          </li>
          <li>
            <strong>Otitis media (or interna):</strong> Involves the middle or inner ear, typically
            resulting from an untreated outer infection. Can cause head tilt or balance loss.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Signs and Symptoms</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Head shaking or constant scratching at one or both ears</li>
          <li>Redness, swelling, or brown/yellow discharge</li>
          <li>Strong or yeasty odor</li>
          <li>Whining or sensitivity when touched</li>
          <li>Tilted head, loss of balance, or walking in circles (inner-ear involvement)</li>
        </ul>
        <p className="mb-6">
          Any combination of these symptoms should prompt a vet visit—especially if they persist more
          than a day or two.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Main Causes</h2>
        <p className="mb-4">
          Most ear infections start with inflammation or trapped moisture, which creates an ideal
          environment for bacteria or yeast. Allergies, parasites, and breed anatomy can all
          contribute.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Yeast overgrowth:</strong> Common in warm, humid climates and floppy-eared breeds
            like Labradors and Cocker Spaniels.
          </li>
          <li>
            <strong>Bacterial infections:</strong> Often secondary to allergies or ear trauma.
          </li>
          <li>
            <strong>Allergies (food or environmental):</strong> Chronic itching from allergens
            inflames ear tissue and changes the canal’s pH balance.
          </li>
          <li>
            <strong>Moisture from swimming or baths:</strong> Creates a “swimmer’s ear” effect that
            feeds yeast and bacteria.
          </li>
          <li>
            <strong>Ear mites or foreign debris:</strong> Less common but can trigger inflammation and
            secondary infection.
          </li>
        </ul>

        <p className="mb-6">
          Allergies are particularly sneaky—dogs with skin or paw irritation often have concurrent
          ear inflammation. Learn more in our related article:{' '}
          <Link
            href="https://www.petuniapets.com/en/blog/allergy-ear-skin-hotspots"
            target="_blank"
            className="underline text-[#2c4a30] hover:opacity-80"
          >
            Allergy, Ear, and Skin Hotspots
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Home Care vs. When to See the Vet
        </h2>
        <p className="mb-4">
          Mild redness or wax buildup can sometimes be managed at home, but full infections require
          professional care. The wrong cleaner or over-the-counter drop can make things worse if the
          eardrum is damaged.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Safe Home Care (for mild buildup)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Use a <strong>vet-approved ear cleaner</strong> (never alcohol or hydrogen peroxide).
          </li>
          <li>
            Gently wipe visible debris using a soft gauze—avoid deep insertion.
          </li>
          <li>
            Keep ears dry after baths; gently towel the outer flap.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">When to See Your Veterinarian</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Persistent head shaking or odor despite cleaning</li>
          <li>Yellow, green, or bloody discharge</li>
          <li>Swelling, crusting, or signs of pain</li>
          <li>History of allergies or chronic skin conditions</li>
        </ul>

        <p className="mb-6">
          Your vet will examine the ear canal with an otoscope and may perform cytology (a microscopic
          swab test) to identify bacteria, yeast, or mites. Proper diagnosis ensures the right
          medication and prevents recurrence.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Preventing Future Ear Infections
        </h2>
        <p className="mb-4">
          Prevention focuses on maintaining a clean, dry ear environment—especially for active or
          water-loving dogs.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Dry ears thoroughly after swimming or bathing using a clean towel.</li>
          <li>
            Apply a <strong>drying ear solution</strong> (vet-approved) once weekly during humid months.
          </li>
          <li>Trim hair around ear openings to improve airflow.</li>
          <li>Manage seasonal allergies with your veterinarian’s guidance.</li>
          <li>
            Schedule regular ear checks during grooming or vet visits to catch buildup early.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Treatment Overview</h2>
        <p className="mb-4">
          Depending on the cause, your veterinarian may prescribe medicated ear drops containing
          antibiotics, antifungals, or anti-inflammatories. For chronic or allergic cases, long-term
          management may include diet changes or allergy medications.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>
            Follow all medication instructions precisely—stopping early can cause recurrence or
            resistance.
          </li>
          <li>
            Avoid water exposure during treatment and keep your dog’s ears dry for at least two weeks.
          </li>
          <li>
            Re-check with your vet after treatment to ensure full resolution and no residual buildup.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Key Takeaways</h2>
        <ul className="list-disc pl-5 space-y-2 mb-10">
          <li>Ear infections are painful but highly treatable when caught early.</li>
          <li>
            Yeast, bacteria, and allergies are the most common causes—moisture prevention is key.
          </li>
          <li>
            Never self-medicate severe ear infections; always get a professional diagnosis.
          </li>
          <li>
            Regular ear checks and drying routines can prevent most recurrences—especially in
            swimming breeds.
          </li>
        </ul>

        {/* Back link */}

        {/* Expanded depth content start */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Home monitoring that makes the next veterinary conversation better</h2>
          <p className="mb-4">Condition-based articles are most useful when they help owners collect better evidence. Instead of relying on memory alone, track appetite, water intake, stool, sleep, exercise tolerance, visible discomfort, and what changed first. That turns a vague story into a usable clinical timeline and makes it easier to decide whether the pattern looks mild, progressive, recurrent, or urgent.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Use the same measures each day:</strong> when symptoms start, how long they last, and what preceded them.</li>
            <li><strong>Record context:</strong> food changes, stress, heat, exercise, grooming, medications, and environment can all matter.</li>
            <li><strong>Take photos or short videos when safe:</strong> visible swelling, gait change, discharge, breathing effort, or episodes are easier to evaluate with proof.</li>
            <li><strong>Compare with baseline:</strong> the key question is not just what looks abnormal, but how far the dog has moved from normal function.</li>
          </ul>
          <p className="mb-0">That level of tracking usually improves both diagnosis and the quality of the advice you get back.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When supportive care stops being enough</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>Escalate faster when symptoms recur, intensify, or start interfering with eating, hydration, mobility, breathing, or normal sleep.</li>
            <li>Move to same-day care when pain, collapse, bleeding, significant weakness, or neurologic change enters the picture.</li>
            <li>Ask for a clearer workup plan if you keep getting temporary symptom control without a convincing explanation for the pattern.</li>
            <li>Do not let a condition stay in the watch-and-wait category indefinitely if the baseline is drifting in the wrong direction.</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Related Reading Inside Petunia</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li><a href="https://www.petuniapets.com/en/blog/hip-dysplasia-in-dogs" className="underline hover:opacity-80">Hip Dysplasia in Dogs: Causes, Early Signs, Diagnosis, Treatment Options, Costs, and Long-Term Management</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/are-boston-terriers-prone-to-seizures-2025" className="underline hover:opacity-80">Are Boston Terriers Prone to Seizures? (2025): Causes, Symptoms, Emergency Care &amp; Long-Term Management</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-allergies-2025" className="underline hover:opacity-80">Boston Terrier Allergies (2025): Food, Seasonal, Environmental Triggers, Itching Patterns &amp; Treatment Options</a></li>
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
          This article provides general health information and is not a substitute for veterinary
          diagnosis or treatment. If your dog shows signs of pain, discharge, or chronic irritation,
          seek veterinary care promptly.
        </p>
      </main>
    </>
  );
}
