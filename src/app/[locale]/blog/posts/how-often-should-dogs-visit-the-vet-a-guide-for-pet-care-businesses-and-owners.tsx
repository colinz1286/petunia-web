'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowOftenShouldDogsVisitTheVetAGuideForPetCareBusinessesAndOwnersBlog() {
    const locale = useLocale();

    const title = "How Often Should Dogs Visit the Vet? A Guide for Pet Care Businesses and Owners";
    const date = "June 1, 2025";
    const categories = ['boarding', 'sitter', 'walker', 'rescue', 'vet', 'owner'];

    const categoryLabels: Record<string, string> = {
        boarding: 'Boarding & Daycare',
        sitter: 'Pet Sitters',
        walker: 'Dog Walkers',
        rescue: 'Rescues',
        vet: 'Veterinary Clinics',
        owner: 'Pet Owners',
    };

    return (
        <>
            <Head>
                <title>{title} – Petunia Blog</title>
                <meta
                    name="description"
                    content="Wondering how often your dog should see the vet? Get a full guide on vet visits by age, breed, and health condition — from a boarding expert’s perspective."
                />
            </Head>

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

                <h2 className="text-2xl font-semibold mt-8 mb-3">🐾 Introduction: Why I Care About Vet Visits</h2>
                <p className="mb-4">
                    When I started my dog boarding and daycare business eight years ago, vet visits weren’t just paperwork—they became a window into how seriously people care for their dogs.
                </p>
                <p className="mb-4">
                    I quickly realized that many owners either forget vaccines or aren’t aware how often their dogs should be seen. That’s why I created the Petunia app — to help bridge that gap. But even beyond reminders, knowing how often your dog should visit the vet is a foundational part of good care.
                </p>

                <p className="mb-4">
                    This guide brings together what I’ve seen in the industry and current guidelines from AVMA, AAHA, WSAVA, RCVS, and other veterinary sources — from puppies to seniors, chronic conditions to breed risks, and global standards.
                </p>

                <p className="mb-4 italic">
                    I’m not a vet — just someone deeply embedded in the care side of this work. Please always consult your own veterinarian for personalized advice.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🚨 Section 1: Puppies — Every Few Weeks for the First 4–5 Months</h2>
                <p className="mb-4">
                    Puppy owners often book daycare within days of getting their dog — which I understand. But veterinary care in those first months is critical.
                </p>
                <p className="mb-4">
                    Based on current standards, puppies need vet visits every 3–4 weeks from 6–8 weeks old until about 16–20 weeks. These include:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Physical exam and weight tracking</li>
                    <li>Stool test for parasites</li>
                    <li>Vaccine boosters (Distemper, Parvo, etc.)</li>
                    <li>Rabies vaccine at ~16 weeks (legally required)</li>
                    <li>Optional vaccines: Bordetella, Lepto, Influenza</li>
                </ul>
                <p className="mb-4">
                    At my facility, we require full puppy vaccines before boarding or daycare. And yes — we turn pups away all the time if they’re not done. It’s about safety for everyone.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📅 Section 2: Adult Dogs — The Annual Check-Up Is Mandatory</h2>
                <p className="mb-4">
                    Most adult dogs (age 1–7) should be seen annually for a wellness exam. Even if they seem healthy.
                </p>

                <p className="mb-4">A typical visit includes:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Physical exam (weight, heart, eyes, teeth, skin, etc.)</li>
                    <li>Review of diet, behavior, and medications</li>
                    <li>Vaccines: DHPP (1–3 year), Rabies (as required), Lepto/Bordetella if applicable</li>
                    <li>Heartworm test and fecal exam</li>
                    <li>Optional bloodwork or baseline diagnostics</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Why Annual Visits Still Matter</h3>
                <p className="mb-4">
                    Clients often ask: “They look fine. Do we really need it?” And the answer is always yes.
                </p>
                <p className="mb-4">
                    I’ve seen vets catch early kidney disease, dental issues, and weight gain before it’s visible to the owner. Preventive care prevents emergencies — and it’s why we encourage these visits before dogs board with us.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">👵 Section 3: Senior Dogs — Twice a Year at Minimum</h2>
                <p className="mb-4">
                    For most breeds, “senior” begins at age 7. For large/giant breeds, it’s often 5 or 6. At this point, twice-yearly exams are recommended.
                </p>

                <p className="mb-4">These visits typically include:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Full physical exam</li>
                    <li>Bloodwork every 6–12 months</li>
                    <li>Possible imaging (X-rays, ultrasound)</li>
                    <li>Mobility and pain assessments</li>
                    <li>Nutrition review and supplement guidance</li>
                    <li>Monitoring for vision, hearing, and cognition changes</li>
                </ul>

                <p className="mb-4">
                    I’ve seen a huge difference in quality of life for dogs whose conditions (like arthritis or kidney decline) were caught early. I’m more comfortable boarding seniors when I know their care is active and ongoing.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">🩺 Section 4: Chronic Conditions — Tailor Frequency to the Dog</h2>
                <p className="mb-4">
                    Some dogs — regardless of age — need more frequent care due to medical conditions. For example:
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Dogs with diabetes or thyroid disease: visits every 3–6 months</li>
                    <li>Arthritis or orthopedic cases: joint checks, medication monitoring</li>
                    <li>Allergies or ear infections: frequent visits during flare-ups</li>
                </ul>

                <p className="mb-4">
                    In my experience, many pet owners don’t notice subtle signs: dry coat, scratching, slow movement. I often flag them — and suggest a vet check. If that leads to early diagnosis, everyone wins.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🐕 Section 5: Breed and Size Matter — Tailored Vet Schedules</h2>
                <p className="mb-4">
                    Not all dogs age the same — and certain breeds have specific needs. Here are some examples:
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Large / Giant Breeds</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Age faster — senior status by age 5–6</li>
                    <li>Higher risk of joint problems, heart disease, bloat (GDV)</li>
                    <li>Vets may recommend early imaging and wellness labs</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Brachycephalic Breeds (Short-Nosed Dogs)</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Pugs, Bulldogs, Shih Tzus, Frenchies, etc.</li>
                    <li>Prone to overheating and respiratory stress</li>
                    <li>Vet visits may include airway evaluations or special care before travel</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Small Breeds</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Dental disease shows up earlier — cleanings may be more frequent</li>
                    <li>Common issues: tracheal collapse, patellar luxation, heart murmurs</li>
                    <li>Regular vet checkups can catch and manage these early</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Breed-Specific Screening</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Cavalier King Charles Spaniels: heart screenings</li>
                    <li>Boxers: cardiac ultrasounds for cardiomyopathy</li>
                    <li>Labs & Shepherds: early hip and joint evaluations</li>
                </ul>

                <p className="mb-4">
                    I recommend every pet owner ask their vet: “Are there breed-specific risks I should monitor for?” The earlier you catch them, the better the outcome.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🌍 Section 6: Global Guidelines — How Visit Frequency Varies</h2>
                <p className="mb-4">
                    While my experience is based in the U.S., I’ve worked with clients transferring in from other countries — and it’s helpful to know how standards differ worldwide:
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">United States &amp; Canada</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Puppies: every 3–4 weeks until 16–20 weeks old</li>
                    <li>Adults: annual wellness exam</li>
                    <li>Seniors: every 6 months (or more for large breeds)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">United Kingdom</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Annual checkups for healthy adults</li>
                    <li>Seniors: twice yearly with bloodwork or imaging</li>
                    <li>Similar vaccine timelines to U.S.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Australia &amp; New Zealand</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Similar guidance — more regional flexibility</li>
                    <li>Seniors typically seen every 6 months</li>
                    <li>Vaccines may vary by regional disease risk (e.g. Lepto)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Ireland</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Annual wellness exams common</li>
                    <li>Six-month senior visits encouraged starting age 7+</li>
                </ul>

                <p className="mb-4">
                    Despite local nuance, one theme is universal: puppies need frequent visits, adults need annual checkups, and seniors benefit from twice-a-year care — no matter where you live.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">📑 Section 7: Vaccination &amp; Boarding Documentation — My Facility’s Perspective</h2>
                <p className="mb-4">
                    If there’s one policy I enforce without exception: no current vaccines, no boarding. Period.
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li><strong>Rabies:</strong> Legally required in the U.S., Canada, U.K., Australia, and Ireland. Most dogs receive it at 16 weeks, then again at 1 year, then every 1–3 years depending on vaccine and jurisdiction.</li>
                    <li><strong>Distemper/Parvo (DHPP):</strong> Required by most facilities — and often state law — before boarding is allowed.</li>
                    <li><strong>Bordetella:</strong> Not always legally required, but essential for boarding environments with high dog interaction.</li>
                </ul>

                <p className="mb-4">
                    In my business, we check proof of vaccination every time. If anything is expired, we cannot accept the dog — for their safety, and everyone else’s.
                </p>

                <p className="mb-4">
                    That’s also why I built the Petunia app — to help owners track their dog’s vaccine schedule so they don’t show up out-of-date.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🚀 Section 8: Rockets Don’t Wait — Emergency &amp; Off-Schedule Visits</h2>
                <p className="mb-4">
                    Routine wellness is great — but emergencies don’t care about your calendar.
                </p>

                <p className="mb-4">
                    I remind clients: if your dog is vomiting, collapsing, struggling to breathe, or seems suddenly unwell, call your vet or emergency clinic <strong>immediately</strong>. Don’t wait for the next checkup.
                </p>

                <p className="mb-4">
                    I’ve seen it happen post-boarding — sudden limps, skin issues, behavioral changes. Often, these need quick action. It’s better to be safe and wrong than too late.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📱 Section 9: The Petunia App — Health Reminders That Matter</h2>
                <p className="mb-4">
                    One of the reasons I created the Petunia app was because of how often missed vaccines disrupted boarding plans.
                </p>

                <p className="mb-4">
                    Petunia helps pet parents track:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Vaccine due dates and reminders</li>
                    <li>Rabies tag info</li>
                    <li>Annual vet visits</li>
                    <li>Flea/tick/heartworm schedule</li>
                    <li>Senior dog screenings (labs, X-rays)</li>
                </ul>

                <p className="mb-4">
                    It’s not a vet replacement. It’s just a simple way to stay organized — and avoid last-minute cancellations or health issues that catch people off guard.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">✅ Section 10: Final Thoughts — A Simplified Roadmap</h2>

                <div className="overflow-x-auto mb-6 text-sm">
                    <table className="w-full border border-[#d9cfc2]">
                        <thead className="bg-[#f6efe4]">
                            <tr>
                                <th className="p-2 border border-[#d9cfc2]">Life Stage</th>
                                <th className="p-2 border border-[#d9cfc2]">Visit Frequency</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">Puppy (0–5 months)</td>
                                <td className="p-2 border border-[#d9cfc2]">Every 3–4 weeks for exams &amp; vaccines</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">Adult (1–7 years)</td>
                                <td className="p-2 border border-[#d9cfc2]">Annual wellness visit with booster updates</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">Senior (7+ or 5+ for large breeds)</td>
                                <td className="p-2 border border-[#d9cfc2]">Every 6 months — include bloodwork/imaging</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">Chronic health cases</td>
                                <td className="p-2 border border-[#d9cfc2]">As recommended — typically 3–6 month check-ins</td>
                            </tr>
                            <tr>
                                <td className="p-2 border border-[#d9cfc2]">Emergencies or red flags</td>
                                <td className="p-2 border border-[#d9cfc2]">Immediate visit — don’t wait</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mb-4">
                    Consistent vet care helps prevent pain, reduce costs, and build trust with your boarding or daycare provider. It’s the foundation of long-term pet wellness.
                </p>

                <p className="mb-6">
                    And always remember: talk to your vet. They know your dog best — and can help you tailor the schedule to fit their needs and lifestyle.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📚 References</h2>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-gray-600">
                    <li>AVMA, AAHA, WSAVA: Veterinary visit guidelines</li>
                    <li>British Veterinary Association (BVA), RCVS</li>
                    <li>Australian Veterinary Association (AVA)</li>
                    <li>NZ Vet Association: Senior care schedules</li>
                    <li>CDC, State and local boarding laws</li>
                    <li>Enjuris: Boarding facility liability</li>
                    <li>Rover.com, MoneyHub NZ, Dublin SPCA: Rate and care comparisons</li>
                    <li>WA University, AKC, and PetCare expert articles</li>
                    <li>Petunia internal insights (anonymous boarding trends)</li>
                </ul>

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
