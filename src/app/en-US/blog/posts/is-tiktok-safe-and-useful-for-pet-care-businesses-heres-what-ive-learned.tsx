'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function IsTiktokSafeAndUsefulForPetCareBusinessesHeresWhatIveLearnedBlog() {
    const locale = useLocale();

    const title = "Is TikTok Safe — and Useful — for Pet Care Businesses? Here’s What I’ve Learned";
    const date = "June 26, 2025";
    const categories = ['boarding', 'owner', 'sitter', 'walker'];

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
                    content="Is TikTok helpful for dog daycare or boarding businesses? Explore the pros, cons, and real-world ROI of using TikTok as a pet care business owner."
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
                    Every few months, I see a version of this question pop up in Facebook groups for dog boarding and daycare owners:
                </p>
                <blockquote className="italic border-l-4 border-[#d9cfc2] pl-4 mb-4 text-gray-700">
                    “Is TikTok safe to use for your business? Is it good? Does it help?”
                </blockquote>
                <p className="mb-4">
                    The short answer? It depends on what you’re trying to accomplish.
                </p>

                <p className="mb-4">
                    We’ve used TikTok before in our business — not often, and definitely not to drive bookings. For us, it’s been entirely for entertainment. Fun clips. Playgroup highlights. Maybe the occasional lighthearted trend.
                </p>
                <p className="mb-4">
                    But when it comes to attracting real, paying clients for our boarding and daycare services? I haven’t seen TikTok move the needle.
                </p>

                <p className="mb-4">
                    After years of testing and watching the landscape evolve, I still believe the best tools for growing a local pet care business are a strong website and great Google reviews. Everything else is optional — including TikTok.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📱 What TikTok Is Good At (and What It’s Not)</h2>
                <p className="mb-4">
                    TikTok is built for one thing: short-form, addictive, highly engaging video. It shows users a nonstop stream of personalized content — often from creators they don’t follow. That’s different from Facebook or Instagram, where you usually see posts from people you know.
                </p>
                <p className="mb-4">
                    On TikTok, anyone can go viral. Sounds great — and it is — if you’re selling beauty products, home gadgets, or lifestyle hacks.
                </p>

                <p className="mb-4">
                    But if you run a reputation-based, local service business like boarding or daycare? Your ideal client isn’t scrolling TikTok at 2 a.m. planning where to book next weekend. They’re searching Google. Reading reviews. Asking friends.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🎯 Our Real-World Experience With TikTok</h2>
                <p className="mb-4">
                    We’ve posted playgroup clips and fun moments. We’ve gotten likes, comments, and laughs. But we haven’t seen it convert to bookings.
                </p>
                <p className="mb-4">
                    Why? Because most people on TikTok — especially in pet content — are watching for entertainment, not researching services. The platform’s audience also skews young.
                </p>

                <p className="mb-4">
                    According to Pew Research, nearly 60% of TikTok users in the U.S. are under 30. Most of our actual paying clients — the ones uploading vaccine records and paying invoices — are 30 to 60 years old. They find us on Google, Facebook, Instagram, or by referral.
                </p>

                <p className="mb-4">
                    That’s why we invest in:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Keeping our Google Business profile updated</li>
                    <li>Requesting detailed reviews from happy clients</li>
                    <li>Maintaining a clean, clear website with photos and pricing</li>
                    <li>Posting occasionally on Facebook and Instagram</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🔐 But Is TikTok Safe?</h2>
                <p className="mb-4">
                    Content-wise, TikTok is safe for businesses. You control what you post. But from a security and privacy standpoint, it’s drawn criticism — including from U.S. agencies.
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4 text-sm text-gray-600">
                    <li>60% of Americans say TikTok poses national security risks</li>
                    <li>It’s banned on military and some government devices</li>
                    <li>Lawsuits cite alleged data collection violations</li>
                </ul>

                <p className="mb-4">
                    Personally, I’m not worried — we don’t store sensitive data on the app. But public perception matters. If you serve cautious or privacy-conscious clients, TikTok might not send the message you want.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">📈 What the Data Says: TikTok and Business Growth</h2>
                <p className="mb-4">
                    So what does the research actually say about TikTok’s effectiveness for small businesses?
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">✅ The Good:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Over 7 million businesses use TikTok globally</li>
                    <li>Some brands have seen dramatic sales increases from viral videos</li>
                    <li>TikTok contributed $24 billion to the U.S. economy in 2023</li>
                </ul>

                <p className="mb-4">
                    But here’s the catch: nearly all of that success came from e-commerce, not local pet care businesses.
                </p>

                <p className="mb-4">
                    According to the U.S. Chamber of Commerce, TikTok works best for:
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Consumer goods</li>
                    <li>Artists and creators</li>
                    <li>Local boutiques</li>
                    <li>Food and beverage services</li>
                </ul>

                <p className="mb-4">
                    Pet care isn’t on the list. And when pet-related content is mentioned, it’s usually about entertainment — not converting views into paying clients.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">⏳ TikTok ROI: Is It Worth the Time?</h2>
                <p className="mb-4">
                    Creating good TikToks takes time:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Posting several times per week</li>
                    <li>Following trends and editing videos quickly</li>
                    <li>Replying to comments and engaging consistently</li>
                    <li>Being creative — funny, original, and clever</li>
                </ul>

                <p className="mb-4">
                    If content creation is something you enjoy, go for it. But if you’re already stretched thin running a pet care business, ask yourself honestly: is this your best use of time?
                </p>

                <p className="mb-4">
                    From what I’ve seen, most of us don’t need another app. We need better systems, cleaner communication, and strong local trust.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧭 So Should You Use TikTok for Your Business?</h2>

                <h3 className="text-xl font-semibold mt-6 mb-2">✅ Yes, if:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>You enjoy making video content</li>
                    <li>You want to build brand awareness or community</li>
                    <li>You’re in a trendy, urban market with a young demographic</li>
                    <li>You repurpose videos on Instagram Reels, Stories, and YouTube Shorts</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">🚫 No, if:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Your clients are 30+ and don’t use TikTok</li>
                    <li>You’re already short on time or staff</li>
                    <li>You depend on reputation and local word-of-mouth</li>
                    <li>You’re hoping TikTok will bring real bookings</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🚀 What Actually Works to Grow a Pet Care Business</h2>
                <p className="mb-4">
                    If I had to rank what moves the needle for us, it’d be:
                </p>

                <ol className="list-decimal pl-5 space-y-2 mb-4">
                    <li>Google Reviews — 90% of new clients mention reading them</li>
                    <li>A clean, updated website — with service info, photos, and pricing</li>
                    <li>Facebook and Instagram — where your real clients already are</li>
                    <li>Referrals — from vets, groomers, trainers, and current clients</li>
                    <li>Timely communication — clear replies, clean invoices, and professionalism</li>
                    <li>TikTok (maybe) — for fun or visibility, not core growth</li>
                </ol>

                <h2 className="text-2xl font-semibold mt-8 mb-3">✅ Final Thoughts</h2>
                <p className="mb-4">
                    TikTok isn’t the enemy — and it’s not a magic bullet either. It can be a great tool for creativity and awareness. But it’s not a substitute for strong fundamentals.
                </p>
                <p className="mb-4">
                    If you want to grow your pet care business sustainably:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Build trust</li>
                    <li>Keep your website clean and current</li>
                    <li>Respond quickly and communicate clearly</li>
                    <li>Do great work — and let your reviews speak for you</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📚 References</h2>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-gray-600">
                    <li>Pew Research Center. (2023). TikTok and National Security. https://www.pewresearch.org/</li>
                    <li>U.S. Department of Defense. (2023). TikTok Cybersecurity Risk. https://www.defense.gov/</li>
                    <li>Associated Press. (2023). TikTok Ban Discussions. https://apnews.com/</li>
                    <li>Oxford Economics. (2024). TikTok’s U.S. Economic Impact. https://www.oxfordeconomics.com/</li>
                    <li>U.S. Chamber of Commerce. (2024). TikTok Tips for Business. https://www.uschamber.com/</li>
                    <li>SCORE. (2023). TikTok and Small Business. https://www.score.org/</li>
                    <li>SBECouncil. (2024). TikTok Business Impact. https://sbecouncil.org/</li>
                    <li>Basis Technologies. (2023). TikTok Trends. https://basis.com/blog/</li>
                    <li>Pet Care Marketing Report. (2024). TikTok vs Instagram. https://www.petcaremarketingreport.com/</li>
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
