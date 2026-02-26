'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function GreatDaneTopHealthIssues() {
    const locale = useLocale();

    const title =
        'The 3 Most Common Health Problems in Great Danes: A Practical Guide for Owners';
    const date = 'November 22, 2025';
    const categories = ['owner', 'breed_specific_guides'] as const;

    const categoryLabels: Record<string, string> = {
        owner: 'Pet Owners',
        boarding: 'Boarding & Daycare',
        food: 'Dog Food & Nutrition',
        sitter: 'Pet Sitters',
        walker: 'Dog Walkers',
        rescue: 'Rescues',
        vet: 'Veterinary Clinics',
        breed_specific_guides: 'Breed-Specific Guides',
    };

    return (
        <>

            <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
                <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                {/* Tags */}
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

                {/* INTRO */}
                <p className="text-lg mb-4">
                    Great Danes are affectionate, gentle giants—but their size also makes them vulnerable to
                    several serious health conditions. Whether you’re raising a Dane puppy or caring for an
                    adult rescue, understanding the breed’s most common health risks is crucial for early
                    detection, responsible management, and long-term wellbeing.
                </p>

                <p className="mb-6">
                    Below are the three most common health problems seen in Great Danes, why they happen, what
                    symptoms to watch for, and what practical steps you can take to prevent emergencies and
                    support your dog’s quality of life.
                </p>

                {/* SECTION 1 — BLOAT */}
                <h2 className="text-2xl font-semibold mt-10 mb-3">
                    1. Gastric Dilatation-Volvulus (Bloat / GDV)
                </h2>
                <p className="mb-4">
                    GDV is the most serious and well-known health emergency in Great Danes. The stomach fills
                    with gas and twists on itself, cutting off blood flow. It is rapidly fatal without
                    immediate surgery. Great Danes are one of the highest-risk breeds in the world for this
                    condition.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Common Symptoms</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Hard, swollen, or distended abdomen</li>
                    <li>Unproductive retching or repeated attempts to vomit</li>
                    <li>Restlessness, pacing, or sudden anxiety</li>
                    <li>Pale gums or drooling</li>
                    <li>Collapse or inability to stand (late stage)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Major Risk Factors</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Large, deep-chested body structure</li>
                    <li>Feeding one large meal per day</li>
                    <li>Eating too quickly</li>
                    <li>Intense exercise around mealtimes</li>
                    <li>Family history of bloat</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Prevention Tips</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Feed 2–3 smaller meals instead of one large meal</li>
                    <li>Use slow-feeder bowls to reduce gulping</li>
                    <li>Avoid vigorous play for one hour before and after meals</li>
                    <li>Consider elective gastropexy (“stomach tacking”) at spay/neuter</li>
                    <li>Maintain a calm environment during feeding</li>
                </ul>

                <p className="mb-6">
                    GDV progresses quickly. If you suspect bloat, go to an emergency veterinarian immediately.
                </p>

                {/* SECTION 2 — HEART DISEASE */}
                <h2 className="text-2xl font-semibold mt-10 mb-3">
                    2. Dilated Cardiomyopathy (DCM)
                </h2>
                <p className="mb-4">
                    Great Danes are genetically predisposed to dilated cardiomyopathy—a disease where the
                    heart muscle weakens and the heart enlarges. Over time, it struggles to pump blood
                    effectively. DCM may progress with few symptoms early on, which makes screening especially
                    important.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Common Early Signs</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Coughing, especially at night</li>
                    <li>Exercise intolerance or sudden fatigue</li>
                    <li>Rapid breathing or shortness of breath</li>
                    <li>Fainting or collapse</li>
                    <li>Weight loss or decreased appetite</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">How Vets Diagnose DCM</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Echocardiogram (ultrasound of the heart)</li>
                    <li>Chest X-rays</li>
                    <li>Electrocardiogram (ECG/EKG)</li>
                    <li>Blood tests evaluating cardiac biomarkers</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Management &amp; Prevention</h3>
                <ul className="list-disc pl-5 space-y-2 mb-10">
                    <li>Annual cardiac screenings for all Great Danes over age two</li>
                    <li>Prescription heart medications when indicated</li>
                    <li>Maintaining a healthy weight</li>
                    <li>Moderate, consistent exercise (avoid sudden strenuous bursts)</li>
                    <li>Consult your vet about diet; avoid unbalanced boutique diets</li>
                </ul>

                {/* SECTION 3 — JOINT DISEASE */}
                <h2 className="text-2xl font-semibold mt-10 mb-3">
                    3. Orthopedic Issues: Hip Dysplasia &amp; Osteoarthritis
                </h2>
                <p className="mb-4">
                    Due to their enormous size, Great Danes have a high risk of developing hip dysplasia,
                    elbow dysplasia, and degenerative joint disease (arthritis). Their joints experience
                    extreme stress during growth, especially from puppyhood through age two.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Symptoms to Watch For</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Bunny-hopping gait when running</li>
                    <li>Stiffness after rest</li>
                    <li>Difficulty climbing stairs or standing from lying down</li>
                    <li>Limping or favoring one leg</li>
                    <li>Reluctance to jump into the car or onto furniture</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Prevention &amp; Joint Protection</h3>
                <ul className="list-disc pl-5 space-y-2 mb-10">
                    <li>Slow, controlled puppy growth with a large-breed diet</li>
                    <li>Joint supplements (e.g., glucosamine, chondroitin, omega-3s)</li>
                    <li>Traction flooring to prevent slipping</li>
                    <li>Regular moderate exercise for muscle support</li>
                    <li>Weight management—extra pounds strain joints significantly</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-10 mb-3">When to Call a Veterinarian</h2>
                <ul className="list-disc pl-5 space-y-2 mb-10">
                    <li>Any signs of bloat or abdominal swelling</li>
                    <li>Coughing, collapsing, or rapid breathing</li>
                    <li>Sudden limping or inability to bear weight</li>
                    <li>Changes in appetite, mood, or mobility</li>
                </ul>

                {/* REFERENCES */}
                <h2 className="text-2xl font-semibold mt-10 mb-3">References &amp; Further Reading</h2>
                <ul className="list-disc pl-5 space-y-2 mb-10">
                    <li>American College of Veterinary Internal Medicine (ACVIM) recommendations on DCM</li>
                    <li>Orthopedic Foundation for Animals (OFA) hip and elbow guidelines</li>
                    <li>Multiple university veterinary hospitals’ GDV/bloat resources</li>
                </ul>

                <Link
                    href={`/${locale}/blog`}
                    className="underline text-[#2c4a30] font-medium hover:opacity-80"
                >
                    ← Back to Blog
                </Link>

                {/* Related Articles */}
                <div className="bg-[#e4dbcb] border border-[#d9cfc2] rounded-lg p-4 mb-8">
                    <h3 className="text-lg font-semibold text-[#2c4a30] mb-2">
                        Related Reading on Great Dane Health
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <a
                                href="https://petuniapets.com/en/blog/great-dane-health-lifespan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#2c4a30] font-medium hover:opacity-80"
                            >
                                Great Dane Health &amp; Lifespan Overview
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.petuniapets.com/en/blog/extending-great-dane-lifespan-2025"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-[#2c4a30] font-medium hover:opacity-80"
                            >
                                How to Extend Your Great Dane’s Lifespan (2025 Guide)
                            </a>
                        </li>
                    </ul>
                </div>

                <p className="text-xs text-gray-500 mt-8">
                    This article is for educational purposes only and does not replace professional veterinary
                    care or diagnosis.
                </p>
            </main>
        </>
    );
}
