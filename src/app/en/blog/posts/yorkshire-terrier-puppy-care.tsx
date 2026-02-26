'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function YorkshireTerrierPuppyCare() {
    const locale = useLocale();

    return (
        <>

            <article className="prose lg:prose-xl mx-auto px-4 py-8">
                {/* DATE */}
                <p className="text-sm text-gray-500 mb-4">Written on November 21, 2025</p>

                {/* TITLE */}
                <h1 className="text-3xl font-bold mb-4">
                    Yorkshire Terrier Puppy Care: A Complete First Year Guide
                </h1>

                {/* CATEGORY PILLS */}
                <div className="mb-6">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">
                        Pet Owners
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2">
                        Puppy Care
                    </span>
                    <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
                        Breed-Specific Guides
                    </span>
                </div>

                {/* TABLE OF CONTENTS */}
                <nav className="mb-6">
                    <h2 className="font-semibold">Table of Contents</h2>
                    <ul className="list-disc list-inside">
                        <li><a href="#tldr">TL;DR</a></li>
                        <li><a href="#overview">Understanding Yorkshire Terrier Puppies</a></li>
                        <li><a href="#first-weeks">First Weeks at Home</a></li>
                        <li><a href="#feeding">Feeding and Nutrition</a></li>
                        <li><a href="#training">Training and Socialization</a></li>
                        <li><a href="#health">Health Care and Vaccination Timeline</a></li>
                        <li><a href="#grooming">Grooming and Coat Maintenance</a></li>
                        <li><a href="#safety">Toy Breed Safety Considerations</a></li>
                        <li><a href="#boarding">Boarding and Daycare Considerations</a></li>
                        <li><a href="#conclusion">Conclusion</a></li>
                        <li><a href="#sources">Sources</a></li>
                    </ul>
                </nav>

                {/* TLDR */}
                <section id="tldr" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">TL;DR</h2>
                    <p>
                        Yorkshire Terrier puppies are tiny, energetic, and sensitive toy-breed dogs that require
                        structured routines, proper socialization, careful nutrition, and consistent training throughout
                        their first year. Their size puts them at higher risk for hypoglycemia, injury, and dental issues,
                        making early preventive care essential. With the right foundation, Yorkies grow into confident,
                        affectionate companions.
                    </p>
                </section>

                {/* OVERVIEW */}
                <section id="overview" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                        Understanding Yorkshire Terrier Puppies
                    </h2>
                    <p>
                        Yorkshire Terriers are intelligent, bold, and affectionate. Their terrier background gives them a
                        spirited personality, while their toy-breed size means they rely heavily on structured care during
                        the first year. Yorkie puppies typically weigh between 1 and 3 lbs at eight weeks and continue
                        growing until around 10 to 12 months old.
                    </p>
                    <p>
                        Because of their rapid metabolic rate, Yorkie puppies need frequent meals, close observation for
                        hypoglycemia, and gentle handling to prevent accidental injury.
                    </p>
                </section>

                {/* FIRST WEEKS */}
                <section id="first-weeks" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">The First Weeks at Home</h2>
                    <p>
                        The transition period is critical. Yorkshire Terrier puppies thrive when owners provide:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>A warm, draft-free sleeping area</li>
                        <li>Frequent small meals to maintain stable blood sugar</li>
                        <li>Positive crate-training routines</li>
                        <li>Gradual introductions to new sounds, people, and surfaces</li>
                    </ul>
                    <p>
                        Avoid overwhelming your puppy during the first week. Slow, consistent routines help Yorkies
                        settle in and reduce separation-related behaviors later.
                    </p>
                </section>

                {/* FEEDING */}
                <section id="feeding" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Feeding and Nutrition</h2>
                    <p>
                        Toy breeds burn calories quickly and require nutrient-dense, high-quality diets. Yorkshire Terrier
                        puppies often do best with:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>4 meals per day from 8–12 weeks</li>
                        <li>3 meals per day from 3–6 months</li>
                        <li>2–3 small meals per day after 6 months</li>
                    </ul>
                    <p>
                        Look for puppy formulas labeled specifically for small or toy breeds. Owners should watch for
                        early signs of hypoglycemia such as wobbliness, lethargy, or fainting and contact a veterinarian
                        immediately if symptoms occur.
                    </p>
                </section>

                {/* TRAINING */}
                <section id="training" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                        Training and Socialization
                    </h2>
                    <p>
                        Yorkshire Terriers are eager learners but can be stubborn. Early training helps prevent excessive
                        barking, resource guarding, and small-dog syndrome. Focus on:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Crate training and predictable routines</li>
                        <li>Short, reward-based training sessions</li>
                        <li>Exposure to children, friendly dogs, and new environments</li>
                        <li>Teaching calm behavior before petting or picking up</li>
                    </ul>
                    <p>
                        Consistency is key. Yorkie puppies respond exceptionally well to positive reinforcement and
                        gentle boundaries.
                    </p>
                </section>

                {/* HEALTH */}
                <section id="health" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                        Health Care and Vaccination Timeline
                    </h2>
                    <p>A standard first-year veterinary schedule for Yorkies includes:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>8–12 weeks:</strong> DHPP, fecal exam, initial deworming</li>
                        <li><strong>12–16 weeks:</strong> DHPP booster, rabies vaccination</li>
                        <li><strong>4–6 months:</strong> Spay or neuter (if recommended)</li>
                        <li><strong>6–12 months:</strong> Dental screening, ongoing flea/tick prevention</li>
                    </ul>
                    <p>
                        Yorkshire Terriers also have breed-specific considerations such as tracheal collapse,
                        luxating patella, and early dental disease. Preventive care and regular checkups reduce
                        long-term risks.
                    </p>
                </section>

                {/* GROOMING */}
                <section id="grooming" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Grooming and Coat Maintenance</h2>
                    <p>
                        Yorkie coats are fine and silky, requiring ongoing maintenance even during puppyhood. Owners
                        should begin handling paws, ears, and muzzles early to build grooming tolerance. Essential steps
                        include:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Daily brushing to prevent tangles</li>
                        <li>Regular baths with gentle puppy shampoo</li>
                        <li>Professional grooming every 4–6 weeks</li>
                        <li>Cleaning ears and trimming nails routinely</li>
                    </ul>
                    <p>
                        Early grooming experiences create calm adult behavior and prevent stress during appointments.
                    </p>
                </section>

                {/* SAFETY */}
                <section id="safety" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Toy Breed Safety Considerations</h2>
                    <p>
                        Yorkshire Terrier puppies are extremely small and fragile. Owners should carefully supervise
                        interactions with children and larger dogs, use harnesses rather than collars, and block access
                        to high furniture where falls could cause fractures. Avoid rough play and monitor your puppy for
                        sudden fatigue or signs of low blood sugar.
                    </p>
                </section>

                {/* BOARDING */}
                <section id="boarding" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Boarding and Daycare Considerations</h2>
                    <p>
                        Yorkie puppies can thrive in structured environments but require toy-breed mindful care. Safe
                        facilities should separate small dogs from larger ones, follow owner feeding instructions, and
                        ensure staff are trained to recognize hypoglycemia and stress behaviors. A quiet rest area,
                        gentle handling, and routine updates to owners create a safe experience.
                    </p>
                </section>

                {/* CONCLUSION */}
                <section id="conclusion" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
                    <p>
                        Yorkshire Terrier puppies grow into confident, affectionate dogs when given consistent structure,
                        proper nutrition, early training, and careful safety precautions. Their first year lays the
                        foundation for a lifetime of good health and strong bonding. With intentional care, your Yorkie
                        will flourish into a joyful companion.
                    </p>
                </section>

                {/* SOURCES */}
                <section id="sources" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Sources</h2>
                    <ul className="list-disc list-inside">
                        <li>American Kennel Club (AKC) &mdash; Yorkshire Terrier Breed Overview</li>
                        <li>American Veterinary Medical Association (AVMA) &mdash; Toy Breed Health Considerations</li>
                        <li>University Veterinary Teaching Hospital Publications &mdash; Hypoglycemia in Small-Breed Puppies</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Related Yorkshire Terrier Articles</h2>
                    <ul className="list-disc list-inside">
                        <li>
                            <a
                                href="https://www.petuniapets.com/en/blog/yorkshire-terrier-grooming-guide"
                                className="text-blue-600 hover:underline"
                            >
                                Yorkshire Terrier Grooming and Coat Maintenance
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.petuniapets.com/en/blog/yorkshire-terrier-nutrition-feeding"
                                className="text-blue-600 hover:underline"
                            >
                                Yorkshire Terrier Nutrition & Feeding
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.petuniapets.com/en/blog/yorkshire-terrier-training-guide"
                                className="text-blue-600 hover:underline"
                            >
                                Training a Yorkshire Terrier
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.petuniapets.com/en/blog/yorkshire-terrier-health-lifespan"
                                className="text-blue-600 hover:underline"
                            >
                                Yorkshire Terrier Health & Lifespan
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.petuniapets.com/en/blog/yorkshire-terrier-boarding-daycare"
                                className="text-blue-600 hover:underline"
                            >
                                Yorkshire Terrier Boarding & Daycare Guide
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.petuniapets.com/en/blog/yorkshire-terrier-living-with"
                                className="text-blue-600 hover:underline"
                            >
                                Living with a Yorkshire Terrier
                            </a>
                        </li>
                    </ul>
                </section>

                {/* BACK TO BLOG */}
                <div className="mt-8">
                    <Link href={`/${locale}/blog`} className="text-blue-600 hover:underline">
                        ← Back to Blog
                    </Link>
                </div>
            </article>
        </>
    );
}
