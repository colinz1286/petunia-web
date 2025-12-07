'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function WhyHiringFeelsImpossibleInPetCareAndWhatsActuallyWorkedForMeBlog() {
    const locale = useLocale();

    const title = "Why Hiring Feels Impossible in Pet Care — and What’s Actually Worked for Me";
    const date = "July 5, 2025";
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
                    content="Hiring in pet care feels impossible — but it doesn’t have to be. Here’s what’s actually worked for one dog daycare and boarding owner after 8+ years in the industry."
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
                    If you run a dog daycare or boarding facility, you&apos;ve probably felt the same thing I have: hiring used to be hard — now it feels nearly impossible.
                </p>
                <p className="mb-4">
                    A post in a pet care community recently caught my eye. A business owner shared that they were close to shutting down after losing two employees in three weeks and struggling to find anyone new. No one was applying. Interview no-shows were the norm. The few candidates they did get weren&apos;t a fit. They were frustrated, burnt out, and exhausted.
                </p>
                <p className="mb-4">
                    I&apos;ve run my dog boarding and daycare business for over eight years. I&apos;ve seen this problem firsthand. But I haven&apos;t given up — and I want to share what&apos;s worked for me, what hasn&apos;t, and what we know from deeper hiring trends across the industry.
                </p>
                <p className="mb-4">
                    My goal is simple: if you&apos;re in the same boat, I hope you walk away from this with something useful.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📉 The State of Hiring in Pet Care (and Beyond)</h2>
                <p className="mb-4">
                    Let&apos;s start with the data. You&apos;re not imagining it — it really is harder to hire now than it was just a few years ago.
                </p>
                <p className="mb-4">
                    According to the U.S. Chamber of Commerce, the labor force participation rate has still not returned to pre-2020 levels. In pet care and other service-based sectors like hospitality and child care, staffing shortages are particularly acute. A 2023 report from IBPSA noted that over 60% of pet business owners cited hiring and retention as their #1 operational challenge.
                </p>
                <p className="mb-4">
                    Worse, the traditional recruitment methods many of us rely on — Indeed, Facebook groups, college job boards — aren&apos;t performing like they used to. Ghosting is rampant. Research by Robert Half Staffing found that 39% of job candidates admitted to &quot;ghosting&quot; at least one employer in 2022 (up from just 18% a few years earlier).
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🔍 How I&apos;ve Navigated These Same Hiring Challenges</h2>
                <h3 className="text-xl font-semibold mt-6 mb-2">1. I Rely on Part-Time Help — and Make It Worth Their While</h3>
                <p className="mb-4">
                    From day one, I&apos;ve mostly staffed my facility with part-time workers. Some are students, others are coaches or teachers. I offer flexible shifts, work around extracurricular schedules, and give people autonomy over their hours.
                </p>
                <p className="mb-4">
                    I also pay above market when I can — and I make it clear from the start that raises come quickly when someone shows initiative. If they prove themselves in the first 30 to 60 days, I give them a raise. Then again every year after that. I even offer scholarships to some employees, and I check in often to see how I can help them reach their goals — not just mine.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">2. My Best Hires Have Come from Word of Mouth</h3>
                <p className="mb-4">
                    Indeed, Craigslist, and job boards? I still try them, but they haven&apos;t been reliable. My best workers — the ones who have stayed for years — came through referrals. Early on, I focused on people connected to local school districts, especially teachers and coaches.
                </p>
                <p className="mb-4">
                    These candidates already have a baseline of discipline and accountability. They&apos;re often looking for part-time work that&apos;s meaningful, and they take the job seriously because their mentor vouched for them.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">3. I Let People Sink or Swim</h3>
                <p className="mb-4">
                    I don&apos;t micromanage. I give clear expectations and see how people handle them. If they need constant reminders or handholding — they&apos;re not a fit. The good ones? They ask smart questions, look for ways to help, and show up ready to work.
                </p>
                <h2 className="text-2xl font-semibold mt-8 mb-3">📚 What the Research Says About Solving the Hiring Crunch</h2>

                <h3 className="text-xl font-semibold mt-6 mb-2">✅ Retention Starts With Respect and Engagement</h3>
                <p className="mb-4">
                    According to Gallup, employees who feel heard and valued are 4.6x more likely to feel empowered to perform their best. That&apos;s not about perks — it&apos;s about building trust. In pet care, that means listening to your team&apos;s concerns, giving them some say in scheduling, and being human.
                </p>
                <p className="mb-4">
                    The Small Business Association emphasizes that retention in small businesses often hinges on relationships, not just pay.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">✅ Referral-Based Hiring Yields Better Candidates</h3>
                <p className="mb-4">
                    SHRM has found that employee referral programs consistently bring in better-fitting, more loyal hires. Referral candidates often onboard faster and stay longer because someone in your network has already vouched for them.
                </p>
                <p className="mb-4">
                    Try this: reach out to your most dependable employees or former employees and ask, &quot;Do you know anyone who would be a great fit for what we do here?&quot;
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">✅ Hiring Is a Skill — and Owners Can Improve It</h3>
                <p className="mb-4">
                    One overlooked issue is that many pet business owners never had to “learn” hiring. But as your business grows, you need a repeatable system. That might include:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Writing clearer job descriptions that emphasize soft skills</li>
                    <li>Adding a working interview or shadow shift to test fit</li>
                    <li>Streamlining onboarding so new hires feel supported from day one</li>
                </ul>
                <p className="mb-4">
                    Harvard Business Review has written about the “interview illusion” — how traditional interviews often fail to predict job success. Scenario-based questions and short trial shifts work better.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧭 Why I’ve Never Considered Shutting Down</h2>
                <p className="mb-4">
                    The owner who inspired this article said they were close to shutting down because hiring had become so draining. I get it. This work is emotional, physical, and relentless. But I also believe this:
                </p>
                <p className="mb-4">
                    If you&apos;ve built a business that works, then you can build a team that works.
                </p>
                <p className="mb-4">
                    It might take creativity. It might take being flexible in ways you weren&apos;t before. But I&apos;ve never believed that the hiring problem was unsolvable. It just required me to get smarter — and to stop trying to do everything myself.
                </p>
                <p className="mb-4">
                    One of the hardest lessons I&apos;ve had to learn is this: if you want to grow, you have to delegate. Not just the tasks, but the trust.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">✅ Final Thoughts</h2>
                <p className="mb-4">
                    Hiring isn&apos;t going to magically get easier tomorrow. But you don&apos;t have to throw your hands up and accept chaos either.
                </p>
                <p className="mb-4">What&apos;s worked for me is:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Relying on word-of-mouth referrals from trusted people</li>
                    <li>Offering flexibility, mentorship, and quick recognition for good work</li>
                    <li>Letting new hires prove themselves without micromanaging</li>
                    <li>Being willing to walk away from candidates who don&apos;t really want to be there</li>
                </ul>
                <p className="mb-4">
                    At the end of the day, we&apos;re in the people business — both human and dog. While the labor market has shifted, the fundamentals haven&apos;t: good people are out there. They just want to be treated like partners, not cogs.
                </p>
                <p className="mb-6">
                    If this article resonates with you, I hope it gives you something to try — or even just the confidence to keep going. You&apos;re not alone in this.
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
