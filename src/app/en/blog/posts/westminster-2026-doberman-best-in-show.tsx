'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Westminster2026DobermanArticle() {
    const locale = useLocale();

    const title =
        'Westminster 2026: Why a Doberman Winning Best in Show Matters Beyond the Show Ring';
    const date = 'February 8, 2026';
    const categories = ['owner', 'breed_specific_guides', 'breeder', 'rescue'] as const;

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
        'A deep, owner-first look at why a Doberman Pinscher winning Best in Show at Westminster 2026 matters far beyond the show ring, including health, temperament myths, ethical breeding, and the real-world impact on families and rescues.';

    return (
        <>
            <Head>
                <title>{title} – Petunia Blog</title>
                <meta name="description" content={description} />
                <meta name="robots" content="all" />
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

                {/* Anchor nav */}
                <nav className="mb-8 text-sm">
                    <ul className="flex flex-wrap gap-3">
                        <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
                        <li><a href="#why-this-win-matters" className="underline hover:opacity-80">Why This Win Matters</a></li>
                        <li><a href="#what-judges-reward" className="underline hover:opacity-80">What Judges Reward</a></li>
                        <li><a href="#families-vs-show-ring" className="underline hover:opacity-80">Families vs Show Ring</a></li>
                        <li><a href="#temperament-myths" className="underline hover:opacity-80">Temperament Myths</a></li>
                        <li><a href="#health-and-breeding" className="underline hover:opacity-80">Health &amp; Breeding</a></li>
                        <li><a href="#popularity-and-rescues" className="underline hover:opacity-80">Popularity &amp; Rescues</a></li>
                        <li><a href="#choosing-a-breeder" className="underline hover:opacity-80">Choosing a Breeder</a></li>
                        <li><a href="#bigger-picture" className="underline hover:opacity-80">The Bigger Picture</a></li>
                        <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
                    </ul>
                </nav>

                {/* TLDR */}
                <section id="tldr" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">TL;DR</h2>

                    <p className="mb-4">
                        A Doberman Pinscher winning Best in Show at the 2026 Westminster Kennel Club Dog Show is more than
                        a moment of prestige. It reshapes public perception of the breed, influences demand, and has
                        real downstream effects on breeding practices, rescue intake, and owner expectations. The traits
                        rewarded in the show ring &mdash; balance, sound movement, emotional stability, and functional
                        structure &mdash; are not about intimidation or appearance, but about preserving a capable,
                        healthy working dog.
                    </p>

                    <p className="mb-4">
                        When attention is paired with education, these wins can spotlight ethical breeding, responsible
                        ownership, and the importance of long-term health transparency in a breed facing serious medical
                        challenges such as dilated cardiomyopathy. When misunderstood or sensationalized, the same
                        attention can fuel impulse buying, irresponsible breeding, and delayed surrender to shelters
                        and breed-specific rescues.
                    </p>

                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
                        <strong>Editorial note:</strong> This article is educational and experience-informed. It is not
                        veterinary, legal, or breeding advice. Prospective owners should consult qualified veterinarians,
                        reputable breeders, or established rescue organizations before making decisions that affect a
                        dog&rsquo;s long-term welfare.
                    </div>
                </section>

                {/* WHY THIS WIN MATTERS */}
                <section id="why-this-win-matters" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Why This Westminster Win Matters</h2>
                    <p className="mb-4">
                        The Westminster Kennel Club Dog Show is one of the most visible and culturally influential
                        dog events in the world. A Best in Show win can change the trajectory of a breed overnight.
                        Search trends spike. Breeders see inquiry surges. Social media fills with admiration and,
                        unfortunately, misinformation.
                    </p>
                    <p className="mb-4">
                        Dobermans, in particular, occupy a complicated place in the public imagination. They are
                        admired for intelligence and loyalty, feared due to outdated stereotypes, and often
                        misunderstood by first-time owners. A Westminster win does not just celebrate one dog; it
                        reframes a narrative that has existed for decades.
                    </p>
                    <p>
                        The question is not whether Dobermans deserve recognition. It is whether the attention
                        that follows is handled with education, responsibility, and respect for the breed&rsquo;s
                        real needs.
                    </p>
                </section>

                {/* WHAT JUDGES REWARD */}
                <section id="what-judges-reward" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">What Dog Show Judges Actually Reward</h2>

                    <p className="mb-4">
                        Contrary to popular belief, conformation judges are not selecting dogs based on appearance alone,
                        nor are they rewarding intimidation, flashiness, or exaggerated traits. Breed standards exist
                        to preserve a dog&rsquo;s original purpose, physical soundness, and long-term functionality.
                        For Dobermans, judging is rooted in evaluating a <strong>medium-sized, powerful working dog</strong>
                        designed for endurance, stability, and close partnership with humans.
                    </p>

                    <p className="mb-4">
                        One of the most critical elements judges assess is <strong>overall balance</strong>. This refers
                        to proportional relationships between height, length, angulation, and muscle development.
                        A Doberman that is too heavy, too fine-boned, overly tall, or excessively compact is penalized,
                        even if visually striking. Balance matters because disproportionate structure places stress on
                        joints, reduces efficiency of movement, and increases injury risk over time.
                    </p>

                    <p className="mb-4">
                        <strong>Movement efficiency</strong> is another cornerstone of judging that many spectators do
                        not fully understand. Judges watch dogs gait to evaluate reach, drive, and coordination. The
                        Doberman standard favors smooth, ground-covering movement that conserves energy rather than
                        flashy or exaggerated motion. Dogs that move with wasted effort, restricted stride, or uneven
                        tracking are marked down, as inefficient movement often correlates with orthopedic strain and
                        reduced working longevity.
                    </p>

                    <p className="mb-4">
                        Judges also pay close attention to <strong>structural integrity</strong>, including shoulder
                        placement, topline stability, rear angulation, and foot structure. These elements determine
                        whether a dog can perform sustained physical work without breakdown. Over-angulation, weak
                        toplines, or poor feet may look dramatic in still photos but are penalized because they
                        compromise durability and health.
                    </p>

                    <p className="mb-4">
                        Temperament is evaluated continuously throughout judging, not in a single moment. A correct
                        Doberman should be alert, confident, and composed, showing interest in its surroundings without
                        fear or unwarranted reactivity. Judges are trained to identify signs of instability such as
                        excessive shyness, sharpness, or stress behaviors. Dogs that display fearfulness or inappropriate
                        aggression can be excused, regardless of physical quality.
                    </p>

                    <p className="mb-4">
                        Importantly, judges are <strong>not</strong> rewarding a dog for being threatening or aggressive.
                        The breed standard explicitly calls for a dog that is loyal and watchful, yet trustworthy and
                        controllable. This distinction is often misunderstood by the public and contributes to harmful
                        stereotypes. In the show ring, steadiness and self-control are valued far more than intensity.
                    </p>

                    <p className="mb-4">
                        Judges also assess subtle indicators of health and conditioning, including muscle tone, coat
                        quality, and overall vitality. A dog may meet the written standard but still fall short if it
                        lacks physical fitness, conditioning, or mental presence. These details reflect not only the
                        dog&rsquo;s genetics but also the care, management, and ethical priorities of the breeding
                        program behind it.
                    </p>

                    <p>
                        While the show ring is not the same as a household, daycare environment, or family setting, the
                        traits rewarded at Westminster are not arbitrary. Balance, sound movement, structural stability,
                        and emotional steadiness are qualities that directly support healthier, more adaptable companion
                        dogs when paired with responsible ownership and appropriate training.
                    </p>
                </section>

                {/* FAMILIES VS SHOW RING */}
                <section id="families-vs-show-ring" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">What Families Need vs What the Show Ring Shows</h2>
                    <p className="mb-4">
                        Families often misinterpret show success as a shortcut to the perfect pet. In reality,
                        even the most well-bred Doberman requires structure, exercise, and engagement. These dogs
                        are intelligent, sensitive, and deeply bonded to their people.
                    </p>
                    <p className="mb-4">
                        Where mismatches occur is not in temperament, but in lifestyle. Dobermans are not low-effort
                        dogs. They thrive with consistency, clear communication, and meaningful daily interaction.
                        A beautiful show dog placed into a disengaged or chaotic environment will struggle just as
                        much as any other dog.
                    </p>
                    <p>
                        The Westminster spotlight should prompt families to ask better questions, not rush into
                        ownership decisions based on appearance or prestige.
                    </p>
                </section>

                {/* TEMPERAMENT MYTHS */}
                <section id="temperament-myths" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Debunking Doberman Temperament Myths</h2>

                    <p className="mb-4">
                        The &ldquo;aggressive Doberman&rdquo; stereotype is largely a cultural artifact, rooted in
                        mid-20th-century film portrayals, sensational media coverage, and periods of irresponsible
                        breeding that emphasized intimidation over stability. Modern Doberman breeding programs,
                        guided by updated breed standards and behavioral research, actively work to reverse this
                        narrative. Well-bred Dobermans today are widely described by trainers and veterinarians as
                        <strong> people-oriented, emotionally sensitive, and highly bonded to their families</strong>.
                    </p>

                    <p className="mb-4">
                        Breed standards reinforce this shift. The American Kennel Club describes the Doberman Pinscher
                        temperament as confident, alert, loyal, and steady, explicitly discouraging fearfulness or
                        sharpness. Dogs displaying unwarranted reactivity or instability are penalized in conformation
                        and excluded from responsible breeding programs.
                        {' '}
                        <a
                            href="https://www.akc.org/dog-breeds/doberman-pinscher/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-[#2c4a30] font-medium hover:opacity-80"
                        >
                            AKC Doberman breed overview
                        </a>.
                    </p>

                    <p className="mb-4">
                        Scientific research consistently shows that <strong>behavioral outcomes are not determined by
                            breed alone</strong>. Large-scale studies examining canine aggression have found that
                        environment, early socialization, owner handling, and training methods are stronger predictors
                        of behavior than breed labels. A frequently cited review in the journal <em>Applied Animal
                            Behaviour Science</em> concluded that breed explains only a small portion of variance in
                        aggressive behavior, while owner practices and social context play a much larger role.
                        {' '}
                        <a
                            href="https://www.sciencedirect.com/science/article/pii/S016815911300292X"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-[#2c4a30] font-medium hover:opacity-80"
                        >
                            Review of breed and aggression research
                        </a>.
                    </p>

                    <p className="mb-4">
                        Ethical breeders account for this science by selecting for temperament traits such as
                        resilience, sociability, and recovery from stress. Puppies are typically exposed to controlled
                        stimuli, handling, and novel environments during early developmental windows, helping build
                        confidence rather than fear responses. Dogs that demonstrate chronic anxiety, fearfulness, or
                        inappropriate reactivity are removed from breeding consideration, regardless of appearance or
                        show success.
                    </p>

                    <p className="mb-4">
                        Owners play an equally critical role after placement. Dobermans are highly attuned to human
                        emotion and structure; inconsistent handling, lack of enrichment, or punitive training methods
                        can create anxiety-driven behaviors that are often misinterpreted as aggression. Conversely,
                        dogs raised with clear expectations, positive reinforcement, and regular mental and physical
                        engagement tend to display the stable, affectionate temperament the breed is known for among
                        experienced owners.
                    </p>

                    <p>
                        A Westminster win reinforces what behavior professionals already understand: instability is not
                        a breed feature. When fear-based narratives persist, they discourage responsible ownership,
                        increase housing and insurance discrimination, and ultimately harm dogs that would otherwise
                        thrive in appropriate environments. Education, not sensationalism, is the path forward.
                    </p>
                </section>

                {/* HEALTH AND BREEDING */}
                <section id="health-and-breeding" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Health, Longevity, and Ethical Breeding</h2>

                    <p className="mb-4">
                        Doberman Pinschers face a set of well-documented health challenges that responsible breeding
                        programs must actively manage. The most significant of these is dilated cardiomyopathy (DCM),
                        a heart disease that disproportionately affects the breed and remains the leading cause of
                        premature death. Studies estimate that <strong>over 50 percent of Dobermans may develop DCM
                            during their lifetime</strong>, often with few or no early warning signs. A show win does not
                        negate these risks, and ethical breeders do not pretend otherwise.
                    </p>

                    <p className="mb-4">
                        In addition to DCM, Dobermans are at increased risk for von Willebrand disease (a clotting
                        disorder), hypothyroidism, cervical vertebral instability (wobbler syndrome), and orthopedic
                        issues such as hip dysplasia. Breed clubs and veterinary researchers have long emphasized that
                        no single test can guarantee a healthy dog; instead, risk reduction comes from layered
                        screening, careful pedigree selection, and honest long-term data collection.
                        {' '}
                        <a
                            href="https://dpca.org/breed/health/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-[#2c4a30] font-medium hover:opacity-80"
                        >
                            Doberman Pinscher Club of America health overview
                        </a>.
                    </p>

                    <p className="mb-4">
                        Responsible breeding programs typically incorporate <strong>routine cardiac screening</strong>
                        such as echocardiograms and Holter monitoring, repeated over time rather than performed once.
                        Genetic testing for known conditions, while valuable, is treated as a tool rather than a
                        substitute for clinical evaluation. Veterinary cardiologists consistently stress that DCM
                        cannot be responsibly addressed through DNA testing alone.
                        {' '}
                        <a
                            href="https://www.akcchf.org/canine-health/top-health-concerns/dilated-cardiomyopathy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-[#2c4a30] font-medium hover:opacity-80"
                        >
                            AKC Canine Health Foundation on DCM
                        </a>.
                    </p>

                    <p className="mb-4">
                        Ethical breeders also track outcomes beyond puppy placement. Longevity, causes of death,
                        incidence of late-onset disease, and quality of life in older dogs are critical metrics that
                        inform future breeding decisions. This long-term accountability is one reason reputable
                        programs produce fewer litters and maintain waiting lists rather than scaling up in response
                        to short-term demand.
                    </p>

                    <p className="mb-4">
                        Importantly, health-focused breeding often requires difficult choices. Dogs that are beautiful,
                        successful in the show ring, or popular within the breed community may still be removed from
                        breeding programs if health data warrants it. This restraint is a defining feature of ethical
                        practice and stands in contrast to volume-driven or trend-based breeding models.
                    </p>

                    <p>
                        Increased visibility following a major Westminster win should elevate conversations about
                        health transparency rather than suppress them. When public attention is paired with honest
                        discussion of risk, testing limitations, and ongoing research needs, it creates an opportunity
                        to support the breed&rsquo;s long-term future instead of repeating cycles that compromise it.
                    </p>
                </section>

                {/* POPULARITY AND RESCUES */}
                <section id="popularity-and-rescues" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Popularity Spikes and the Rescue Fallout</h2>

                    <p className="mb-4">
                        Major dog show wins, viral media moments, and celebrity endorsements have repeatedly been shown
                        to influence breed demand. Following high-visibility events like Best in Show at Westminster,
                        breeds often experience sharp increases in online searches, breeder inquiries, and unplanned
                        purchases. The American Kennel Club has acknowledged that televised dog shows and media exposure
                        directly correlate with short-term spikes in breed popularity, sometimes lasting multiple years.
                        See AKC&rsquo;s discussion on breed popularity dynamics:{' '}
                        <a
                            href="https://www.akc.org/expert-advice/dog-breeds/most-popular-dog-breeds/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.akc.org/expert-advice/dog-breeds/most-popular-dog-breeds/
                        </a>.
                    </p>

                    <p className="mb-4">
                        The problem is not interest itself, but how that interest is met. When demand rises faster than
                        ethical breeding capacity, backyard breeders and high-volume sellers often fill the gap. These
                        dogs are more likely to be sold without adequate health testing, temperament screening, or owner
                        education. According to the ASPCA, dogs acquired through impulse purchases or informal sellers
                        are significantly more likely to be relinquished to shelters within the first two years of life.
                        The ASPCA estimates that approximately <strong>23 percent of dogs entering shelters are
                            surrendered due to owner lifestyle or expectation mismatches</strong>, not behavior problems:
                        {' '}
                        <a
                            href="https://www.aspca.org/helping-people-pets/shelter-intake-and-surrender"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.aspca.org/helping-people-pets/shelter-intake-and-surrender
                        </a>.
                    </p>

                    <p className="mb-4">
                        Breed-specific rescues frequently report delayed fallout from popularity surges, often appearing
                        <strong>12 to 36 months</strong> after a spike in demand. This lag reflects the reality that many
                        owners attempt to make situations work before reaching a breaking point. Doberman rescue groups
                        have consistently noted increased intakes following periods of heightened media attention,
                        especially involving young adult dogs between one and three years of age. These dogs are often
                        healthy and well-socialized, but surrendered due to unmet exercise, training, or time
                        commitments rather than aggression or instability.
                    </p>

                    <p className="mb-4">
                        National shelter data supports this pattern across breeds. Research published in the peer-reviewed
                        journal <em>Animals</em> found that dogs acquired primarily for appearance or status reasons were
                        significantly more likely to be relinquished than dogs chosen for compatibility with an owner&rsquo;s
                        lifestyle. The study concluded that mismatched expectations are one of the strongest predictors of
                        surrender, regardless of breed.{' '}
                        <a
                            href="https://www.mdpi.com/2076-2615/10/11/2102"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-[#2c4a30] font-medium hover:opacity-80"
                        >
                            Read the full study
                        </a>.
                    </p>

                    <p className="mb-4">
                        Importantly, dogs entering rescue after popularity spikes are rarely &ldquo;problem dogs.&rdquo;
                        They are often intelligent, energetic, and sensitive animals whose needs exceeded what their
                        households realistically could provide. In breeds like Dobermans, which require structured
                        exercise, mental engagement, and consistent leadership, the gap between expectation and reality
                        can widen quickly when ownership decisions are rushed.
                    </p>

                    <p>
                        Responsible celebration of a Westminster win means pairing admiration with education. Media
                        coverage, breeders, and enthusiasts all play a role by amplifying breed-specific rescue
                        organizations, promoting realistic ownership expectations, and reinforcing that ethical
                        breeding operates on waiting lists, not impulse availability. Visibility becomes a net positive
                        only when it is matched with stewardship.
                    </p>
                </section>

                {/* CHOOSING A BREEDER */}
                <section id="choosing-a-breeder" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">How to Choose a Doberman Breeder Responsibly</h2>

                    <p className="mb-4">
                        Choosing a Doberman breeder is not about finding the fastest or cheapest option. It is about
                        evaluating long-term health, temperament, and ethical responsibility. Reputable breeders view
                        themselves as lifelong stewards of the dogs they produce, not sellers completing a transaction.
                    </p>

                    <p className="mb-4">
                        A well-run breeding program is intentionally limited in scale. Ethical breeders expect to be
                        questioned, welcome transparency, and are just as selective about buyers as buyers are about
                        them. Declining a placement is not gatekeeping; it is a sign that the breeder prioritizes the
                        dog&rsquo;s welfare over demand.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-3">Best-Practice Checklist: What to Look For</h3>

                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>
                            <strong>Documented health testing:</strong> Both parents should have verifiable cardiac
                            screening (including echocardiograms or Holter monitoring), genetic testing for known Doberman
                            conditions, and orthopedic evaluations where appropriate. Results should be shared openly,
                            not summarized verbally.
                        </li>

                        <li>
                            <strong>Transparent pedigree information:</strong> Breeders should be able to discuss the
                            health history, longevity, and causes of death within their lines, not just titles or show
                            wins.
                        </li>

                        <li>
                            <strong>Limited litters and waitlists:</strong> Ethical breeders do not have puppies available
                            year-round. A waitlist, planned breeding schedule, and limited number of litters per year are
                            signs of responsible scale.
                        </li>

                        <li>
                            <strong>Early socialization practices:</strong> Puppies should be raised in a home or structured
                            environment with exposure to people, surfaces, sounds, and basic handling before placement.
                        </li>

                        <li>
                            <strong>Written contracts:</strong> Expect a detailed contract that includes health guarantees,
                            return-to-breeder clauses, and spay/neuter or breeding terms. A requirement that the dog be
                            returned to the breeder if rehoming becomes necessary is a major positive indicator.
                        </li>

                        <li>
                            <strong>Buyer screening:</strong> Reputable breeders ask about your lifestyle, work schedule,
                            experience with working breeds, and expectations. This process may feel intensive, but it
                            protects both the dog and the buyer.
                        </li>

                        <li>
                            <strong>Lifetime support:</strong> Ethical breeders remain a resource for training, health
                            questions, and behavioral guidance throughout the dog&rsquo;s life.
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-3">Common Red Flags to Avoid</h3>

                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Immediate puppy availability with no screening or waitlist.</li>
                        <li>Reluctance or refusal to provide health testing documentation.</li>
                        <li>Focus on color, size, or &ldquo;rare&rdquo; traits over health and temperament.</li>
                        <li>Pressure tactics, deposits demanded quickly, or discounts for fast decisions.</li>
                        <li>No written contract or no requirement to take the dog back if rehoming is needed.</li>
                    </ul>

                    <p className="mb-4">
                        Prospective owners should be cautious of equating show success with ethical breeding. While many
                        reputable breeders participate in conformation events, titles alone do not guarantee responsible
                        practices. Health transparency, placement philosophy, and long-term accountability matter far
                        more than ribbons.
                    </p>

                    <p>
                        Adoption through Doberman-specific rescues is another meaningful and ethical path, particularly
                        for experienced owners. Many rescue Dobermans are surrendered due to lifestyle mismatches rather
                        than behavioral instability, and reputable rescues provide honest assessments and support during
                        the transition process.
                    </p>
                </section>

                {/* BIGGER PICTURE */}
                <section id="bigger-picture" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">Admiring the Win Without Creating the Problem</h2>
                    <p className="mb-4">
                        A Doberman winning Best in Show at Westminster is worth celebrating. It reflects decades of
                        careful breeding, training, and dedication. But admiration without education can quickly
                        turn into harm.
                    </p>
                    <p className="mb-4">
                        The responsibility falls on media outlets, breeders, professionals, and owners alike to
                        use moments like this to elevate understanding rather than fuel impulse decisions.
                    </p>
                    <p>
                        Loving a breed means protecting its future, not just its image.
                    </p>
                </section>

                {/* SOURCES */}
                <section id="sources" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Further Reading</h2>

                    <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700">
                        <li>
                            <strong>People.com</strong> — Coverage of the 2026 Westminster Kennel Club Dog Show Best in Show
                            winner:{' '}
                            <a
                                href="https://people.com/westminster-dog-show-2026-tk-the-tk-wins-best-in-show-at-the-150th-westminster-11898866"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#2c4a30] font-medium hover:opacity-80"
                            >
                                Read the article
                            </a>
                        </li>

                        <li>
                            <strong>American Kennel Club (AKC)</strong> — Doberman Pinscher breed standard, temperament
                            description, and functional purpose:{' '}
                            <a
                                href="https://www.akc.org/dog-breeds/doberman-pinscher/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#2c4a30] font-medium hover:opacity-80"
                            >
                                AKC Doberman breed overview
                            </a>
                        </li>

                        <li>
                            <strong>Doberman Pinscher Club of America (DPCA)</strong> — Breed health concerns, longevity
                            tracking, and breeder education materials:{' '}
                            <a
                                href="https://dpca.org/breed/health/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#2c4a30] font-medium hover:opacity-80"
                            >
                                DPCA health resources
                            </a>
                        </li>

                        <li>
                            <strong>AKC Canine Health Foundation</strong> — Research and clinical guidance on dilated
                            cardiomyopathy (DCM) in Dobermans and other breeds:{' '}
                            <a
                                href="https://www.akcchf.org/canine-health/top-health-concerns/dilated-cardiomyopathy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#2c4a30] font-medium hover:opacity-80"
                            >
                                DCM research overview
                            </a>
                        </li>

                        <li>
                            <strong>UC Davis Veterinary Genetics Laboratory</strong> — Canine genetic testing methodologies
                            and limitations relevant to inherited disease screening:{' '}
                            <a
                                href="https://vgl.ucdavis.edu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#2c4a30] font-medium hover:opacity-80"
                            >
                                UC Davis VGL
                            </a>
                        </li>

                        <li>
                            <strong>Applied Animal Behaviour Science</strong> — Peer-reviewed review on breed, environment,
                            and predictors of canine aggression:{' '}
                            <a
                                href="https://www.sciencedirect.com/science/article/pii/S016815911300292X"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#2c4a30] font-medium hover:opacity-80"
                            >
                                Review of breed and aggression research
                            </a>
                        </li>

                        <li>
                            <strong>ASPCA</strong> — National data on shelter intake, owner surrender reasons, and the role
                            of expectation mismatches in relinquishment:{' '}
                            <a
                                href="https://www.aspca.org/helping-people-pets/shelter-intake-and-surrender"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#2c4a30] font-medium hover:opacity-80"
                            >
                                ASPCA shelter intake overview
                            </a>
                        </li>

                        <li>
                            <strong>MDPI &mdash; Animals (Peer-Reviewed Journal)</strong> — Research on acquisition motives
                            and risk factors for dog relinquishment:{' '}
                            <a
                                href="https://www.mdpi.com/2076-2615/10/11/2102"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#2c4a30] font-medium hover:opacity-80"
                            >
                                Read the study
                            </a>
                        </li>
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
