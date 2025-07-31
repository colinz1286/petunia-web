'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BackToSchoolBlog() {
    const locale = useLocale();

    const title = 'Back to School Season in Dog Daycare and Boarding: What I’ve Learned and What You Can Try';
    const date = 'July 31, 2025';
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
                    content="Real-world insights from a Pittsburgh dog daycare owner on navigating back-to-school season. Learn how to manage early September dips and maximize fall bookings."
                />
            </Head>

            <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
                <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                {/* 🏷️ Category Tags */}
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

                <p className="text-lg mb-4">
                    Each year when August winds down and kids head back to school, pet care businesses like mine experience a subtle — but very real — shift. If you own or manage a dog daycare or boarding facility, you’ve likely seen it too. Routines change, priorities shift, and suddenly the family dog is no longer surrounded by energetic kids all day long.
                </p>

                <p className="mb-4">
                    I run a boarding and daycare facility just outside Pittsburgh. We don’t go all-out with elaborate seasonal promotions or themed events. Instead, we’ve built our business by doing the simple things exceptionally well. But even with that no-frills approach, I’ve found it helpful to understand the <strong>why</strong> behind these seasonal transitions — and how to stay steady or even grow during this period.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📉 The First Week of School Is Often a Dip — And That’s OK</h2>
                <p className="mb-4">
                    Every year, we see a slight slowdown right when school starts. It’s not dramatic, but it’s consistent. For the first week or so of the school year, daycare numbers typically drop off a bit. Parents are adjusting to new routines. Morning chaos becomes the norm — packing lunches, catching buses, starting sports practices.
                </p>

                <p className="mb-4">
                    We’ve learned not to overreact. It’s a short-lived dip, and the slowdown usually corrects itself within a week or two. During that time, we’ll sometimes keep the conversation going with light-hearted Facebook content: a “Back to School Blues” post with a sleepy golden retriever, or a reminder that daycare helps pups adjust to the quiet house again.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📈 Daycare Picks Up Fast — Because Dogs Get Bored Quickly</h2>
                <p className="mb-4">
                    Once families settle into their new school-year rhythm, they quickly realize their dog is at home alone, bored, and maybe a little destructive. We’ve heard the same story many times: "The first week went fine, but now he’s chewing the couch cushions." That’s when clients start calling again.
                </p>

                <p className="mb-4">
                    We don’t need to offer a back-to-school discount to bring them in — we just make sure we’re ready. We keep our playgroups consistent and safe. We post happy photos. We reinforce that our daycare gives dogs structure and stimulation when the house gets quiet.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🏕️ Boarding Remains Steady — Then Surges with Fall Travel</h2>
                <p className="mb-4">
                    Our boarding numbers stay fairly stable during back-to-school. There's sometimes a short dip right when school starts — families are getting settled and not traveling. But by late September and October, we see a steady uptick.
                </p>

                <p className="mb-4">
                    In Pittsburgh, weekend travel, weddings, and football games all create demand. If you're in a similar region, plan accordingly: tighten your weekend boarding schedule, communicate clearly, and make sure you're staffed for fall weekends.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧠 We Don’t Run Promotions — But Here’s What Others Do</h2>
                <p className="mb-4">
                    We’ve chosen not to run any formal back-to-school promotions. Our philosophy is to keep things simple and execute the fundamentals exceptionally well. But I’ve seen other facilities use this season as a smart marketing opportunity.
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>"Buy 5 Days, Get 1 Free" daycare promos</li>
                    <li>Back-to-school themed photo days</li>
                    <li>Fall grooming or bath add-ons</li>
                    <li>Refer-a-friend incentives for busy parents</li>
                </ul>

                <p className="mb-4">
                    If you're experimenting with promotions, try to avoid devaluing your base rate. Focus on bonuses, not discounts.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧰 Simple Ideas for Back-to-School Success</h2>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Share seasonal Facebook/Instagram content to stay top of mind</li>
                    <li>Remind parents how daycare helps bored, anxious dogs adjust to quiet houses</li>
                    <li>Prepare for increased weekend boarding in late September/October</li>
                    <li>Offer value-based promotions like free baths or bonus credits for referrals</li>
                    <li>Stay consistent and over-deliver on the basics</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📬 Final Thoughts</h2>
                <p className="mb-4">
                    Back-to-school season is a short-term shift — not a setback. With a bit of anticipation and a steady approach, you can use it to strengthen client trust and even grow bookings. Whether you’re all-in on seasonal promos or simply staying the course, the goal is the same: show up for your clients and their dogs with consistency, care, and clarity.
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
