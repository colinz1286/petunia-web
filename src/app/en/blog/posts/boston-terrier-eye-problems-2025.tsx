'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BostonTerrierEyeProblems2025() {
    const locale = useLocale();

    const title =
        'Boston Terrier Eye Problems (2025): Cherry Eye, Ulcers, Cataracts, Red Flags & Long-Term Care';
    const date = 'November 21, 2025';
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
        breed_specific_guides: 'Breed Specific Guides'
    };

    const description =
        'A complete 2025 guide to Boston Terrier eye problems, including cherry eye, corneal ulcers, cataracts, red-flag symptoms, at-home care, emergency signs, prevention, and long-term management.';

    return (
        <>
            <Head>
                <title>{title} – Petunia Blog</title>
                <meta name="description" content={description} />
                <meta name="robots" content="all" />
            </Head>

            <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">

                {/* Meta */}
                <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                {/* Category Pills */}
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
                        <li><a href="#common" className="underline hover:opacity-80">Common Eye Disorders</a></li>
                        <li><a href="#structure" className="underline hover:opacity-80">Why Boston Eyes Are High-Risk</a></li>
                        <li><a href="#redflags" className="underline hover:opacity-80">Red-Flag Symptoms</a></li>
                        <li><a href="#home" className="underline hover:opacity-80">At-Home Care vs Emergencies</a></li>
                        <li><a href="#prevention" className="underline hover:opacity-80">Prevention Tips</a></li>
                        <li><a href="#outlook" className="underline hover:opacity-80">Long-Term Outlook</a></li>
                        <li><a href="#references" className="underline hover:opacity-80">📚 References</a></li>
                    </ul>
                </nav>

                {/* TLDR */}
                <section id="tl-dr" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
                    <p className="mb-4">
                        Boston Terriers are prone to eye issues because of their large, exposed eyes and shallow sockets.
                        Cherry eye, corneal ulcers, and early cataracts are common. Any redness, squinting, cloudiness,
                        or sudden tearing should be treated as urgent. Preventive care—including lubrication, safe play,
                        and early veterinary visits—can dramatically reduce long-term damage.
                    </p>

                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
                        <strong>Important:</strong> Eye injuries can worsen within hours. When in doubt, call your vet
                        or visit emergency care immediately.
                    </div>
                </section>

                {/* COMMON EYE DISORDERS */}
                <section id="common" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">The Most Common Boston Terrier Eye Disorders</h2>
                    <p className="mb-4">
                        Due to their brachycephalic (flat-faced) structure, Boston Terriers experience eye conditions
                        more frequently than many other breeds. Here are the ones owners encounter most often:
                    </p>

                    <h3 className="font-semibold mb-2">1. Cherry Eye</h3>
                    <p className="mb-3">
                        Cherry eye occurs when the third eyelid gland pops out of place, forming a red mass in the corner
                        of the eye. It&rsquo;s not typically painful but requires veterinary attention—surgery is usually the
                        long-term solution.
                    </p>

                    <h3 className="font-semibold mb-2">2. Corneal Ulcers</h3>
                    <p className="mb-3">
                        Ulcers happen when the eye&rsquo;s surface becomes scratched or damaged. Boston Terriers develop
                        ulcers easily because their eyes protrude and are more exposed to bumps, dust, or paw swipes.
                    </p>

                    <h3 className="font-semibold mb-2">3. Cataracts</h3>
                    <p className="mb-3">
                        Cataracts appear as cloudy, bluish, or opaque areas that block light from reaching the retina.
                        They may be genetic or age-related and often progress slowly, eventually requiring surgery.
                    </p>

                    <p className="text-sm text-gray-700 mt-3">
                        For general health vulnerabilities, see:{' '}
                        <Link
                            href="/en/blog/boston-terrier-health-problems"
                            className="underline hover:opacity-80"
                        >
                            Boston Terrier Health Problems
                        </Link>.
                    </p>
                </section>

                {/* STRUCTURE RISK */}
                <section id="structure" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Why the Boston Terrier Eye Structure Increases Risk</h2>
                    <p className="mb-4">
                        Boston Terriers have large, round eyes and shallow sockets. This combination makes the eyes more
                        exposed and more prone to trauma, dryness, and irritation. A Boston&rsquo;s eyelids also may not
                        fully close during sleep, which increases the opportunity for dryness and abrasions.
                    </p>

                    <p className="mb-3">
                        Their brachycephalic anatomy means tears may not distribute evenly, causing chronic dryness or tear
                        staining, while eyelashes or facial folds may create irritation.
                    </p>

                    <p className="text-sm text-gray-700">
                        Behavior-related rubbing or pawing can also worsen eye problems. See:{' '}
                        <Link
                            href="/en/blog/boston-terrier-behavior-problems-2025"
                            className="underline hover:opacity-80"
                        >
                            Boston Terrier Behavior Problems
                        </Link>.
                    </p>
                </section>

                {/* RED FLAGS */}
                <section id="redflags" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Red-Flag Symptoms Owners Should Never Ignore</h2>
                    <p className="mb-4">
                        Eye changes should be treated as urgent in brachycephalic breeds. If you see any of the following,
                        contact a vet immediately:
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Squinting or keeping an eye closed</li>
                        <li>Cloudiness or a blue-gray tint</li>
                        <li>Visible red swelling in the corner (possible cherry eye)</li>
                        <li>Thick discharge or excessive tearing</li>
                        <li>Sudden light sensitivity</li>
                        <li>Rubbing the face or pawing at eyes</li>
                        <li>Any sign of trauma or contact injury</li>
                    </ul>

                    <p className="text-sm text-gray-700">
                        Anxiety-driven rubbing and stress behaviors discussed here:{' '}
                        <Link
                            href="/en/blog/boston-terrier-separation-anxiety-2025"
                            className="underline hover:opacity-80"
                        >
                            Boston Terrier Separation Anxiety
                        </Link>.
                    </p>
                </section>

                {/* HOME VS EMERGENCY */}
                <section id="home" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">At-Home Management vs When to Seek Emergency Care</h2>
                    <p className="mb-4">
                        Some mild symptoms can be monitored at home, but Boston Terrier eyes deteriorate quickly. Your
                        default mindset should be: &ldquo;When in doubt, get it checked.&rdquo;
                    </p>

                    <h3 className="font-semibold mb-2">Safe At-Home Steps</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Apply vet-approved lubricating eye gel or drops</li>
                        <li>Gently clean tear staining with a soft, damp cloth</li>
                        <li>Use an e-collar if your dog is rubbing the eye</li>
                        <li>Limit exposure to wind or dust</li>
                    </ul>

                    <h3 className="font-semibold mb-2">When to Seek Emergency Care</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Any sign of a corneal ulcer (squinting, pain, cloudiness)</li>
                        <li>Cherry eye that suddenly worsens or recurs</li>
                        <li>Rapid swelling, bleeding, or suspected trauma</li>
                        <li>Sudden vision loss or disorientation</li>
                    </ul>

                    <p className="text-sm text-gray-700">
                        For behavior patterns that worsen eye irritation, see:{' '}
                        <Link
                            href="/en/blog/how-to-stop-a-boston-terrier-from-barking-2025"
                            className="underline hover:opacity-80"
                        >
                            How to Stop a Boston Terrier from Barking
                        </Link>.
                    </p>
                </section>

                {/* PREVENTION */}
                <section id="prevention" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Preventive Care for Healthy Eyes</h2>
                    <p className="mb-4">
                        Proactive care reduces the risk of chronic eye problems. Simple routines can help protect your
                        Boston Terrier&rsquo;s vision long-term.
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-3">
                        <li>Daily lubrication for dogs prone to dryness</li>
                        <li>Cleaning tear staining and checking for irritation</li>
                        <li>Keeping nails short so accidental scratches are less likely</li>
                        <li>Using a harness instead of a collar to reduce facial pressure</li>
                        <li>Avoiding rough play with larger dogs</li>
                        <li>Regular vet visits for early detection</li>
                    </ul>

                    <p className="text-sm text-gray-700">
                        Exercise and stimulation reduce rubbing and stress:{' '}
                        <Link
                            href="/en/blog/boston-terrier-exercise-requirements"
                            className="underline hover:opacity-80"
                        >
                            Boston Terrier Exercise Requirements
                        </Link>.
                    </p>
                </section>

                {/* OUTLOOK */}
                <section id="outlook" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">Long-Term Outlook for Common Eye Conditions</h2>
                    <p className="mb-3">
                        Most Boston Terrier eye problems are very manageable when treated early. Ulcers can heal quickly,
                        cherry eye surgery has a high success rate, and cataract surgery can restore vision in many dogs.
                        The key is early detection and avoiding delays in treatment.
                    </p>

                    <p className="mb-3">
                        Dogs with chronic issues may require lifelong lubrication, periodic exams, or protective strategies
                        during play. With attentive care, most Boston Terriers enjoy excellent long-term vision and comfort.
                    </p>

                    <p className="text-sm text-gray-700">
                        For a deeper understanding of Boston Terrier development and genetics, see:{' '}
                        <Link
                            href="/en/blog/boston-terrier-breed-guide-2025"
                            className="underline hover:opacity-80"
                        >
                            Boston Terrier Breed Guide
                        </Link>.
                    </p>
                </section>

                {/* REFERENCES */}
                <section id="references" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">📚 References</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                        <li>Veterinary ophthalmology research</li>
                        <li>Genetic predisposition studies in brachycephalic breeds</li>
                        <li>Clinical data on cherry eye and corneal ulcer management</li>
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
