'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WolfDNAInModernDogsWhatTheNewStudyFound() {
    const locale = useLocale();

    const title =
        'Wolf DNA in Modern Dogs: What the New 2,700-Genome Study Found, What It Means, and What It Does Not';
    const date = 'December 26, 2025';
    const categories = ['owner', 'breed_specific_guides', 'vet'] as const;

    const categoryLabels: Record<string, string> = {
        owner: 'Pet Owners',
        breed_specific_guides: 'Breed Specific Guides',
        vet: 'Veterinary Clinics',
        rescue: 'Rescues',
        breeder: 'Breeders',
        boarding: 'Boarding & Daycare',
    };

    return (
        <>

            <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
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

                <article className="prose prose-lg max-w-none prose-headings:text-[#2c4a30] prose-p:mb-4">
                    {/* Intro */}
                    <p className="text-lg">
                        If you have ever joked that your dog has a little wolf in them, a new genetics paper suggests that you
                        might be closer to the truth than you think. Researchers analyzing thousands of canine genomes reported
                        that detectable wolf ancestry is present in a large share of modern breed dogs, and in all of the
                        free-roaming village dogs they examined. That does not mean your Labrador is a wolf hybrid, and it does
                        not mean a dog with wolf ancestry is unpredictable or unsafe. It means that dog and wolf histories remain
                        genetically entangled long after the original domestication process.
                    </p>

                    <p>
                        This guide translates the research into practical, owner-first language. It covers what the study found,
                        what the methods actually measure, why this is not just an old topic being recycled, and the most common
                        misunderstandings that show up in social media summaries. It also explains what the findings mean for
                        breeders, rescues, and everyday owners who simply want a stable, healthy family dog.
                    </p>

                    {/* Table of Contents */}
                    <nav className="not-prose rounded-lg border border-[#d9cfc2] bg-[#f6efe4] p-4 my-8">
                        <p className="font-semibold mb-3">Table of Contents</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>
                                <a className="underline" href="#tldr">
                                    TL;DR
                                </a>
                            </li>
                            <li>
                                <a className="underline" href="#what-is-new">
                                    What is actually new in this research
                                </a>
                            </li>
                            <li>
                                <a className="underline" href="#what-they-analyzed">
                                    What the researchers analyzed
                                </a>
                            </li>
                            <li>
                                <a className="underline" href="#core-findings">
                                    The core findings in plain English
                                </a>
                            </li>
                            <li>
                                <a className="underline" href="#timing">
                                    When did the wolf-to-dog mixing likely happen
                                </a>
                            </li>
                            <li>
                                <a className="underline" href="#traits">
                                    Traits and biology: what wolf ancestry may influence
                                </a>
                            </li>
                            <li>
                                <a className="underline" href="#village-dogs">
                                    Why village dogs matter so much
                                </a>
                            </li>
                            <li>
                                <a className="underline" href="#what-it-does-not-mean">
                                    What this does not mean
                                </a>
                            </li>
                            <li>
                                <a className="underline" href="#practical-takeaways">
                                    Practical takeaways for owners, breeders, and rescues
                                </a>
                            </li>
                            <li>
                                <a className="underline" href="#faq">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a className="underline" href="#sources">
                                    Selected sources
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* TL;DR */}
                    <section id="tldr" className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            TL;DR
                        </h2>

                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>
                                A major 2025 genetics study analyzing nearly 2,700 canine genomes reports that many modern breed dogs
                                carry detectable wolf ancestry introduced after domestication, not solely from the ancient origin of
                                dogs.
                            </li>
                            <li>
                                The wolf ancestry found in most breeds is typically small (often a few percent or less), but it is
                                widespread and appears in unexpected places, including very small breeds.
                            </li>
                            <li>
                                The research suggests wolf ancestry is uneven across groups: higher on average in some working or
                                landrace-related populations and in free-roaming village dogs, and lower in many modern companion
                                breeds.
                            </li>
                            <li>
                                The presence of wolf ancestry does not mean a dog is a wolf hybrid, nor does it automatically predict
                                temperament. Behavior is shaped by many genes, early environment, training, and selection.
                            </li>
                            <li>
                                The practical owner takeaway is simple: focus on responsible breeding, health testing, and stable
                                early-life socialization rather than myths about &ldquo;wolf content.&rdquo;
                            </li>
                        </ul>
                    </section>
                    {/* What is new */}
                    <section id="what-is-new" className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            What Is Actually New in This Research
                        </h2>

                        <p className="mb-4">
                            People have long known that dogs descend from gray-wolf ancestors. The new part is not the general idea
                            of shared ancestry, but the evidence that post-domestication interbreeding left detectable traces across
                            many modern dogs, and that these traces can be identified and mapped in more detail than older methods
                            allowed. In other words, this is not just an old conversation about dog domestication. It is a modern
                            genomic analysis that attempts to answer more specific questions: how common was later interbreeding,
                            when did it happen, and where in the genome did it leave a signal.
                        </p>

                        <p className="mb-4">
                            The study also highlights why you can see wolf ancestry in dogs that do not look wolf-like and have been
                            bred as domestic companions for generations. Gene flow does not require a modern intentional wolfdog
                            program. It can occur through historical mixing in particular regions, followed by centuries of dog
                            movement and breeding that spread small fragments.
                        </p>
                    </section>

                    {/* What they analyzed */}
                    <section id="what-they-analyzed" className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            What the Researchers Analyzed
                        </h2>

                        <p className="mb-4">
                            The research team used previously published genomes from breed dogs, village dogs, wolves, and other
                            canids spanning long time frames. The headline number in popular coverage is the sample size: roughly
                            2,700 genomes. What matters more is the diversity of the dataset, which includes modern breed dogs and
                            free-roaming village dogs, plus wolf genomes that help identify which segments of dog DNA most closely
                            match wolf ancestry.
                        </p>

                        <p className="mb-4">
                            The key technical idea is local ancestry inference. Instead of treating a genome as one blended average,
                            the method attempts to identify specific stretches of DNA that look more wolf-like versus more dog-like.
                            That allows researchers to estimate the presence and approximate timing of admixture signals.
                        </p>
                    </section>

                    {/* Core findings */}
                    <section id="core-findings" className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            The Core Findings in Plain English
                        </h2>

                        <p className="mb-4">
                            The study reports three findings that have driven most of the headlines:
                        </p>

                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>
                                <strong>Wolf ancestry is detectable in many modern breed dogs.</strong> Popular summaries cite a
                                figure around two-thirds of breeds with a detectable signal.
                            </li>
                            <li>
                                <strong>All of the village dogs in the dataset show wolf ancestry.</strong> Village dogs are
                                free-roaming dogs living in or near human settlements that are not maintained as closed registries
                                like modern breeds.
                            </li>
                            <li>
                                <strong>The amount of wolf ancestry varies widely by dog population.</strong> Some intentionally
                                developed wolfdog breeds have high percentages. Many typical pet breeds show small fractions, and
                                some breeds show little to none.
                            </li>
                        </ul>

                        <p className="mb-4">
                            A responsible interpretation is that dog and wolf populations were never perfectly separated after
                            domestication. Even if interbreeding is rare today in many places, rare events across long periods can
                            still leave a detectable fingerprint in modern genomes.
                        </p>
                    </section>

                    {/* Timing */}
                    <section id="timing" className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            When Did the Wolf-to-Dog Mixing Likely Happen?
                        </h2>

                        <p className="mb-4">
                            The study estimates that wolf-to-dog gene flow, on average, reflects mixing that occurred roughly a
                            thousand generations ago, often translated in popular reporting to around 2,600 to 3,000 years ago.
                            That timing is long after the earliest phases of domestication. Some reporting also notes that
                            dog-to-wolf gene flow appears more recent in certain contexts, potentially aligned with historical
                            changes such as urbanization and the growth of stray dog populations in the last few centuries.
                        </p>

                        <p className="mb-4">
                            It is worth being cautious with any single number. Generation time can vary, and genetic timing
                            methods estimate an average over many events. The takeaway is not the exact year, but the direction:
                            much of the detectable wolf ancestry appears to reflect post-domestication mixing rather than only
                            the original divergence between dogs and their wolf ancestors.
                        </p>
                    </section>

                    {/* Traits */}
                    <section id="traits" className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            Traits and Biology: What Wolf Ancestry May Influence
                        </h2>

                        <p className="mb-4">
                            Headlines often imply that wolf DNA explains a dog&rsquo;s personality. That is an oversimplification. Still,
                            the study and related coverage suggest that wolf-derived segments may be associated with certain trait
                            patterns at the population level. Reported associations include:
                        </p>

                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>
                                <strong>Body size:</strong> Wolf ancestry is reported more often in larger dogs and some working
                                populations, though selection for size is complex and multi-gene.
                            </li>
                            <li>
                                <strong>Olfaction and sensory biology:</strong> Some wolf-derived segments are discussed as potentially
                                relevant to environmental resilience and scent-related advantages in free-roaming dogs.
                            </li>
                            <li>
                                <strong>Working roles and temperament descriptors:</strong> Some coverage compares how kennel clubs
                                describe high versus low wolf-ancestry breeds, but that does not prove a simple genetic cause.
                            </li>
                        </ul>

                        <p className="mb-4">
                            A practical way to think about this: small segments of wolf ancestry could persist if they were neutral
                            or helpful in certain environments, especially for dogs living in challenging outdoor conditions. But
                            temperament in a household is still strongly shaped by early development, training, and selection within
                            a breed or line. Most owners should not treat these findings as a shortcut to predict behavior in an
                            individual dog.
                        </p>

                        <p className="mb-4">
                            If you are choosing a dog based on family fit, the most reliable approach is still to match energy level,
                            trainability, and management needs to your household. If you want a structured way to choose, you may
                            find this helpful:{' '}
                            <Link href={`/${locale}/blog/what-dog-breed-is-best-for-me-and-my-family`} className="underline">
                                What Dog Breed Is Best for Me and My Family?
                            </Link>
                            .
                        </p>
                    </section>

                    {/* Village dogs */}
                    <section id="village-dogs" className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            Why Village Dogs Matter So Much
                        </h2>

                        <p className="mb-4">
                            Village dogs represent a huge portion of the world&rsquo;s dog population, but they are underrepresented in
                            typical breed-focused conversations. Unlike closed breed registries, village dogs reproduce in
                            free-roaming populations shaped by local survival pressures and human environments. That makes them
                            especially informative when asking how dogs adapt in the real world.
                        </p>

                        <p className="mb-4">
                            The study reports that all village dogs in the dataset carry detectable wolf ancestry. One reasonable
                            interpretation is that occasional historical mixing may have been more common in settings where dogs and
                            wolves shared landscapes, with limited containment and fewer barriers between populations. Over time,
                            those signals can persist, especially if they are not strongly harmful.
                        </p>

                        <p className="mb-4">
                            For readers involved in rescue, this is a useful reminder: many rescued dogs are not cleanly
                            breed-categorized, and that is not a defect. Mixed or village-dog ancestry can reflect a different
                            evolutionary history than modern closed registries.
                        </p>
                    </section>

                    {/* What it does not mean */}
                    <section id="what-it-does-not-mean" className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">
                            What This Does Not Mean
                        </h2>

                        <p className="mb-4">
                            Genetics stories travel fast, and misunderstandings travel faster. Here are the most important
                            guardrails:
                        </p>

                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>
                                <strong>This does not mean your dog is a wolf hybrid.</strong> Detectable ancestry can be tiny and far
                                back in history.
                            </li>
                            <li>
                                <strong>This does not override training, early environment, and management.</strong> A stable home and
                                structured socialization matter enormously.
                            </li>
                            <li>
                                <strong>This is not a license to market unsafe dogs as wolf-like.</strong> Temperament and safety are
                                evaluated dog by dog, not by a headline.
                            </li>
                            <li>
                                <strong>This does not replace health testing.</strong> Genetic entanglement is not the same as
                                screening for hip, elbow, cardiac, or eye issues within a breeding program.
                            </li>
                        </ul>

                        <p className="mb-4">
                            If you are deciding between adoption and a breeder, the biggest quality-of-life variables are usually
                            health transparency, ethical selection, and support after placement. This piece may help you think
                            clearly through that decision:{' '}
                            <Link
                                href={`/${locale}/blog/should-i-adopt-a-dog-or-buy-one-from-a-breeder`}
                                className="underline"
                            >
                                Should I Adopt a Dog or Buy One from a Breeder?
                            </Link>
                            .
                        </p>
                    </section>

                    {/* Practical takeaways */}
                    <section id="practical-takeaways" className="mb-10">
                        <h2 className="text-2xl font-semibold mb-6">
                            Practical Takeaways for Owners, Breeders, and Rescues
                        </h2>

                        <h3 className="text-xl font-semibold mb-3">
                            For pet owners
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>
                                Treat this as an interesting window into dog history, not a shortcut to predict behavior in your
                                individual dog.
                            </li>
                            <li>
                                If you want a stable family dog, prioritize temperament selection, early socialization, and training
                                plans that fit your lifestyle.
                            </li>
                            <li>
                                Avoid online claims that equate wolf ancestry with dominance myths or guaranteed aggression.
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">
                            For breeders
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li>
                                Focus on health testing and transparent records. The strongest modern breeding programs are built on
                                documented orthopedic, cardiac, and eye evaluations where appropriate.
                            </li>
                            <li>
                                Avoid marketing language that implies wolf ancestry makes a dog superior. Owners need predictability,
                                not mythology.
                            </li>
                            <li>
                                Remember that selection for appearance alone can create welfare tradeoffs. A genetics headline should
                                never distract from sound structure and stable temperament.
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">
                            For rescues and shelters
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                Avoid assuming a dog&rsquo;s behavior is explained by perceived wolfiness. Use behavior assessments and
                                observe the dog&rsquo;s stress signals in real contexts.
                            </li>
                            <li>
                                When you see anxious adopters, emphasize management, decompression, and realistic expectations rather
                                than ancestry guesses.
                            </li>
                            <li>
                                Encourage adopters to prioritize training support and routine, especially in the first 90 days.
                            </li>
                        </ul>
                    </section>

                    {/* FAQ */}
                    <section id="faq" className="mb-10">
                        <h2 className="text-2xl font-semibold mb-6">
                            FAQ
                        </h2>

                        <p className="mb-4">
                            <strong>Is this study new, or is it just a recycled topic?</strong>
                            <br />
                            The topic of dog origins is old, but the paper is new: it uses modern genomic methods and a large dataset
                            to map post-domestication wolf ancestry across many dog populations, and it was published in 2025.
                        </p>

                        <p className="mb-4">
                            <strong>Does wolf ancestry mean my dog will act more like a wolf?</strong>
                            <br />
                            Not necessarily. Behavior is influenced by many genes and is heavily shaped by early environment,
                            training, and selection. Small ancestry fragments are not a direct temperament predictor.
                        </p>

                        <p className="mb-4">
                            <strong>Are some breeds truly wolf hybrids?</strong>
                            <br />
                            A few modern wolfdog breeds were created intentionally in recent history and can have much higher wolf
                            ancestry than typical breeds. That is different from ancient trace ancestry in many common breeds.
                        </p>

                        <p className="mb-4">
                            <strong>Should owners get a DNA test because of this?</strong>
                            <br />
                            A DNA test can be fun and sometimes useful for breed mix estimates, but it should not replace behavior
                            evaluation, training plans, or veterinary care. Use results as context, not destiny.
                        </p>

                        <p className="text-sm text-gray-600 mt-6">
                            Educational content only. Always consult your veterinarian and qualified behavior professionals for
                            individualized guidance.
                        </p>
                    </section>

                    {/* Sources */}
                    <section id="sources" className="mb-16">
                        <h2 className="text-2xl font-semibold mb-6">
                            Selected Sources
                        </h2>

                        <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li>
                                Lin AT, et&nbsp;al. <em>A legacy of genetic entanglement with wolves shapes modern dogs.</em>{' '}
                                <em>Proceedings of the National Academy of Sciences</em> (2025).{' '}
                                <a
                                    className="underline"
                                    href="https://www.pnas.org/doi/10.1073/pnas.2421768122"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    PNAS article (DOI: 10.1073/pnas.2421768122)
                                </a>
                                .
                            </li>
                            <li>
                                PubMed listing for the same PNAS paper (publication and early online dates).{' '}
                                <a
                                    className="underline"
                                    href="https://pubmed.ncbi.nlm.nih.gov/41284883/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    PubMed record
                                </a>
                                .
                            </li>
                            <li>
                                American Museum of Natural History: summary and context for the research.{' '}
                                <a
                                    className="underline"
                                    href="https://www.amnh.org/explore/news-blogs/wolfy-dogs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    AMNH news release
                                </a>
                                .
                            </li>
                            <li>
                                Phys.org coverage based on the AMNH release (includes breed examples and village dog framing).{' '}
                                <a
                                    className="underline"
                                    href="https://phys.org/news/2025-11-modern-dogs-wolf-ancestry-tiny.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Phys.org article
                                </a>
                                .
                            </li>
                            <li>
                                Wired summary coverage.{' '}
                                <a
                                    className="underline"
                                    href="https://www.wired.com/story/wolf-dna-lurks-in-many-modern-dog-breeds"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Wired coverage
                                </a>
                                .
                            </li>
                            <li>
                                LiveScience explainer coverage (breed-level patterns and timing summary).{' '}
                                <a
                                    className="underline"
                                    href="https://www.livescience.com/animals/dogs/most-modern-dogs-have-wolf-dna-from-relatively-recent-interbreeding-heres-which-breeds-are-the-most-and-least-wolfish"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LiveScience coverage
                                </a>
                                .
                            </li>
                        </ul>
                    </section>

                    {/* Back to blog */}
                    <div className="not-prose mt-10">
                        <Link
                            href={`/${locale}/blog`}
                            className="underline text-[#2c4a30] font-medium hover:opacity-80"
                        >
                            ← Back to Blog
                        </Link>

                        <p className="text-xs text-gray-500 mt-6">
                            This article provides general education and is not medical or behavioral advice. Always consult your
                            veterinarian and qualified training professionals for individualized guidance.
                        </p>
                    </div>
                </article>
            </main>
        </>
    );
}
