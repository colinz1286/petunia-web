'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function AreBostonTerriersProneToSeizures2025() {
  const locale = useLocale();

  const title =
    'Are Boston Terriers Prone to Seizures? (2025): Causes, Symptoms, Emergency Care & Long-Term Management';
  const date = 'November 28, 2025';
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
            <li><a href="#causes" className="underline hover:opacity-80">Common Causes</a></li>
            <li><a href="#symptoms" className="underline hover:opacity-80">Recognizing Symptoms</a></li>
            <li><a href="#during" className="underline hover:opacity-80">What to Do During a Seizure</a></li>
            <li><a href="#diagnostics" className="underline hover:opacity-80">Veterinary Diagnostics</a></li>
            <li><a href="#management" className="underline hover:opacity-80">Long-Term Management</a></li>
            <li><a href="#emergency" className="underline hover:opacity-80">Emergency Intervention</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Yes—Boston Terriers can be prone to seizures, most commonly due to idiopathic epilepsy, toxins, genetic 
            predisposition, or underlying medical conditions. Seizures range from mild twitching to full-body convulsions. 
            Stay calm, keep your dog safe, and call your veterinarian after any seizure lasting longer than a few minutes. 
            Long-term management may include medication, diet adjustments, and identifying triggers.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Critical note:</strong> A single seizure is urgent. Multiple seizures close together are an emergency.
          </div>
        </section>

        {/* CAUSES */}
        <section id="causes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Causes of Seizures in Boston Terriers</h2>
          <p className="mb-4">
            Seizures in Boston Terriers can stem from genetics, environmental triggers, or underlying disease.
          </p>

          <h3 className="font-semibold mb-2">1. Idiopathic Epilepsy</h3>
          <p className="mb-3">
            This is the most common cause, especially in young adult dogs (1–5 years). It is inherited and often 
            diagnosed when other causes are ruled out.
          </p>

          <h3 className="font-semibold mb-2">2. Genetic Predisposition</h3>
          <p className="mb-3">
            Some bloodlines show higher seizure frequency. Reputable breeders track and avoid pairing affected dogs.
          </p>

          <h3 className="font-semibold mb-2">3. Toxins</h3>
          <p className="mb-3">
            Chocolate, xylitol, medications, mold, pesticides, and certain plants can trigger seizures even in 
            previously healthy dogs.
          </p>

          <h3 className="font-semibold mb-2">4. Metabolic Conditions</h3>
          <p className="mb-3">
            Low blood sugar, kidney disease, liver shunts, and electrolyte imbalances can all cause neurological events.
          </p>

          <p className="text-sm text-gray-700">
            Related health vulnerabilities discussed in:{' '}
            <Link
              href="/en/blog/boston-terrier-health-problems"
              className="underline hover:opacity-80"
            >
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* SYMPTOMS */}
        <section id="symptoms" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Recognizing Seizure Symptoms</h2>
          <p className="mb-4">
            Seizures vary in intensity. Some dogs experience mild episodes that look like staring spells, while others 
            show full-body convulsions.
          </p>

          <h3 className="font-semibold mb-2">Common Signs Include:</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Sudden collapse</li>
            <li>Full-body shaking or paddling</li>
            <li>Stiffening of limbs</li>
            <li>Foaming at the mouth</li>
            <li>Involuntary urination or defecation</li>
            <li>Disorientation after the episode</li>
            <li>Temporary blindness or pacing</li>
          </ul>

          <p className="text-sm text-gray-700">
            For similar neurological confusion in seniors, see:{' '}
            <Link
              href="/en/blog/senior-boston-terrier-care-2025"
              className="underline hover:opacity-80"
            >
              Senior Boston Terrier Care
            </Link>.
          </p>
        </section>

        {/* WHAT TO DO */}
        <section id="during" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What to Do During a Seizure</h2>
          <p className="mb-4">
            During a seizure, your job is not to stop it—your job is to keep your dog safe.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Stay calm and speak softly</li>
            <li>Move furniture out of the way</li>
            <li>Place cushions under the dog’s head if safe</li>
            <li>Never put your hands near their mouth</li>
            <li>Dim lights and reduce noise</li>
            <li>Time the seizure (this matters to vets)</li>
          </ul>

          <p className="text-sm text-gray-700">
            Overexcitement can trigger neurological events—learn more in:{' '}
            <Link
              href="/en/blog/how-to-stop-a-boston-terrier-from-barking-2025"
              className="underline hover:opacity-80"
            >
              How to Stop a Boston Terrier from Barking
            </Link>.
          </p>
        </section>

        {/* DIAGNOSTICS */}
        <section id="diagnostics" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Veterinary Diagnostics</h2>
          <p className="mb-4">
            After any seizure, schedule a veterinary evaluation—especially the first one. Diagnosing the cause 
            helps determine treatment.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Bloodwork to assess organ function</li>
            <li>Urinalysis and toxin screening</li>
            <li>Neurological exam</li>
            <li>Advanced imaging (MRI or CT) if needed</li>
            <li>Specialist referral for complex cases</li>
          </ul>
        </section>

        {/* MANAGEMENT */}
        <section id="management" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Long-Term Management Options</h2>
          <p className="mb-4">
            Many Boston Terriers with epilepsy live long, happy lives with proper treatment. Consistency is key.
          </p>

          <h3 className="font-semibold mb-2">Common Treatment Strategies</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Anti-seizure medications (phenobarbital, Keppra, zonisamide)</li>
            <li>Routine blood monitoring</li>
            <li>Low-stress environment</li>
            <li>Consistent diet and feeding schedule</li>
            <li>Avoiding known triggers (heat, stress, toxins)</li>
          </ul>

          <p className="text-sm text-gray-700">
            Diet and inflammation management discussed in:{' '}
            <Link
              href="/en/blog/boston-terrier-diet-guide-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Diet Guide
            </Link>.
          </p>
        </section>

        {/* EMERGENCY */}
        <section id="emergency" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When Seizures Require Emergency Intervention</h2>
          <p className="mb-4">
            Some seizures become life-threatening and require immediate veterinary care.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Seizures lasting longer than 3–5 minutes</li>
            <li>Multiple seizures within 24 hours</li>
            <li>Seizures that start again during recovery</li>
            <li>Collapse accompanied by breathing distress</li>
            <li>Exposure to known toxins</li>
          </ul>

          <p className="text-sm text-gray-700">
            Heat sensitivity can worsen seizure outcomes—compare with:{' '}
            <Link
              href="/en/blog/boston-terrier-heat-sensitivity-2025"
              className="underline hover:opacity-80"
            >
              Boston Terrier Heat Sensitivity
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary neurology & epilepsy research</li>
            <li>Toxin and metabolic disorder case studies</li>
            <li>Breed predisposition data</li>
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
