'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogWeightAndLifespanDataAnalysis() {
    const locale = useLocale();

    const title =
        'How Weight Impacts Lifespan: Why Lean Dogs Live Up to 2.5 Years Longer (Data Breakdown)';
    const date = 'November 23, 2025';
    const categories = ['owner', 'veterinary'] as const;

    const categoryLabels: Record<string, string> = {
        owner: 'Pet Owners',
        veterinary: 'Veterinary Clinics',
        boarding: 'Boarding',
        daycare: 'Daycare',
        rescue: 'Rescues',
        walker: 'Dog Walkers',
        sitter: 'Pet Sitters',
        breeder: 'Breeders',
        breed_specific_guides: 'Breed Specific Guides'
    };

    return (
        <>

            <main className="max-w-3xl mx-auto px-4 py-10">
                <p className="text-sm text-gray-600 mb-2">Posted on {date}</p>

                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((cat) => (
                        <span
                            key={cat}
                            className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
                        >
                            {categoryLabels[cat] ?? cat}
                        </span>
                    ))}
                </div>

                {/* Table of Contents */}
                <nav className="mb-8 text-sm">
                    <ul className="flex flex-wrap gap-4">
                        <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
                        <li><a href="#purina" className="underline hover:opacity-80">Purina Lifespan Study</a></li>
                        <li><a href="#inflammation" className="underline hover:opacity-80">Inflammation Pathways</a></li>
                        <li><a href="#bodycondition" className="underline hover:opacity-80">Normal vs. Optimal Condition</a></li>
                        <li><a href="#bcs" className="underline hover:opacity-80">Body Condition Scoring</a></li>
                        <li><a href="#reduction" className="underline hover:opacity-80">Safe Weight Reduction</a></li>
                        <li><a href="#fatimpact" className="underline hover:opacity-80">Small Fat Gains, Big Health Impact</a></li>
                        <li><a href="#conclusion" className="underline hover:opacity-80">Conclusion</a></li>
                        <li><a href="#sources" className="underline hover:opacity-80">Sources</a></li>
                    </ul>
                </nav>

                {/* TL;DR */}
                <section id="tldr" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Short Answer (TL;DR)</h2>
                    <p className="mb-4">
                        Lean dogs live significantly longer than overweight dogs due to lower inflammation, reduced joint strain, and healthier
                        metabolic function. The landmark Purina study proved that maintaining an optimal body condition can add up to 2.5 years
                        of life. Even modest excess fat shortens healthspan by accelerating disease pathways.
                    </p>
                </section>

                {/* Section 1 */}
                <section id="purina" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">The Purina Study: Why Lean Dogs Live Longer</h2>
                    <p className="mb-4">
                        The Purina Lifespan Study is one of the most influential pieces of research in companion animal science. Conducted over
                        14 years, the study followed paired littermates fed either a lean or free-fed diet.
                    </p>

                    <ul className="list-disc pl-5 mb-4">
                        <li>Lean dogs lived up to 2.5 years longer.</li>
                        <li>They developed chronic diseases later in life.</li>
                        <li>They had lower inflammatory markers and better mobility.</li>
                        <li>They required fewer medications throughout aging.</li>
                    </ul>

                    <p className="mb-4">
                        This research revolutionized how veterinarians discuss weight, reframing obesity not as an appearance issue but as a
                        metabolic disease with direct longevity implications.
                    </p>
                </section>

                {/* Section 2 */}
                <section id="inflammation" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">How Excess Weight Increases Inflammation, Joint Damage, and Metabolic Disease</h2>
                    <p className="mb-4">
                        Fat tissue is metabolically active, meaning it produces inflammatory cytokines that accelerate ageing. As dogs gain fat,
                        inflammation rises, insulin resistance worsens, and joint structures weaken.
                    </p>

                    <ul className="list-disc pl-5 mb-4">
                        <li>Extra fat increases oxidative stress and immune activation.</li>
                        <li>Joints wear faster due to increased load and inflammation.</li>
                        <li>Metabolic regulation falters, increasing diabetes risk.</li>
                        <li>Inflammation accelerates cognitive ageing and mobility decline.</li>
                    </ul>

                    <p className="mb-4">
                        These effects occur even when weight gain appears mild, and long before a dog is obviously overweight.
                    </p>
                </section>

                {/* Section 3 */}
                <section id="bodycondition" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Normal Body Condition vs. Optimal Body Condition</h2>
                    <p className="mb-4">
                        Many owners assume that a dog who looks &quot;normal&quot; is also at a healthy weight. However, research shows that optimal body
                        condition—where ribs are easily felt, the waist is visible, and fat coverage is minimal—correlates strongly with longer
                        lifespan. Normal often means moderately overweight.
                    </p>

                    <p className="mb-4">
                        Optimal condition supports lower inflammatory signaling, improved mobility, and healthier metabolic stability well into
                        senior years.
                    </p>
                </section>

                {/* Section 4 */}
                <section id="bcs" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Body Condition Scoring (BCS): A Practical Guide Without Photos</h2>
                    <p className="mb-4">
                        BCS is typically a 1–9 scale that helps owners and veterinarians evaluate fat coverage, waistline definition, and rib
                        palpation. Even without diagrams, verbal cues provide accurate assessment when used consistently.
                    </p>

                    <ul className="list-disc pl-5 mb-4">
                        <li><strong>BCS 1–3</strong>: underweight; ribs visible; minimal fat.</li>
                        <li><strong>BCS 4–5</strong>: ideal; ribs easy to feel without pressure; visible waist; tight abdomen.</li>
                        <li><strong>BCS 6–7</strong>: overweight; ribs require moderate pressure; waist less defined.</li>
                        <li><strong>BCS 8–9</strong>: obese; ribs difficult to feel; no waist; abdominal roundness present.</li>
                    </ul>

                    <p className="mb-4">
                        Most dogs should fall between 4 and 5. Over 50 percent of household dogs fall above this range, often unnoticed by owners.
                    </p>
                </section>

                {/* Section 5 */}
                <section id="reduction" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">How to Safely Reduce Weight Without Losing Muscle</h2>
                    <p className="mb-4">
                        Weight loss must protect lean body mass, since muscle loss accelerates frailty. Safe reduction emphasizes caloric control,
                        increased movement, and proper protein intake.
                    </p>

                    <ul className="list-disc pl-5 mb-4">
                        <li>Use a calculated, vet-guided calorie target.</li>
                        <li>Increase low-impact movement instead of high-intensity bursts.</li>
                        <li>Prioritize high-quality protein to preserve muscle.</li>
                        <li>Monitor weekly change to avoid excessive reduction.</li>
                    </ul>

                    <p className="mb-4">
                        A slow, controlled plan prevents metabolic slowdown and ensures healthy, sustainable results.
                    </p>
                </section>

                {/* Section 6 */}
                <section id="fatimpact" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Why Even Small Amounts of Extra Fat Shorten Healthspan</h2>
                    <p className="mb-4">
                        Research shows that slight increases in fat coverage create measurable changes in inflammation and metabolic function.
                        Dogs with mild overweight measurements experience earlier arthritis, reduced mobility, and higher disease risk.
                    </p>

                    <ul className="list-disc pl-5 mb-4">
                        <li>Minor fat gains elevate chronic inflammation.</li>
                        <li>Energy expenditure decreases as fat increases.</li>
                        <li>Hormonal signaling shifts toward metabolic stress.</li>
                    </ul>

                    <p className="mb-4">
                        This is why veterinarians emphasize prevention; maintaining ideal condition is far easier than restoring it.
                    </p>
                </section>

                {/* Internal Backlinks */}
                <section className="mb-8">
                    <p className="mb-4">For further longevity insights, explore:</p>
                    <ul className="list-disc pl-5 mb-4">
                        <li>
                            <Link href={`/${locale}/blog/dog-longevity-diet-metabolic-health`} className="underline">
                                Dog Longevity Diets (Nutrition and Metabolic Ageing)
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${locale}/blog/dog-ageing-science-cellular-pathways`} className="underline">
                                How Dog Ageing Works (Cellular Pathways Explained)
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                    <p className="mb-4">
                        Maintaining a lean body condition is one of the most powerful longevity interventions available to dog owners. The
                        metabolic, inflammatory, and orthopedic benefits extend lifespan and improve quality of life in measurable ways. Weight
                        management is not cosmetic; it is a clinically proven strategy for healthier ageing.
                    </p>
                </section>

                {/* Sources */}
                <section id="sources" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-4">📚 Sources (Selected)</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                        <li>Kealy RD et al. (2002). Effects of diet restriction on life span in dogs. J Am Vet Med Assoc.</li>
                        <li>German AJ. (2016). Obesity and inflammation in companion animals. Vet J.</li>
                        <li>Hall JA. Metabolic effects of canine weight gain and loss. Vet Clin Small Anim.</li>
                        <li>Sarcopenia and ageing in dogs. J Vet Intern Med.</li>
                        <li>Body condition scoring guidelines. WSAVA Global Nutrition Committee.</li>
                    </ul>

                    <p className="text-xs text-gray-600 mt-4">
                        Educational content only — always follow your veterinarian&apos;s guidance for diagnosis and treatment.
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
