'use client';

// SEO weakness notes: page is still new; overlapping topic coverage with nearby site pages; likely limited backlinks; year-stamped title can weaken evergreen value
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierSeparationAnxiety2025() {
  const locale = useLocale();

  const title =
    'Boston Terrier Separation Anxiety (2025): Causes, Warning Signs, Training Protocols & When to Seek Help';
  const date = 'November 12, 2025';
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
            <li><a href="#why" className="underline hover:opacity-80">Why This Breed Is Prone</a></li>
            <li><a href="#signs" className="underline hover:opacity-80">Warning Signs</a></li>
            <li><a href="#levels" className="underline hover:opacity-80">Anxiety Levels</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training Protocols</a></li>
            <li><a href="#crate" className="underline hover:opacity-80">Crate Training</a></li>
            <li><a href="#enrichment" className="underline hover:opacity-80">Enrichment Before Departures</a></li>
            <li><a href="#vet" className="underline hover:opacity-80">When to Call a Vet</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers are deeply attached to their owners, making them one of the breeds most prone to separation
            anxiety. Early training, enrichment, and consistent routines help prevent escalation. Severe cases require
            professional support from a veterinarian or certified behaviorist.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Separation anxiety is not a “bad behavior” — it is a panic disorder and should
            be treated compassionately.
          </div>
        </section>

        {/* WHY BREED IS PRONE */}
        <section id="why" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Boston Terriers Are Prone to Separation Anxiety</h2>
          <p className="mb-3">
            Boston Terriers were bred as companion dogs — emotionally attuned, people-oriented, and happiest when they
            are close to their families. This strong bond makes them loyal but also more sensitive to alone time.
          </p>

          <h3 className="font-semibold mb-2">Breed Traits That Increase Risk</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>High social needs</li>
            <li>Low tolerance for long periods alone</li>
            <li>Strong attachment during the puppy phase</li>
            <li>Sensitivity to environmental stress</li>
          </ul>

          <p className="text-sm text-gray-700">
            For related temperament tendencies, see:{' '}
            <Link href="/en/blog/why-is-my-boston-terrier-so-hyper-2025" className="underline hover:opacity-80">
              Why Is My Boston Terrier So Hyper?
            </Link>.
          </p>
        </section>

        {/* SIGNS */}
        <section id="signs" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Early Warning Signs</h2>
          <p className="mb-3">
            Catching separation anxiety early prevents escalation into destructive or panic-driven behaviors.
          </p>

          <h3 className="font-semibold mb-2">Common Early Indicators</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Whining when you leave a room</li>
            <li>Following you constantly</li>
            <li>Pawing or scratching at doors</li>
            <li>Restlessness when alone briefly</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Additional behavior context in:{' '}
            <Link href="/en/blog/boston-terrier-behavior-problems-2025" className="underline hover:opacity-80">
              Boston Terrier Behavior Problems
            </Link>.
          </p>
        </section>

        {/* LEVELS */}
        <section id="levels" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Low-Level vs Severe Anxiety Behaviors</h2>
          <p className="mb-3">
            Separation anxiety occurs on a spectrum, and understanding the difference is key to choosing the right
            intervention.
          </p>

          <h3 className="font-semibold mb-2">Low-Level Anxiety</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Mild whining or pacing</li>
            <li>Checking windows or doors</li>
            <li>Temporary restlessness</li>
          </ul>

          <h3 className="font-semibold mb-2">Moderate to Severe Anxiety</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Destructive chewing</li>
            <li>Barking/howling for extended periods</li>
            <li>Panting, drooling, or trembling</li>
            <li>Attempts to escape crates or rooms</li>
            <li>Self-injury when panicked</li>
          </ul>
        </section>

        {/* TRAINING PROTOCOLS */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training Protocols: Gradual Desensitization</h2>
          <p className="mb-3">
            Desensitization builds a puppy’s or adult Boston’s comfort with short, controlled periods alone. It must be
            gradual and consistent.
          </p>

          <h3 className="font-semibold mb-2">How to Begin</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Start with 30–60 seconds of alone time</li>
            <li>Return before they panic</li>
            <li>Increase duration slowly (seconds → minutes → hours)</li>
            <li>Practice at random times, not just departures</li>
            <li>Avoid emotional goodbyes or excited greetings</li>
          </ul>

          <p className="text-sm text-gray-700">
            Training foundations covered in:{' '}
            <Link href="/en/blog/boston-terrier-training-101" className="underline hover:opacity-80">
              Boston Terrier Training 101
            </Link>.
          </p>
        </section>

        {/* CRATE TRAINING */}
        <section id="crate" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Crate Training as a Management Tool</h2>
          <p className="mb-3">
            A crate should feel like a safe den, not a punishment. Proper crate conditioning helps reduce anxiety and
            prevents destructive behaviors when you leave.
          </p>

          <h3 className="font-semibold mb-2">Best Practices for Crate Comfort</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Feed meals in the crate</li>
            <li>Leave safe chew toys inside</li>
            <li>Use short crate sessions during the day</li>
            <li>Never force your Boston inside</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Puppy crate routines explained in:{' '}
            <Link href="/en/blog/boston-terrier-puppy-guide-2025" className="underline hover:opacity-80">
              Boston Terrier Puppy Guide
            </Link>.
          </p>
        </section>

        {/* ENRICHMENT */}
        <section id="enrichment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Enrichment Routines Before Departures</h2>
          <p className="mb-3">
            Fulfilled dogs experience significantly less separation stress. The goal is to satisfy both physical and
            mental needs before alone time.
          </p>

          <h3 className="font-semibold mb-2">Helpful Pre-Departure Activities</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>A brisk 10–20 minute walk</li>
            <li>Puzzle toys or slow-feeder meals</li>
            <li>Scent-based games</li>
            <li>Gentle play that ends calmly</li>
          </ul>

          <p className="text-sm text-gray-700">
            Exercise guidelines available here:{' '}
            <Link href="/en/blog/boston-terrier-exercise-requirements" className="underline hover:opacity-80">
              Boston Terrier Exercise Requirements
            </Link>.
          </p>
        </section>

        {/* WHEN TO INVOLVE A VET */}
        <section id="vet" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When to Involve a Veterinarian or Behaviorist</h2>
          <p className="mb-3">
            Some cases of separation anxiety require medication, behavior modification plans, or both. Early intervention
            prevents progression and reduces stress for both dog and owner.
          </p>

          <h3 className="font-semibold mb-2">Contact a Professional If You See:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Self-harm or extreme panic behaviors</li>
            <li>Destruction that persists despite training</li>
            <li>Vomiting, diarrhea, or compulsive behaviors</li>
            <li>Anxiety that worsens with age</li>
          </ul>

          <p className="text-sm text-gray-700 mt-3">
            Related medical issues described in:{' '}
            <Link href="/en/blog/boston-terrier-health-problems" className="underline hover:opacity-80">
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* REFERENCES */}
        
        {/* Expanded depth content start */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How to make progress stick with Boston Terrier</h2>
          <p className="mb-4">Owners often judge training by whether a dog can perform on a good day. Professionals judge it by whether the behavior holds when arousal, distraction, fatigue, novelty, or frustration show up. Boston Terrier progress improves when sessions are short, predictable, and repeated in multiple environments instead of being saved for long, intense weekend efforts.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Work below threshold:</strong> if your dog is barking, lunging, spinning, or ignoring food, the training setup is already too hard.</li>
            <li><strong>Train one variable at a time:</strong> duration, distance, and distraction should not all rise in the same session.</li>
            <li><strong>Protect recovery:</strong> sleep debt, over-stimulation, and physical discomfort can erase what looks like a motivation problem.</li>
            <li><strong>Measure trends, not moods:</strong> track trigger distance, recovery time, and success rate for the same exercise each week.</li>
          </ul>
          <p className="mb-0">That approach creates a dog that is not just obedient in familiar conditions, but more stable and easier to guide in real life.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">When a home plan needs more structure or more help</h2>
          <p className="mb-4">Home practice is useful, but it is not the right ceiling for every case. Escalate earlier when the pattern includes fear, guarding, repeated failed exposures, or behavior that seems to worsen after punishment, flooding, or high-intensity exercise.</p>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li>Get veterinary input if behavior changes suddenly, appears alongside pain, or comes with appetite, sleep, or mobility changes.</li>
            <li>Use a qualified trainer or veterinary behavior professional when safety, bite risk, or severe panic enter the picture.</li>
            <li>Keep the plan boring and consistent; dramatic corrections usually create more conflict than clarity.</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Related Reading Inside Petunia</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-reactivity-around-dogs-2025" className="underline hover:opacity-80">Boston Terrier Reactivity Around Dogs (2025): Causes, Triggers, Safe Training Protocols &amp; When to Seek Help</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/how-to-stop-a-boston-terrier-from-barking-2025" className="underline hover:opacity-80">How to Stop a Boston Terrier from Barking (2025): Root Causes, Quiet Training, Environmental Fixes &amp; Red Flags</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/boston-terrier-breathing-issues-2025" className="underline hover:opacity-80">Boston Terrier Breathing Issues (2025): BOAS Warning Signs, Noisy Breathing, Heat Risks &amp; Vet Solutions</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
<section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary behavior science publications</li>
            <li>Canine anxiety and panic disorder studies</li>
            <li>Puppy developmental and socialization guidelines</li>
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
