'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CommonTrainingMistakesForNewDogOwners() {
  const locale = useLocale();

  const title =
    'Common Training Mistakes for New Dog Owners: Gentle Guidance and How to Avoid Them';
  const date = 'September 10, 2025';
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
    'Many new dog owners unintentionally make training mistakes that affect behavior and bonding. This kind, practical guide explores the most common missteps—like inconsistency, lack of patience, or misunderstanding body language—and offers humane solutions to build trust and lasting skills.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link
          rel="canonical"
          href={`https://www.petuniapets.com/${locale}/blog/common-training-mistakes-for-new-dog-owners`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category pills */}
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

        {/* Local anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#intro" className="underline hover:opacity-80">Introduction</a></li>
            <li><a href="#consistency" className="underline hover:opacity-80">Mistake 1: Inconsistency</a></li>
            <li><a href="#punishment" className="underline hover:opacity-80">Mistake 2: Relying on Punishment</a></li>
            <li><a href="#patience" className="underline hover:opacity-80">Mistake 3: Expecting Instant Results</a></li>
            <li><a href="#socialization" className="underline hover:opacity-80">Mistake 4: Skipping Socialization</a></li>
            <li><a href="#signals" className="underline hover:opacity-80">Mistake 5: Ignoring Body Language</a></li>
            <li><a href="#exercise" className="underline hover:opacity-80">Mistake 6: Underestimating Exercise Needs</a></li>
            <li><a href="#structure" className="underline hover:opacity-80">Mistake 7: Lack of Structure</a></li>
            <li><a href="#training-shortcuts" className="underline hover:opacity-80">Mistake 8: Falling for Shortcuts</a></li>
            <li><a href="#patience-kindness" className="underline hover:opacity-80">The Role of Patience &amp; Kindness</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* INTRO */}
        <section id="intro" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Introduction: Why Training Mistakes Are Normal</h2>
          <p className="mb-3">
            Bringing home a new dog is exciting—and overwhelming. Most first-time owners want the best for their dog, but without
            experience, it is easy to fall into common training pitfalls. The good news is that <strong>mistakes are normal</strong>,
            and with awareness, they can be corrected.
          </p>
          <p>
            This article explores the most frequent training mistakes new dog owners make, why they happen, and how to
            avoid them. Our goal is not to shame, but to provide <strong>gentle, practical guidance</strong> that supports both you and your dog.
          </p>
        </section>

        {/* CONSISTENCY */}
        <section id="consistency" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mistake 1: Inconsistency</h2>
          <p className="mb-3">
            Dogs thrive on consistency. When rules change from day to day—or from person to person—confusion sets in.
            One day the couch is allowed, the next it is forbidden. Sometimes jumping is greeted with laughter, other times
            with scolding. Inconsistency leaves dogs unsure of expectations.
          </p>
          <p>
            The solution is simple but requires discipline: <strong>set clear, consistent rules</strong> and make sure every family
            member follows them. Consistency builds confidence in dogs and speeds up learning.
          </p>
        </section>

        {/* PUNISHMENT */}
        <section id="punishment" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mistake 2: Relying on Punishment</h2>
          <p className="mb-3">
            Many new owners fall into the trap of scolding, yelling, or using harsh corrections when their dog misbehaves.
            While it may stop the behavior temporarily, punishment often creates fear and damages trust. Dogs learn best
            through positive reinforcement: rewarding desired behaviors rather than punishing mistakes.
          </p>
          <p>
            Replace punishment with <strong>redirection and rewards</strong>. For example, if a dog chews shoes, redirect them to
            a chew toy and praise when they use it. Over time, positive reinforcement builds lasting habits and a stronger bond.
          </p>
        </section>

        {/* PATIENCE */}
        <section id="patience" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mistake 3: Expecting Instant Results</h2>
          <p className="mb-3">
            Training takes time. Expecting a puppy to master house training in a week or perfect leash walking in days sets
            everyone up for frustration. Just like children, dogs need repetition, structure, and patience.
          </p>
          <p>
            Progress is rarely linear. Some days will feel like setbacks. The key is to celebrate small wins and stay consistent.
            With time, progress becomes visible.
          </p>
        </section>

        {/* SOCIALIZATION */}
        <section id="socialization" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mistake 4: Skipping Socialization</h2>
          <p className="mb-3">
            One of the most important windows in a dog&apos;s life is the early socialization period (roughly 3 to 16 weeks).
            Missing this window—or failing to continue socialization into adolescence—can lead to fear, reactivity, or aggression later.
          </p>
          <p>
            Safe, positive exposure to different people, dogs, environments, and sounds lays the foundation for a confident dog.
            Even adult rescues benefit from slow, structured socialization. Skipping it is one of the most damaging mistakes.
          </p>
        </section>

        {/* SIGNALS */}
        <section id="signals" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mistake 5: Ignoring Body Language</h2>
          <p className="mb-3">
            Dogs are constantly communicating through body language. Ignoring signals like lip-licking, yawning, stiff posture,
            or whale eye can result in escalated behavior, including bites. Many owners mislabel early stress signals as
            &quot;stubbornness&quot; or &quot;disobedience&quot; when the dog is actually overwhelmed.
          </p>
          <p>
            Learning basic canine body language is a critical skill. Respecting signals helps prevent conflict and builds trust.
          </p>
        </section>

        {/* EXERCISE */}
        <section id="exercise" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mistake 6: Underestimating Exercise Needs</h2>
          <p className="mb-3">
            Many training problems—chewing, barking, restlessness—stem from unmet exercise needs. Dogs require both
            physical and mental stimulation. Underestimating this leads to frustration for both dog and owner.
          </p>
          <p>
            Regular walks, play, enrichment games, and training sessions meet these needs. A tired dog is a well-behaved dog.
          </p>
        </section>

        {/* STRUCTURE */}
        <section id="structure" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mistake 7: Lack of Structure</h2>
          <p className="mb-3">
            Dogs benefit from routines. Without structure, they can become anxious or push boundaries. Inconsistent mealtimes,
            random training sessions, and unpredictable responses all contribute to stress.
          </p>
          <p>
            Establish routines for feeding, potty breaks, play, and training. Predictability makes life easier for both dog and human.
          </p>
        </section>

        {/* SHORTCUTS */}
        <section id="training-shortcuts" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mistake 8: Falling for Shortcuts</h2>
          <p className="mb-3">
            Quick fixes—like shock collars, dominance-based methods, or fad gadgets—promise results but often backfire.
            Training is about building a relationship, not forcing compliance. Shortcuts can suppress behavior temporarily
            while creating long-term problems.
          </p>
          <p>
            Stick with evidence-based, positive reinforcement methods. They may take longer, but they create lasting, humane results.
          </p>
        </section>

        {/* PATIENCE & KINDNESS */}
        <section id="patience-kindness" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">The Role of Patience &amp; Kindness</h2>
          <p className="mb-3">
            Training is not just about teaching dogs—it is about teaching humans to slow down, communicate clearly, and lead with empathy.
            Dogs learn best in an atmosphere of safety, trust, and consistency. Mistakes will happen, but kindness keeps the relationship intact.
          </p>
          <p>
            Remember: <strong>your dog is always doing their best with the information you provide</strong>. Clearer communication, not harsher
            discipline, is usually the answer.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is it bad if I made these mistakes already?</strong><br />
            No. Every owner makes mistakes. The important step is recognizing them and adjusting.
          </p>

          <p className="mb-3">
            <strong>How long does training take?</strong><br />
            Training is lifelong. Basic skills can develop in weeks, but maintaining them is ongoing.
          </p>

          <p className="mb-3">
            <strong>What if my dog is stubborn?</strong><br />
            Often, &quot;stubborn&quot; means the dog is confused, stressed, or under-motivated. Adjust methods with more clarity and rewards.
          </p>

          <p>
            <strong>Do I need a professional trainer?</strong><br />
            If you feel stuck, yes. Look for trainers who use positive reinforcement and have certifications from reputable organizations.
          </p>
        </section>

        {/* SOURCES */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              American Veterinary Society of Animal Behavior (AVSAB). Position statements on training and socialization.{' '}
              <a href="https://avsab.org/resources/position-statements/" target="_blank" rel="noopener noreferrer">
                https://avsab.org/resources/position-statements/
              </a>
            </li>
            <li>
              ASPCA. <em>Dog Training Basics</em>.{' '}
              <a href="https://www.aspca.org/pet-care/dog-care/dog-training" target="_blank" rel="noopener noreferrer">
                https://www.aspca.org/pet-care/dog-care/dog-training
              </a>
            </li>
            <li>
              RSPCA. <em>Training Your Dog</em>.{' '}
              <a href="https://www.rspca.org.uk/adviceandwelfare/pets/dogs/training" target="_blank" rel="noopener noreferrer">
                https://www.rspca.org.uk/adviceandwelfare/pets/dogs/training
              </a>
            </li>
            <li>
              Merck Veterinary Manual. <em>Behavior Problems in Dogs</em>.{' '}
              <a href="https://www.merckvetmanual.com/behavior/behavior-of-dogs-and-cats/behavior-problems-in-dogs" target="_blank" rel="noopener noreferrer">
                https://www.merckvetmanual.com/behavior/behavior-of-dogs-and-cats/behavior-problems-in-dogs
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Educational content only. Always consult your veterinarian or a certified trainer for individualized guidance.
          </p>
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
