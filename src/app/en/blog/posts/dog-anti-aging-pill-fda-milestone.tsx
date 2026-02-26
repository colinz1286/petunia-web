'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogAntiAgingPillArticle() {
    const locale = useLocale();

    const title = "Anti-Aging Pill for Dogs Clears FDA Milestone";
    const date = "February 26, 2025";
    const categories = ['owner', 'health', 'technology'];

    const categoryLabels: Record<string, string> = {
        boarding: 'Boarding & Daycare',
        sitter: 'Pet Sitters',
        walker: 'Dog Walkers',
        rescue: 'Rescues',
        vet: 'Veterinary Clinics',
        owner: 'Pet Owners',
        technology: 'Technology',
        trends: 'Trends',
        breeder: 'Breeders',
        behavior: 'Behavior',
        health: 'Health'
    };

    return (
        <>

            <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
                <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

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

                <p className="mb-4">
                    In February 2025, biotech startup <strong>Loyal</strong> announced that its anti-aging pill
                    for dogs has cleared a major barrier in the U.S. regulatory process. The Food and Drug
                    Administration certified that the drug has a “reasonable expectation of effectiveness” in
                    extending lifespan for senior dogs. While not full approval, this is a meaningful step
                    toward making longevity therapies for pets a reality.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📑 What the FDA Milestone Means</h2>
                <p className="mb-4">
                    The FDA’s certification means there is credible evidence—though not yet definitive proof—
                    that the therapy can extend canine lifespan. It does not mean the drug is approved for
                    general use. Further safety studies, regulatory checks, and scaled manufacturing will be
                    required before pet owners can access it through veterinarians.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">💊 LOY-002: The Dog Longevity Pill</h2>
                <p className="mb-4">
                    Loyal’s program, called <strong>LOY-002</strong>, is a daily pill designed to improve
                    metabolic health and mimic the benefits of caloric restriction without reducing food
                    intake. Early studies suggest it may reduce inflammation and improve age-related metabolic
                    decline. Loyal is targeting dogs ten years or older and weighing more than fourteen pounds.
                </p>
                <p className="mb-4">
                    The company previously advanced an injectable therapy for large-breed dogs. LOY-002 builds
                    on that foundation and aims to address a broader population of aging pets.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">⚖️ Regulatory Path and Risks</h2>
                <p className="mb-4">
                    The path to full approval still includes hurdles. The FDA must evaluate long-term safety,
                    confirm efficacy through larger trials, and ensure quality manufacturing at scale.
                    Conditional approval could allow limited availability while studies continue, but even
                    then, cost, safety monitoring, and access will be major considerations.
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Safety:</strong> Potential side effects over long periods must be carefully tracked.</li>
                    <li><strong>Manufacturing:</strong> Producing consistent, high-quality batches at scale is challenging for any biotech therapy.</li>
                    <li><strong>Affordability:</strong> Loyal has suggested a target price under $100/month, but real costs may vary.</li>
                    <li><strong>Breed variation:</strong> Efficacy and side effects may differ across dog sizes and breeds.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🐕 Why Start with Dogs?</h2>
                <p className="mb-4">
                    Dogs are ideal for longevity research because they share homes and lifestyles with humans,
                    age more quickly, and suffer many of the same age-related illnesses. Results in dogs can
                    emerge in years rather than decades, providing valuable insights not only for veterinary
                    medicine but also for potential human applications.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🔬 Comparison to Other Longevity Research</h2>
                <p className="mb-4">
                    Scientists worldwide are exploring ways to slow aging: senolytic drugs that clear damaged
                    cells, gene therapies to reset cellular clocks, and metabolic drugs like rapamycin
                    analogs. Loyal’s focus is unique in targeting companion animals first, offering a shorter
                    timeline to meaningful real-world outcomes.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🏡 Implications for Pet Owners</h2>
                <p className="mb-4">
                    If approved, this would give pet owners an unprecedented choice: proactively extend their
                    dog’s lifespan with a daily pill. Questions will remain about monitoring, side effects,
                    and cost, but the potential for extra healthy years with a beloved companion is
                    compelling.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">⚖️ Ethical and Social Considerations</h2>
                <p className="mb-4">
                    Extending pets’ lifespans raises important debates. Should owners prioritize natural life
                    spans or embrace medical life extension? Will access be equitable, or reserved for wealthier
                    households? And how should veterinarians counsel clients on quality of life versus length
                    of life? These discussions will shape adoption as much as the science.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🚀 What’s Next?</h2>
                <p className="mb-4">
                    Loyal expects to complete key safety and regulatory milestones through 2025. Conditional
                    approval may follow, potentially allowing limited veterinary use. For now, owners can
                    watch for clinical trial opportunities and follow communications from veterinarians and
                    regulatory agencies.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">✅ Conclusion</h2>
                <p className="mb-4">
                    The FDA’s recognition of Loyal’s dog anti-aging pill as having a “reasonable expectation
                    of effectiveness” is a milestone in veterinary and longevity science. It does not mean
                    approval, but it signals that the dream of extending canine lifespan through medicine is
                    moving closer to reality.
                </p>

                <p className="mb-6">
                    For more on related topics, see our article on{' '}
                    <Link
                        href={`/${locale}/blog/most-common-dog-vaccines`}
                        className="underline text-[#2c4a30] font-medium hover:opacity-80"
                    >
                        the most common dog vaccines
                    </Link>
                    .
                </p>

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
