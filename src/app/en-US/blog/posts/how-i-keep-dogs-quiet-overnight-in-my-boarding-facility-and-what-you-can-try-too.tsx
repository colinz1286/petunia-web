'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowIKeepDogsQuietOvernightInMyBoardingFacilityAndWhatYouCanTryTooBlog() {
    const locale = useLocale();

    const title = "How I Keep Dogs Quiet Overnight in My Boarding Facility (And What You Can Try Too)";
    const date = "July 1, 2025";
    const categories = ['boarding', 'owner'];

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
                    content="Learn how to reduce barking and promote calm overnight behavior in your boarding facility — with real-world experience and research-backed techniques."
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

                <p className="mb-4">
                    There&apos;s a very specific feeling that only people in our industry understand: it&apos;s 7:30 AM, two dogs who kept you up for three straight nights barking and whining are finally going home, and all you can do is exhale and try to act like you slept last night.
                </p>

                <p className="mb-4">
                    I&apos;ve been there. But the truth is, I rarely deal with that anymore — not because I magically fixed every dog, but because over the past eight years of running my boarding and daycare business, I&apos;ve built a system that reduces overnight barking before it ever becomes a problem.
                </p>

                <p className="mb-4">
                    Through trial and error, I&apos;ve designed a facility and a policy approach that promotes calm, restful nights — for the dogs, for my team, and for me.
                </p>

                <p className="mb-4">
                    This article is for anyone who&apos;s exhausted, overwhelmed, or looking for realistic ways to create quieter overnights in their pet care facility. I&apos;ll share what I&apos;ve learned, what the research says, and how you can protect your peace without compromising care.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧠 Why Dogs Bark Overnight in the First Place</h2>
                <p className="mb-4">
                    Most dogs bark or whine at night because of:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Separation anxiety</li>
                    <li>Change in environment or routine</li>
                    <li>Overstimulation or under-stimulation during the day</li>
                    <li>Fear of noise, shadows, or isolation</li>
                    <li>General stress from confinement</li>
                </ul>
                <p className="mb-4">
                    Some dogs simply aren&apos;t a good fit for group boarding environments — especially if they&apos;ve never been away from home or are highly dependent on their owners. And that&apos;s OK. Part of running a healthy business is knowing when to say, &quot;this dog isn&apos;t the right fit here.&quot;
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🏠 How I Designed My Facility to Promote Quiet</h2>
                <p className="mb-4">
                    Early on, I noticed a pattern: dogs were calmer depending on where I placed them, who they were kenneled near, and how much sensory stimulation was present. So I started designing around that.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">🛏️ 1. Intentional Room and Kennel Placement</h3>
                <p className="mb-4">
                    We avoid kennels directly across from each other, minimize foot traffic, and stagger placement to reduce tension between reactive dogs. Certain dogs do better closer to human activity. Others need distance from doors or high-energy neighbors.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">🌙 2. Lights Off at Night</h3>
                <p className="mb-4">
                    We fully shut off lights in our sleeping areas at night. Artificial lighting disrupts circadian rhythms. Removing stimulation and giving the brain a &quot;nighttime&quot; cue helps most dogs settle naturally.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">🌬️ 3. White Noise and Fans</h3>
                <p className="mb-4">
                    Fans provide airflow and background sound. White noise masks small sounds — like doors, other dogs, or outside vehicles — that might otherwise spark barking.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">🌸 4. Scent Diffusers</h3>
                <p className="mb-4">
                    We occasionally use calming lavender diffusers. Helpful, but not essential. They contribute to atmosphere but don&apos;t replace sound or lighting cues.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">🔒 5. Proprietary Design Features</h3>
                <p className="mb-4">
                    We&apos;ve added layout and material choices that reduce echo, prevent overstimulation, and promote stillness. These refinements took years and are a key reason our nights stay quiet.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🚫 Our Policy on Disruptive Dogs</h2>
                <p className="mb-4">
                    Not every dog thrives in our setup — and we don&apos;t try to force it. If a dog consistently barks or howls despite support, we let the owner know:
                </p>
                <blockquote className="italic border-l-4 border-[#d9cfc2] pl-4 mb-4 text-gray-700">
                    “We’ve noticed [dog’s name] has had a hard time relaxing overnight, and despite our best efforts, it’s becoming disruptive. This environment may not be the best match for their needs.”
                </blockquote>
                <p className="mb-4">
                    No blame. No shame. But it&apos;s firm. My job is to create the best environment for everyone — dogs and staff included.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🔬 What the Research Says About Keeping Dogs Calm at Night</h2>
                <h3 className="text-xl font-semibold mt-6 mb-2">📉 1. Noise Control Is Key</h3>
                <p className="mb-4">
                    Kennel noise can reach 90–100 decibels, triggering cortisol spikes and increased vocalizing. Using sound-absorbing materials and staggered kennel layouts reduces stress significantly.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">🎶 2. Music and White Noise Help — But Rotate It</h3>
                <p className="mb-4">
                    Classical music and “dog-calming” playlists can reduce barking. But dogs habituate quickly. Rotating sound environments (silence, white noise, music) yields better long-term results.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">💤 3. Light Affects Circadian Rhythms</h3>
                <p className="mb-4">
                    Dim or dark environments improve sleep, mood, and behavior. Veterinary studies confirm that light-dark cycles promote more restful overnight patterns in kenneled dogs.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">🎯 4. Behavioral Conditioning Can Work</h3>
                <p className="mb-4">
                    In some facilities, pairing a chime or light cue with rewards helped dogs associate night with rest. This positive association shaped calmer behaviors over time.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">🐕 5. Persistent Barkers May Need Alternatives</h3>
                <p className="mb-4">
                    If a dog is still vocalizing after environmental and behavioral support, they may be experiencing clinical anxiety. For these dogs, in-home care or veterinary intervention may be more humane than group boarding.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🛠️ What I Do When a Dog Starts Becoming Disruptive</h2>
                <p className="mb-4">
                    If a dog who was previously fine starts barking overnight, I don&apos;t panic. I:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Move them to a quieter room or next to a calming neighbor</li>
                    <li>Shorten their evening activity window</li>
                    <li>Ensure they&apos;ve gone potty, had water, and are comfortable</li>
                    <li>Test different noise or lighting adjustments</li>
                    <li>Document carefully and discuss with the owner</li>
                </ul>
                <p className="mb-4">
                    Often, the owner says, &quot;Oh yeah, they&apos;ve been doing that at home too.&quot; That opens the door for long-term solutions — not short-term frustration.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">💡 Final Thoughts: Protecting the Dogs by Protecting the Environment</h2>
                <p className="mb-4">
                    You can&apos;t train every dog overnight. You can&apos;t fix separation anxiety in 48 hours. But you can build systems that support the majority and protect your sanity.
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Clean, calm, quiet sleeping spaces</li>
                    <li>Intentional kennel placement</li>
                    <li>Consistent night cues (sound, lighting, schedule)</li>
                    <li>Clear, honest communication with owners</li>
                </ul>
                <p className="mb-4">
                    We don&apos;t try to be everything for every dog. We focus on being the right place for dogs that thrive in structure — and we rest easier because of it.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📚 Sources</h2>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-gray-600">
                    <li>Coppola, C. L., et al. (2006). Journal of Applied Animal Welfare Science. <br /> https://pubmed.ncbi.nlm.nih.gov/16649947/</li>
                    <li>Purdue Extension. (2011). Noise Control in Animal Shelters. <br /> https://extension.purdue.edu/extmedia/VA/VA-3-W.pdf</li>
                    <li>Kogan, L. R., et al. (2012). Journal of Veterinary Behavior. <br /> https://pubmed.ncbi.nlm.nih.gov/25708275/</li>
                    <li>PetPace. (2023). Pet Acoustics Stress Study. <br /> https://petpace.com/new-study-finds-pet-acoustics-music-reduces-canine-stress-in-kennels-better-than-classical-music-or-silence/</li>
                    <li>Veterinary Practice. (2021). Sleep Behavior in Dogs. <br /> https://www.veterinary-practice.com/article/the-effect-of-veterinary-clinical-housing-on-animal-behaviour</li>
                    <li>Protopopova, A., &amp; Wynne, C. (2015). Journal of Applied Behavior Analysis. <br /> https://www.researchgate.net/publication/318344450</li>
                    <li>McMillan, F. D. (2019). Separation Anxiety Review. <br /> https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7521022/</li>
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
