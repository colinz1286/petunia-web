// File: src/app/[locale]/blog/posts/cane-corso-temperament-explained.tsx
'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CaneCorsoTemperamentExplained() {
    const locale = useLocale();

    const title =
        'Cane Corso Temperament Explained: Guardian Instincts, Reactivity, Trainability, Socialization, and Real-World Ownership';
    const date = 'December 31, 2025';
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

    const slug = 'cane-corso-temperament-explained';

    const description =
        'A comprehensive, evidence-informed guide to Cane Corso temperament: what guardian instincts look like at home, why neutrality beats friendliness, how adolescence changes behavior, how to prevent reactivity, what training methods work best, realistic expectations for kids and visitors, multi-pet households, and practical routines that keep a powerful dog calm and safe.';

    const canonicalUrl = `https://www.petuniapets.com/${locale}/blog/${slug}`;

    return (
        <>
            <Head>
                <title>{title} – Petunia Blog</title>
                <meta name="description" content={description} />
                <meta name="robots" content="all" />
                <link rel="canonical" href={canonicalUrl} />
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
                        <li>
                            <a href="#tldr" className="underline hover:opacity-80">
                                TL;DR
                            </a>
                        </li>
                        <li>
                            <a href="#what-temperament" className="underline hover:opacity-80">
                                What Temperament Means
                            </a>
                        </li>
                        <li>
                            <a href="#guardian-instincts" className="underline hover:opacity-80">
                                Guardian Instincts in Real Life
                            </a>
                        </li>
                        <li>
                            <a href="#neutrality" className="underline hover:opacity-80">
                                Neutrality vs Friendliness
                            </a>
                        </li>
                        <li>
                            <a href="#adolescence" className="underline hover:opacity-80">
                                Adolescence and Maturity
                            </a>
                        </li>
                        <li>
                            <a href="#reactivity" className="underline hover:opacity-80">
                                Reactivity Prevention
                            </a>
                        </li>
                        <li>
                            <a href="#training" className="underline hover:opacity-80">
                                Training Style That Works
                            </a>
                        </li>
                        <li>
                            <a href="#kids-visitors" className="underline hover:opacity-80">
                                Kids, Guests, and Households
                            </a>
                        </li>
                        <li>
                            <a href="#dogs-animals" className="underline hover:opacity-80">
                                Other Dogs and Animals
                            </a>
                        </li>
                        <li>
                            <a href="#public-life" className="underline hover:opacity-80">
                                Public Life and Handling
                            </a>
                        </li>
                        <li>
                            <a href="#when-not-fit" className="underline hover:opacity-80">
                                When It Is Not a Fit
                            </a>
                        </li>
                        <li>
                            <a href="#first90" className="underline hover:opacity-80">
                                First 90 Days Plan
                            </a>
                        </li>
                        <li>
                            <a href="#checklists" className="underline hover:opacity-80">
                                Checklists
                            </a>
                        </li>
                        <li>
                            <a href="#faq" className="underline hover:opacity-80">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#sources" className="underline hover:opacity-80">
                                Sources (Selected)
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* TL;DR */}
                <section id="tldr" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
                    <p className="mb-4">
                        Cane Corsos are typically <strong>calm, observant, and deeply family-oriented</strong>, with a natural tendency toward{' '}
                        <strong>protective suspicion of unfamiliar people</strong>. In a well-run home, that shows up as quiet awareness, steady presence,
                        and strong attachment to their people. In a chaotic or under-structured home, the same instincts can become door-rushing, body-blocking,
                        reactivity, and conflict over visitors. Because this is a large, powerful breed, the physical reality covered in{' '}
                        <Link
                            href={`/${locale}/blog/how-big-are-cane-corsos`}
                            className="underline hover:opacity-80"
                        >
                            How Big Are Cane Corsos
                        </Link>
                        {' '}is part of temperament management: size changes what “small mistakes” look like in real life.
                    </p>
                    <p className="mb-4">
                        The temperament goal for most Corsos is not a social butterfly. It is{' '}
                        <strong>neutral behavior under control</strong>: calm at home, polite in public, and responsive to the handler. You get that outcome with a
                        combination of thoughtful socialization, reward-based training, predictable routines, and practical management.
                    </p>
                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
                        <strong>Petunia tip:</strong> Create a “Temperament Notes” card for your Corso in Petunia: triggers, distance thresholds, visitor routines, and
                        what helps your dog settle. Shared notes keep your household consistent.
                    </div>
                </section>

                {/* What temperament means */}
                <section id="what-temperament" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">What “Temperament” Means (and Why It Gets Misunderstood)</h2>
                    <p className="mb-3">
                        Temperament is not one trait. It is a pattern that includes how a dog responds to novelty, frustration, motion, sound, pressure,
                        handling, and social contact. With guardian breeds, confusion happens when people interpret reserve as aggression, or interpret calm posture
                        as “easygoing” without recognizing the dog is constantly evaluating. It is also common for people to confuse physical capability with behavior,
                        which is why force-focused myths are addressed separately in{' '}
                        <Link
                            href={`/${locale}/blog/what-is-the-bite-force-of-a-cane-corso`}
                            className="underline hover:opacity-80"
                        >
                            What Is the Bite Force of a Cane Corso
                        </Link>
                        .
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-3">
                        <li>
                            <strong>Confidence:</strong> the dog can observe unfamiliar stimuli without escalating.
                        </li>
                        <li>
                            <strong>Stability:</strong> the dog recovers quickly after excitement or surprise.
                        </li>
                        <li>
                            <strong>Neutrality:</strong> the dog can be near people and dogs without needing to greet, fixate, or control.
                        </li>
                        <li>
                            <strong>Trainability:</strong> the dog learns patterns, follows rules, and responds reliably to cues.
                        </li>
                        <li>
                            <strong>Guarding tendency:</strong> the dog is inclined to protect territory and people, especially at thresholds like doors and fences.
                        </li>
                    </ul>
                    <p>
                        For many owners, the “best” Cane Corso temperament looks like a dog that rests quietly, follows structure, ignores strangers unless invited,
                        and takes direction from the handler without drama.
                    </p>
                </section>

                {/* Guardian instincts */}
                <section id="guardian-instincts" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Guardian Instincts in Real Life: What You Will Actually See</h2>
                    <p className="mb-3">
                        Guardian instincts tend to show up in predictable places: doorways, fences, windows, cars, and narrow hallways where the dog can physically
                        control movement. A Corso is often not “looking for trouble,” but they may feel responsible for managing the environment if the household is
                        inconsistent.
                    </p>
                    <h3 className="text-lg font-semibold mt-2 mb-1">Common healthy guardian behaviors</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Alert bark, then quiet observation once the handler checks.</li>
                        <li>Standing between family and a stranger, but relaxing when told it is fine.</li>
                        <li>Watching from a distance instead of rushing in for attention.</li>
                        <li>Preferring known people and consistent routines over constant novelty.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-2 mb-1">Common problem patterns (usually management-related)</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Door-rushing and visitor crowding.</li>
                        <li>Body-blocking in hallways or near couches.</li>
                        <li>Fence running or barrier frustration.</li>
                        <li>Fixation on delivery drivers, joggers, bikes, or kids playing.</li>
                    </ul>

                    <p>
                        If you want a calm Corso, you must own the “security job.” That means predictable entry routines, clear boundaries, and a dog that has a
                        default behavior (usually “place” or “behind a gate”) when uncertainty rises.
                    </p>
                </section>

                {/* Neutrality vs friendliness */}
                <section id="neutrality" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Neutrality vs Friendliness: The Right Social Goal for Most Corsos</h2>
                    <p className="mb-3">
                        Many owners accidentally create reactivity by rewarding greetings. If the puppy learns that every person is a social event, the dog becomes
                        disappointed, frustrated, or suspicious when greetings do not happen. With a guardian breed, that can escalate.
                    </p>
                    <p className="mb-3">
                        The safer social goal is <strong>calm exposure without obligation</strong>: people and dogs exist nearby, and your dog learns to ignore them, return attention to you, and relax.
                        This is one reason the AVSAB emphasizes early socialization as exposure and positive associations, not forced interactions.
                    </p>
                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
                        <strong>Practical rule:</strong> Let your Corso earn greetings. If the dog can sit, look away, and stay loose, greetings can be optional. If not, you are training neutrality instead.
                    </div>
                </section>

                {/* Adolescence */}
                <section id="adolescence" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Adolescence and Maturity: Why Behavior Changes From 6 to 36 Months</h2>
                    <p className="mb-3">
                        Cane Corsos often mature slowly. Many owners describe a dog that is sweet and easy at four months, then “suddenly serious” at twelve to eighteen
                        months. This is not a personality flip out of nowhere. It is a predictable development arc: the dog becomes physically powerful before
                        judgment and impulse control are fully reliable.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>
                            <strong>6–12 months:</strong> bigger body, big emotions, uneven impulse control.
                        </li>
                        <li>
                            <strong>12–24 months:</strong> guarding tendencies often become more obvious; neutrality must be trained and rehearsed.
                        </li>
                        <li>
                            <strong>24–36 months:</strong> many dogs “settle,” but only if the household is consistent and the dog has stable patterns.
                        </li>
                    </ul>
                    <p>
                        This is also why size planning matters. A dog that is unsure, over-aroused, or under-managed becomes harder to handle as they approach adult mass.
                        If you have not already, review the physical reality of the breed in{' '}
                        <Link href={`/${locale}/blog/how-big-are-cane-corsos`} className="underline hover:opacity-80">
                            How Big Are Cane Corsos
                        </Link>
                        .
                    </p>
                </section>

                {/* Reactivity prevention */}
                <section id="reactivity" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Reactivity Prevention: The Calm-Seconds Approach</h2>
                    <p className="mb-3">
                        Reactivity is not always aggression. It is often an over-threshold emotional response: barking, lunging, stiffening, or fixating when the dog
                        feels unsure or overly excited. With Corsos, prevention is easier than repair.
                    </p>

                    <h3 className="text-lg font-semibold mt-2 mb-1">The simplest model that works</h3>
                    <ol className="list-decimal pl-5 space-y-2 mb-3">
                        <li>
                            Identify triggers (doorbell, guests, joggers, dogs across the street).
                        </li>
                        <li>
                            Find the distance where your dog can stay relaxed.
                        </li>
                        <li>
                            Reward calm seconds and disengagement (look away, soft body, checking back in).
                        </li>
                        <li>
                            End sessions early while success is high.
                        </li>
                        <li>
                            Reduce rehearsals of failure (manage windows, fences, doorways).
                        </li>
                    </ol>

                    <p className="mb-3">
                        Your goal is not to prove your dog can “handle it.” Your goal is to build a dog that does not need to handle it because the pattern is calm and predictable.
                    </p>

                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
                        <strong>Petunia tip:</strong> Track trigger distance and recovery time in Petunia. Improvement often looks like fewer seconds to relax and a smaller distance before tension starts.
                    </div>
                </section>

                {/* Training */}
                <section id="training" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Training Style That Works: Calm, Clear, Reward-Based, and Consistent</h2>
                    <p className="mb-3">
                        Most Corsos respond best to training that is fair and structured: clear rules, consistent routines, and rewards for correct choices.
                        Harshness can create conflict and distrust; permissiveness creates pushy behavior. The sweet spot is calm leadership and repeatable habits.
                    </p>

                    <h3 className="text-lg font-semibold mt-2 mb-1">Skills that matter most</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>
                            <strong>Place / settle:</strong> go to a mat and relax when life gets busy.
                        </li>
                        <li>
                            <strong>Door protocol:</strong> leash on, wait, handler opens, dog stays behind a line or gate.
                        </li>
                        <li>
                            <strong>Loose-leash walking:</strong> not for style points, but for safety and predictability.
                        </li>
                        <li>
                            <strong>Disengagement:</strong> look at the world, then look back to you.
                        </li>
                        <li>
                            <strong>Trades:</strong> prevent resource guarding by making “give” a good deal.
                        </li>
                    </ul>

                    <p className="mb-3">
                        If you want a clear activity plan that supports temperament by lowering arousal, pair this with{' '}
                        <Link href={`/${locale}/blog/are-cane-corsos-an-active-breed`} className="underline hover:opacity-80">
                            Are Cane Corsos an Active Breed
                        </Link>
                        . Exercise is not just fitness for this breed; it is nervous-system management.
                    </p>
                </section>

                {/* Kids and visitors */}
                <section id="kids-visitors" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Kids, Guests, and Households: Where Temperament Meets Reality</h2>
                    <p className="mb-3">
                        The most common Cane Corso household issues are not “random aggression.” They are predictable friction points: kids running, visitors entering,
                        loud social energy, and unclear boundaries. If your household is busy, management is not optional.
                    </p>

                    <h3 className="text-lg font-semibold mt-2 mb-1">A simple visitor system</h3>
                    <ol className="list-decimal pl-5 space-y-2 mb-3">
                        <li>
                            Leash on before the door opens.
                        </li>
                        <li>
                            Dog goes to place or behind a gate.
                        </li>
                        <li>
                            Guests ignore the dog for five minutes.
                        </li>
                        <li>
                            Optional greeting: one person at a time, calm posture, no crowding.
                        </li>
                        <li>
                            Dog returns to place, then relaxes.
                        </li>
                    </ol>

                    <p className="mb-3">
                        If you want a detailed, life-stage household guide (babies through older adults), read{' '}
                        <Link href={`/${locale}/blog/are-cane-corsos-good-family-dogs`} className="underline hover:opacity-80">
                            Are Cane Corsos Good Family Dogs
                        </Link>
                        .
                    </p>
                </section>

                {/* Other dogs and animals */}
                <section id="dogs-animals" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Other Dogs and Animals: Calm Coexistence Is the Goal</h2>
                    <p className="mb-3">
                        Many Corsos live peacefully with other dogs and cats, especially when raised with structure. Challenges most often come from adolescence, high
                        arousal play, resource issues, or same-sex friction in some households.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>
                            Feed separately and store chews when dogs are together.
                        </li>
                        <li>
                            Avoid chaotic dog-park environments; prefer parallel walks and known companions.
                        </li>
                        <li>
                            Use gates and rotation when introducing new pets.
                        </li>
                        <li>
                            Reward calm coexistence, not constant interaction.
                        </li>
                    </ul>
                    <p>
                        If your lifestyle is centered around unstructured dog social scenes, this breed is often a mismatch. Many Corsos thrive when their world is calm,
                        predictable, and well-managed.
                    </p>
                </section>

                {/* Public life */}
                <section id="public-life" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Public Life and Handling: The Standard Is Quiet Competence</h2>
                    <p className="mb-3">
                        The ideal Corso in public is not making friends. They are walking politely, ignoring distractions, and checking in with the handler. Because of the
                        breed’s size, small mistakes carry bigger consequences. Prioritize:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>
                            A sturdy harness and leash setup that fits your dog.
                        </li>
                        <li>
                            Calm approaches and calm departures.
                        </li>
                        <li>
                            Distance management (do not “test” your dog by getting too close).
                        </li>
                        <li>
                            Early intervention if fixation starts (turn, create distance, reward disengagement).
                        </li>
                    </ul>

                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
                        <strong>Note:</strong> Muzzle training can be a proactive life skill for veterinary care, emergencies, and travel. It should be introduced slowly and paired with rewards.
                    </div>
                </section>

                {/* When it is not a fit */}
                <section id="when-not-fit" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">When This Temperament Is Not a Fit (and That Is Okay)</h2>
                    <p className="mb-3">
                        The Cane Corso temperament is not “bad” when it does not match a household. It is simply built for a different environment. You may want to pause
                        or choose another breed if:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>
                            Your home has frequent drop-in visitors and you dislike giving instructions to guests.
                        </li>
                        <li>
                            You cannot reliably control doors, fences, and kid energy.
                        </li>
                        <li>
                            You want a dog that greets everyone and plays with unknown dogs often.
                        </li>
                        <li>
                            You do not have time for daily training and structured routines.
                        </li>
                    </ul>
                    <p>
                        A stable Corso home is not “strict.” It is predictable. Predictability is the kindness this temperament needs.
                    </p>
                </section>

                {/* First 90 days */}
                <section id="first90" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">First 90 Days: Build Temperament Through Routine</h2>

                    <h3 className="text-lg font-semibold mt-2 mb-1">Days 1–7: Reduce uncertainty</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>
                            Create a gate or barrier plan: entryway, kitchen, and resting zone.
                        </li>
                        <li>
                            Begin place training with short sessions and real rewards.
                        </li>
                        <li>
                            No chaotic greetings. Reward calm observation at a distance.
                        </li>
                        <li>
                            Start a daily calm walk routine at predictable times.
                        </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-2 mb-1">Weeks 2–6: Train neutrality</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>
                            Practice “look at that” and disengagement near low-level triggers.
                        </li>
                        <li>
                            Rehearse a visitor script with one calm helper.
                        </li>
                        <li>
                            Add two short enrichment sessions per day and finish with mat settle.
                        </li>
                        <li>
                            Reward loose-leash walking and quiet check-ins.
                        </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-2 mb-1">Weeks 7–12: Proof and protect</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            Slowly reduce distance to distractions only if calm is consistent.
                        </li>
                        <li>
                            Keep management in place for parties, kid gatherings, and busy days.
                        </li>
                        <li>
                            Add muzzle training as a life skill if desired.
                        </li>
                        <li>
                            Continue tracking triggers and progress in Petunia.
                        </li>
                    </ul>

                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
                        <strong>Petunia tip:</strong> Turn your visitor script and threshold distances into shared Petunia notes so every adult in the home follows the same rules.
                    </div>
                </section>

                {/* Checklists */}
                <section id="checklists" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Checklists and Templates</h2>

                    <h3 className="text-lg font-semibold mt-2 mb-1">Weekly temperament audit</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>
                            Did we rehearse door protocol at least twice this week?
                        </li>
                        <li>
                            Did we reward disengagement around triggers?
                        </li>
                        <li>
                            Did the dog have quiet recovery time daily?
                        </li>
                        <li>
                            Did we avoid rehearsing fence running and window guarding?
                        </li>
                        <li>
                            Did we keep greetings calm and optional?
                        </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-2 mb-1">Visitor script (print-friendly)</h3>
                    <ol className="list-decimal pl-5 space-y-2 mb-3">
                        <li>Leash on. Dog to place or behind a gate.</li>
                        <li>Guests enter and ignore the dog for five minutes.</li>
                        <li>Optional greeting on cue, one person at a time.</li>
                        <li>Dog returns to place and relaxes.</li>
                    </ol>

                    <h3 className="text-lg font-semibold mt-2 mb-1">Trigger log template</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Trigger: _______</li>
                        <li>Distance for calm: _______</li>
                        <li>Body language: _______</li>
                        <li>Recovery time: _______</li>
                        <li>What helped: _______</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section id="faq" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

                    <p className="mb-3">
                        <strong>Are Cane Corsos aggressive by nature?</strong>
                        <br />
                        Typically, they are reserved and protective rather than socially outgoing. The risk comes when guarding instincts and arousal are unmanaged, or
                        when a dog is placed in a household that cannot provide structure.
                    </p>

                    <p className="mb-3">
                        <strong>Should my Corso greet everyone to be “well socialized”?</strong>
                        <br />
                        No. For many guardian breeds, the healthiest social goal is calm neutrality. Socialization means safe, positive exposure without pressure to interact.
                    </p>

                    <p className="mb-3">
                        <strong>When do Corsos “calm down”?</strong>
                        <br />
                        Many mature slowly and feel more predictable between two and three years, but only if consistent routines and training are in place during adolescence.
                    </p>

                    <p className="mb-3">
                        <strong>What is the most important household rule?</strong>
                        <br />
                        Door and visitor protocol. If you can keep the dog calm at thresholds, you prevent the most common conflict scenarios.
                    </p>

                    <p className="text-xs text-gray-600">
                        Educational content only. Always consult your veterinarian and a qualified trainer or behavior professional for individualized guidance.
                    </p>
                </section>

                {/* Sources */}
                <section id="sources" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                        <li>
                            American Kennel Club (AKC). Cane Corso breed overview and care basics.
                            <a href="https://www.akc.org/dog-breeds/cane-corso/" target="_blank" rel="noopener noreferrer">
                                {' '}
                                AKC profile
                            </a>
                        </li>
                        <li>
                            Fédération Cynologique Internationale (FCI). Cane Corso Italiano standard (FCI No. 343).
                            <a href="https://www.fci.be/en/nomenclature/CANE-CORSO-ITALIANO-343.html" target="_blank" rel="noopener noreferrer">
                                {' '}
                                FCI standard
                            </a>
                        </li>
                        <li>
                            American Veterinary Society of Animal Behavior (AVSAB). Position statements, including puppy socialization guidance.
                            <a href="https://avsab.org/resources/position-statements/" target="_blank" rel="noopener noreferrer">
                                {' '}
                                AVSAB statements
                            </a>
                        </li>
                        <li>
                            International Association of Animal Behavior Consultants (IAABC). Best practices and professional standards.
                            <a href="https://iaabc.org/" target="_blank" rel="noopener noreferrer">
                                {' '}
                                IAABC
                            </a>
                        </li>
                        <li>
                            American Animal Hospital Association (AAHA). Canine life stage guidelines (preventive care frameworks).
                            <a
                                href="https://www.aaha.org/education/guidelines/canine-life-stage-guidelines/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {' '}
                                AAHA guideline hub
                            </a>
                        </li>
                        <li>
                            WSAVA. Global guideline hubs (general health frameworks that support behavior through wellness).
                            <a href="https://wsava.org/global-guidelines/" target="_blank" rel="noopener noreferrer">
                                {' '}
                                WSAVA guidelines
                            </a>
                        </li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-4">
                        Sources are provided for general education. Local regulations, housing rules, and insurance policies vary by region; verify requirements in your area.
                    </p>
                </section>

                {/* Related Cane Corso Articles */}
                <div className="mt-16 border-t border-[#d9cfc2] pt-8">
                    <h2 className="text-xl font-semibold mb-4 text-[#2c4a30]">More Cane Corso Guides You May Like</h2>

                    <ul className="list-disc pl-6 space-y-2 text-[#2c4a30]">
                        <li>
                            <Link
                                href={`/${locale}/blog/are-cane-corsos-good-family-dogs`}
                                className="underline hover:opacity-80"
                            >
                                Are Cane Corsos Good Family Dogs?
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/blog/are-cane-corsos-an-active-breed`}
                                className="underline hover:opacity-80"
                            >
                                Are Cane Corsos an Active Breed?
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/blog/do-cane-corsos-have-health-issues`}
                                className="underline hover:opacity-80"
                            >
                                Do Cane Corsos Have Health Issues?
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/blog/how-big-are-cane-corsos`}
                                className="underline hover:opacity-80"
                            >
                                How Big Are Cane Corsos?
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/blog/how-much-does-a-cane-corso-cost-to-own`}
                                className="underline hover:opacity-80"
                            >
                                How Much Does a Cane Corso Cost to Own?
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/blog/what-is-the-bite-force-of-a-cane-corso`}
                                className="underline hover:opacity-80"
                            >
                                What Is the Bite Force of a Cane Corso?
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link href={`/${locale}/blog`} className="underline text-[#2c4a30] font-medium hover:opacity-80">
                    ← Back to Blog
                </Link>
            </main>
        </>
    );
}
