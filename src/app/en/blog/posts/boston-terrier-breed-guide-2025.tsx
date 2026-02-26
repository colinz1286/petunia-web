'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierBreedGuide2025() {
  const locale = useLocale();

  const title = 'Boston Terrier Breed Guide 2025: Temperament, Care, Health & Training';
  const date = 'Noevmber 1, 2025';
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

        {/* Anchor Navigation */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tl-dr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#origin" className="underline hover:opacity-80">Origin</a></li>
            <li><a href="#physical" className="underline hover:opacity-80">Physical Traits</a></li>
            <li><a href="#temperament" className="underline hover:opacity-80">Temperament</a></li>
            <li><a href="#activity" className="underline hover:opacity-80">Activity Needs</a></li>
            <li><a href="#health" className="underline hover:opacity-80">Health Risks</a></li>
            <li><a href="#home" className="underline hover:opacity-80">Ideal Homes</a></li>
            <li><a href="#training" className="underline hover:opacity-80">Training</a></li>
            <li><a href="#lifespan" className="underline hover:opacity-80">Lifespan</a></li>
            <li><a href="#best" className="underline hover:opacity-80">Best Suited For</a></li>
            <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
          </ul>
        </nav>

        {/* TLDR Section */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Boston Terriers are affectionate, alert, compact companion dogs with playful personalities and deep family bonds. 
            They adapt well to apartments, families, and first-time dog owners but need moderate daily exercise, gentle training, 
            and awareness of heat sensitivity, eye care, and breathing limitations.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick note:</strong> Boston Terriers are emotionally sensitive — positive reinforcement and consistency 
            matter more for this breed than most.
          </div>
        </section>

        {/* ORIGIN */}
        <section id="origin" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Origin & History</h2>
          <p className="mb-3">
            The Boston Terrier was developed in the late nineteenth century in the United States and quickly became one 
            of the country’s first purpose-bred companion dogs. Originally created from bulldog and terrier ancestry, the 
            breed transitioned away from working or fighting roles into a polished, friendly family companion famous for 
            its tuxedo-like markings.
          </p>
        </section>

        {/* PHYSICAL TRAITS */}
        <section id="physical" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Physical Traits (Size, Coat & Build)</h2>
          <p className="mb-3">
            Boston Terriers are compact, muscular, and balanced. Their expressive eyes, upright ears, and tidy short coat 
            make them instantly recognizable. Most adults weigh 12–25 pounds and stand 15–17 inches tall, falling into 
            the small-dog category while still being sturdy and athletic.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Short, smooth, low-maintenance coat</li>
            <li>Square-shaped body and proportionate build</li>
            <li>Classic black/white, seal/white, or brindle/white patterns</li>
            <li>Large round eyes and characteristic expressive face</li>
          </ul>
        </section>

        {/* TEMPERAMENT */}
        <section id="temperament" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Temperament</h2>
          <p className="mb-3">
            Boston Terriers are social, lively, intuitive dogs known for their affectionate nature and desire to be at 
            the center of the household. Their intelligence makes them quick learners, while their emotional sensitivity 
            rewards positive, consistent training.
          </p>

          <h3 className="font-semibold mb-2">Typical Personality Traits</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Friendly and affectionate with family members</li>
            <li>Alert watchdogs without excessive aggression</li>
            <li>Playful with a humorous streak</li>
            <li>Responsive but sensitive to tone</li>
          </ul>

          <p className="text-sm text-gray-700">
            Temperament challenges? See{' '}
            <Link href="/en/blog/boston-terrier-behavior-problems" className="underline hover:opacity-80">
              Boston Terrier Behavior Problems
            </Link>.
          </p>
        </section>

        {/* ACTIVITY */}
        <section id="activity" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Activity Needs & Energy Level</h2>
          <p className="mb-3">
            Boston Terriers benefit from moderate daily exercise — usually 30–60 minutes for adults. Puppies need 
            structured, shorter sessions to avoid stress on developing joints. Because of their short muzzle, Bostons 
            should avoid strenuous exercise in heat or humidity.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Daily walks paired with safe play sessions</li>
            <li>Mental enrichment such as puzzles and scent games</li>
            <li>Indoor play on very hot or cold days</li>
          </ul>

          <p className="text-sm text-gray-700">
            For age-specific guidelines, see{' '}
            <Link href="/en/blog/boston-terrier-exercise-requirements" className="underline hover:opacity-80">
              Boston Terrier Exercise Requirements
            </Link>.
          </p>
        </section>

        {/* HEALTH */}
        <section id="health" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Common Health Risks</h2>
          <p className="mb-3">
            While generally healthy, Boston Terriers have breed-specific risks related to their eye shape, airway 
            structure, and skin sensitivities. Early detection and preventive care go a long way.
          </p>

          <h3 className="font-semibold mb-2">Most Common Concerns</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Corneal ulcers, cherry eye, and cataracts</li>
            <li>Brachycephalic breathing limitations</li>
            <li>Food and environmental allergies</li>
            <li>Heat intolerance and winter cold sensitivity</li>
          </ul>

          <p className="text-sm text-gray-700">
            More on breed health:{' '}
            <Link href="/en/blog/boston-terrier-health-problems" className="underline hover:opacity-80">
              Boston Terrier Health Problems
            </Link>.
          </p>
        </section>

        {/* HOME ENVIRONMENT */}
        <section id="home" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Ideal Home Environment</h2>
          <p className="mb-3">
            Boston Terriers thrive in homes where they receive companionship, routine, and mental engagement. They adapt 
            easily to apartments, suburban homes, and busy families as long as they are included in daily life.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Great for families with children</li>
            <li>Excellent for first-time dog owners</li>
            <li>Adaptable to city or suburban environments</li>
            <li>Prefer homes where they are rarely left alone long hours</li>
          </ul>
        </section>

        {/* TRAINING */}
        <section id="training" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Training Overview</h2>
          <p className="mb-3">
            Boston Terriers are smart and eager but can show stubborn streaks. Training should be upbeat, reward-based, 
            and broken into short sessions. Early socialization dramatically improves long-term behavior.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Focus on positive reinforcement</li>
            <li>Start crate and potty training early</li>
            <li>Short sessions: 3–5 minutes is ideal for puppies</li>
            <li>Reward calm, confident behaviors consistently</li>
          </ul>

          <p className="text-sm text-gray-700">
            For a starter curriculum, see{' '}
            <Link href="/en/blog/boston-terrier-training-101" className="underline hover:opacity-80">
              Boston Terrier Training 101
            </Link>.
          </p>
        </section>

        {/* LIFESPAN */}
        <section id="lifespan" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Lifespan & Long-Term Care</h2>
          <p className="mb-3">
            The Boston Terrier typically lives 11–15 years. Long-term wellness includes maintaining a healthy weight, 
            monitoring breathing, protecting eyes, and adjusting activity as joints age.
          </p>
        </section>

        {/* BEST SUITED FOR */}
        <section id="best" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Who This Breed Is Best Suited For</h2>
          <p className="mb-3">
            Boston Terriers are excellent for families, first-time dog owners, active individuals, retirees, and anyone 
            seeking a friendly, expressive companion that thrives on connection and consistent routines.
          </p>
        </section>

        {/* REFERENCES */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>American Kennel Club (AKC) breed resources</li>
            <li>Veterinary ophthalmology and brachycephalic care guidelines</li>
            <li>Peer-reviewed behavioral and breed-specific research</li>
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
