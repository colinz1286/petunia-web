'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierTraining101() {
  const locale = useLocale();

  const title = 'Boston Terrier Training 101: Techniques, Rewards, Structure & Milestones';
  const date = 'November 5, 2025';
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

  const description =
    'A complete 2025 training guide for Boston Terriers, covering temperament-based training, rewards, commands, reinforcement methods, common mistakes, and age-based milestones.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/boston-terrier-training-101`}
        />
      </Head>

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
            <li><a href="#temperament" className="underline hover:opacity-80">Temperament & Training</a></li>
            <li><a href="#rewards" className="underline hover:opacity-80">Rewards</a></li>
            <li><a href="#commands" className="underline hover:opacity-80">Commands</a></li>
            <li><a href="#stubbornness" className="underline hover:opacity-80">Stubbornness</a></li>
            <li><a href="#reinforcement" className="underline hover:opacity-80">Reinforcement Techniques</a></li>
            <li><a href="#mistakes" className="underline hover:opacity-80">Mistakes</a></li>
            <li><a href="#milestones" className="underline hover:opacity-80">Milestones</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers are smart, loving, reward-driven dogs that thrive when training is upbeat, structured, and 
            consistent. Their occasional stubbornness comes from sensitivity or overstimulation—not defiance—making 
            positive reinforcement essential from puppyhood to adulthood.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Boston Terriers train best in short, fun sessions. Pushing too long or raising 
            your voice can halt progress.
          </div>
        </section>

        {/* TEMPERAMENT & TRAINING */}
        <section id="temperament" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">How Temperament Affects Training Success</h2>
          <p className="mb-3">
            Boston Terriers’ mix of affection, intelligence, and emotional sensitivity makes them highly trainable—but 
            only when the approach is positive. They want to please but can quickly disengage if the tone becomes harsh 
            or confusing.
          </p>

          <h3 className="font-semibold mb-2">Temperament Traits Shaping Training</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Affectionate:</strong> Motivated by closeness and praise.</li>
            <li><strong>Intelligent:</strong> Learns quickly when the task is clear.</li>
            <li><strong>Sensitive:</strong> Overly sharp correction can cause shutdown.</li>
            <li><strong>Stubborn:</strong> A sign of boredom, not defiance.</li>
          </ul>

          <p className="text-sm text-gray-700">
            See more temperament insights:{' '}
            <Link href="/en/blog/boston-terrier-temperament" className="underline hover:opacity-80">
              Boston Terrier Temperament
            </Link>.
          </p>
        </section>

        {/* HIGH-VALUE REWARDS */}
        <section id="rewards" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">High-Value Rewards That Work</h2>
          <p className="mb-3">
            Boston Terriers respond exceptionally well to food rewards paired with enthusiastic verbal praise. Their food 
            motivation makes them strong candidates for clicker training and shaping-based methods.
          </p>

          <h3 className="font-semibold mb-2">Best Reward Options</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Soft, pea-sized training treats</li>
            <li>Cooked chicken or turkey pieces</li>
            <li>Cheese crumbles for difficult cues</li>
            <li>Rapid-fire praise during success streaks</li>
            <li>Mini play sessions as bonus rewards</li>
          </ul>
        </section>

        {/* COMMANDS */}
        <section id="commands" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Basic Commands Every Boston Terrier Should Learn</h2>
          <p className="mb-3">
            Teaching foundational commands improves safety, communication, and day-to-day behavior. It also builds trust 
            and helps shape impulse control.
          </p>

          <h3 className="font-semibold mb-2">Essential Commands</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Sit:</strong> A starting point for calm behavior.</li>
            <li><strong>Stay:</strong> Critical for safety and self-control.</li>
            <li><strong>Come:</strong> Must be reliable for off-leash safety.</li>
            <li><strong>Leave It:</strong> Prevents dangerous ingestion.</li>
            <li><strong>Loose-Leash Walking:</strong> Helps manage excitement on walks.</li>
          </ul>

          <p className="text-sm text-gray-700">
            Leash training help:{' '}
            <Link href="/en/blog/leash-training-a-boston-terrier" className="underline hover:opacity-80">
              Leash Training a Boston Terrier
            </Link>.
          </p>
        </section>

        {/* STUBBORNNESS */}
        <section id="stubbornness" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Stubbornness: Why It Happens & How to Fix It</h2>
          <p className="mb-3">
            Stubbornness in Boston Terriers is nearly always a training-structure issue. If a session is too long, 
            too repetitive, or too confusing, they mentally check out.
          </p>

          <h3 className="font-semibold mb-2">How to Structure Training Sessions</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Keep sessions to 3–5 minutes</li>
            <li>Use high-value rewards for early success</li>
            <li>End sessions on a big win</li>
            <li>Increase distractions slowly</li>
          </ul>
        </section>

        {/* REINFORCEMENT */}
        <section id="reinforcement" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Positive Reinforcement Techniques</h2>
          <p className="mb-3">
            Positive reinforcement aligns perfectly with Boston Terriers’ emotional sensitivity. Training should feel 
            like play—never punishment.
          </p>

          <h3 className="font-semibold mb-2">Effective Methods</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Clicker training for precise timing</li>
            <li>Reward-based shaping for new behaviors</li>
            <li>Scatter feeding to reduce reactivity</li>
            <li>Calm praise for calm behavior</li>
          </ul>

          <p className="text-sm text-gray-700">
            More mental-work ideas:{' '}
            <Link href="/en/blog/boston-terrier-enrichment" className="underline hover:opacity-80">
              Boston Terrier Enrichment &amp; Mental Games
            </Link>.
          </p>
        </section>

        {/* MISTAKES */}
        <section id="mistakes" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Training Mistakes to Avoid</h2>
          <p className="mb-3">
            Most setbacks happen because the owner misunderstands the Boston Terrier&apos;s learning style. Avoiding these 
            pitfalls leads to faster, happier progress.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Training sessions that drag on too long</li>
            <li>Inconsistent cues or mixed signals</li>
            <li>Yelling or harsh tones (shuts them down)</li>
            <li>Skipping mental enrichment</li>
            <li>Training when the dog is overstimulated or tired</li>
          </ul>
        </section>

        {/* MILESTONES */}
        <section id="milestones" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What to Expect at Each Age Milestone</h2>
          <p className="mb-3">
            Boston Terriers go through predictable learning phases. Understanding these stages makes training smoother 
            and helps set realistic expectations.
          </p>

          <h3 className="font-semibold mb-2">Age-Based Training Progress</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>8–16 Weeks:</strong> Socialization, crate training, name recognition.</li>
            <li><strong>4–6 Months:</strong> Core commands begin to stick; leash skills develop.</li>
            <li><strong>6–12 Months:</strong> Adolescence; expect temporary regression.</li>
            <li><strong>1–2 Years:</strong> Reliable obedience with consistent reinforcement.</li>
            <li><strong>Seniors:</strong> Gentle mental work keeps the mind sharp.</li>
          </ul>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Veterinary behavior journals</li>
            <li>Positive reinforcement training datasets</li>
            <li>American Kennel Club training guidelines</li>
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
