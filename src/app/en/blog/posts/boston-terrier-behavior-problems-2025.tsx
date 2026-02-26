'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierBehaviorProblems2025() {
  const locale = useLocale();

  const title =
    'Boston Terrier Behavior Problems: Hyperactivity, Barking, Reactivity & Training Challenges (2025 Guide)';
  const date = 'November 7, 2025';
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
            <li><a href="#hyperactivity" className="underline hover:opacity-80">Hyperactivity</a></li>
            <li><a href="#stubbornness" className="underline hover:opacity-80">Stubbornness</a></li>
            <li><a href="#barking" className="underline hover:opacity-80">Barking Patterns</a></li>
            <li><a href="#separation" className="underline hover:opacity-80">Separation Anxiety</a></li>
            <li><a href="#reactivity" className="underline hover:opacity-80">Dog Reactivity</a></li>
            <li><a href="#attention" className="underline hover:opacity-80">Attention Seeking</a></li>
            <li><a href="#red-flags" className="underline hover:opacity-80">Red Flags</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers are naturally energetic, social, and expressive. Zoomies, occasional barking, and some
            stubbornness are normal. But persistent anxiety, nonstop barking, escalating reactivity, or destructive
            behaviors usually indicate the need for training support or veterinary input.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Their intelligence and sensitivity mean they respond best to calm, consistent
            routines — not punishment or harsh corrections.
          </div>
        </section>

        {/* HYPERACTIVITY */}
        <section id="hyperactivity" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Hyperactivity & the Famous Boston Terrier Zoomies</h2>
          <p className="mb-3">
            Boston Terriers often have short bursts of intense energy, especially in the evening or after meals. This is
            normal, especially for puppies and young adults.
          </p>

          <h3 className="font-semibold mb-2">Normal Behaviors</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Zoomies around the house</li>
            <li>Play-bowing and nudging for attention</li>
            <li>Excited spinning when greeting people</li>
          </ul>

          <p className="text-sm text-gray-700">
            Need structured outlets? See our{' '}
            <Link href="/en/blog/boston-terrier-exercise-requirements" className="underline hover:opacity-80">
              Boston Terrier Exercise Requirements
            </Link>.
          </p>
        </section>

        {/* STUBBORNNESS */}
        <section id="stubbornness" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Are Boston Terriers So Stubborn?</h2>
          <p className="mb-3">
            Their stubborn streak isn’t defiance — it’s a combination of intelligence + independence + a desire to do
            things on their terms. They respond best to short, fun, reward-based sessions.
          </p>

          <h3 className="font-semibold mb-2">Signs of Typical Stubbornness</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ignoring known commands when distracted</li>
            <li>Stopping mid-walk to decide their own route</li>
            <li>Selective listening during play</li>
          </ul>

          <p className="text-sm text-gray-700">
            For training basics, read{' '}
            <Link href="/en/blog/boston-terrier-training-101" className="underline hover:opacity-80">
              Boston Terrier Training 101
            </Link>.
          </p>
        </section>

        {/* BARKING */}
        <section id="barking" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Barking Patterns: Excitement, Alerting & Boredom</h2>
          <p className="mb-3">
            Boston Terriers aren’t excessive barkers by nature, but many develop specific barking triggers.
          </p>

          <h3 className="font-semibold mb-2">Common Reasons for Barking</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Excitement:</strong> greeting, anticipation, play</li>
            <li><strong>Alert Barking:</strong> door knocks, unfamiliar noises</li>
            <li><strong>Boredom:</strong> lack of stimulation or long days alone</li>
          </ul>
        </section>

        {/* SEPARATION ANXIETY */}
        <section id="separation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Separation Anxiety (Very Common in This Breed)</h2>
          <p className="mb-3">
            Boston Terriers form deep attachments and thrive on human closeness. Many struggle with alone time,
            especially if owners unintentionally reinforce clinginess.
          </p>

          <h3 className="font-semibold mb-2">Mild, Manageable Anxiety</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Whining when you leave the room</li>
            <li>Following you everywhere</li>
            <li>Restlessness when left alone briefly</li>
          </ul>

          <h3 className="font-semibold mb-2">More Serious Symptoms</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Destructive chewing</li>
            <li>Escape attempts</li>
            <li>Barking or crying for long periods</li>
            <li>Panting, pacing, drooling</li>
          </ul>
        </section>

        {/* REACTIVITY */}
        <section id="reactivity" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Dog Reactivity: Excited, Anxious, or Overstimulated?</h2>
          <p className="mb-3">
            Reactivity in Boston Terriers is often mislabeled as aggression. It typically stems from excitement, lack
            of exposure, or heightened arousal.
          </p>

          <h3 className="font-semibold mb-2">Signs of Reactivity</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pulled-tight leash lunging</li>
            <li>Barking when dogs pass by</li>
            <li>Whining or pacing during dog encounters</li>
            <li>Fixating on unfamiliar dogs</li>
          </ul>
        </section>

        {/* ATTENTION SEEKING */}
        <section id="attention" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Attention-Seeking Behaviors</h2>
          <p className="mb-3">
            Boston Terriers are expressive and people-oriented. When they want something, they often make it obvious.
          </p>

          <h3 className="font-semibold mb-2">Typical Behaviors</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pawing your leg</li>
            <li>Staring intensely at you</li>
            <li>Bringing toys and dropping them at your feet</li>
            <li>Barking for interaction or reassurance</li>
          </ul>
        </section>

        {/* RED FLAGS */}
        <section id="red-flags" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What’s Normal vs. What Needs Intervention?</h2>

          <h3 className="font-semibold mb-2">Normal Behavior</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Short bouts of barking</li>
            <li>Zoomies 1–2 times per day</li>
            <li>Occasional stubbornness</li>
            <li>Mild reactivity that improves with practice</li>
          </ul>

          <h3 className="font-semibold mb-2">Red Flags</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Destruction when left alone</li>
            <li>Biting, snapping, or escalating reactivity</li>
            <li>Severe anxiety symptoms (vomiting, drooling, panic)</li>
            <li>Constant barking with no identifiable trigger</li>
            <li>Sudden behavior changes (possible medical cause)</li>
          </ul>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Breed-specific behavior research, 2024–2025</li>
            <li>Veterinary behaviorist case studies</li>
            <li>American Kennel Club temperament data</li>
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
