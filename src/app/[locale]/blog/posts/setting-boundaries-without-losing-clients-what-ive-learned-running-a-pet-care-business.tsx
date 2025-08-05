'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function SettingBoundariesWithoutLosingClientsWhatIveLearnedRunningAPetCareBusinessBlog() {
    const locale = useLocale();

    const title = "Setting Boundaries Without Losing Clients: What I’ve Learned Running a Pet Care Business";
    const date = "August 4, 2025";
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
                    content="Learn how to set boundaries with clients in pet care — and protect your time, team, and sanity — without damaging relationships or losing business."
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
                    If you run a service-based business — especially one involving pets, kids, or people&apos;s homes — you&apos;ve probably dealt with this situation: a client casually disregards the appointment time they agreed to.
                </p>
                <p className="mb-4">
                    Recently, someone in a Facebook group for pet business owners posted this:
                </p>
                <blockquote className="italic border-l-4 border-[#d9cfc2] pl-4 mb-4 text-gray-700">
                    “Venting... had a client scheduled for 1 PM pick up today that just texted and told me she will be early at 10:15. I just don’t have the energy today to deal with her... I’m a one-person show on a ranch plus dog business. I haven’t even showered or dressed. Been mucking pens and really wanted to tell her no. I’m so drained today. How do you politely respond to people like this — whether yes or no to their demands?”
                </blockquote>
                <p className="mb-4">
                    I&apos;ve been there. I&apos;ve run a boarding and daycare facility for eight years, and setting boundaries with clients — while staying kind and professional — has been one of the hardest things to learn. But it&apos;s also one of the most important.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📏 Why Boundaries Are So Hard — and So Necessary</h2>
                <p className="mb-4">
                    When you care deeply about your work, it&apos;s natural to want to please everyone. But if you constantly bend your rules, you teach clients that your boundaries aren&apos;t real — and eventually, it takes a toll.
                </p>
                <p className="mb-4">
                    Over the years, I&apos;ve seen how clients who repeatedly ignore appointment times or casually expect schedule changes aren&apos;t just disrespecting me — they&apos;re disrespecting my employees, my business, and the dogs we care for.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🔄 How I Handle Early or Last-Minute Pickup Requests</h2>
                <p className="mb-4">
                    I handle everything on a case-by-case basis and try to act with kindness and sincerity. If someone asks to come early and we have the ability to accommodate it without disruption, we will. But just as often, the answer is no.
                </p>
                <p className="mb-4">
                    In those cases, I respond with something like:
                </p>
                <blockquote className="italic border-l-4 border-[#d9cfc2] pl-4 mb-4 text-gray-700">
                    “Unfortunately we don’t have availability before your scheduled time today, but we’re all set for the 1 PM pickup as planned.”
                </blockquote>
                <p className="mb-4">
                    Short. Polite. Final. You don&apos;t owe anyone a lengthy explanation or apology for respecting your own time and operations.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📋 Why Policies Matter (and Why They Need Enforcement)</h2>
                <p className="mb-4">
                    I use a website and downloadable app for all bookings. Clients must select a specific time. We track infractions over time — whether it&apos;s no-shows, surprise drop-ins, or people repeatedly ignoring our hours.
                </p>
                <p className="mb-4">
                    When someone breaks the rules once, we remind them. When they do it repeatedly, we remove them from our client base — quietly and professionally. You don&apos;t need to be confrontational. You just stop offering them appointments.
                </p>
                <p className="mb-4">
                    Letting those clients go isn&apos;t a loss. It&apos;s a gain — for your team&apos;s sanity, for your business consistency, and for the clients who do respect what you do.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📚 What the Research Says: You’re Not Alone</h2>
                <p className="mb-4">
                    This problem — clients ignoring boundaries — isn&apos;t limited to pet care. Salons, child care, hospitality, and other people-first industries report the same issues: burnout, resentment, and stress when boundaries aren&apos;t honored.
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li><strong>Boundary violations cause burnout.</strong> (Gionta &amp; Sweigart, Strategy+Business)</li>
                    <li><strong>Clear boundaries improve client trust.</strong> (Acara Solutions, 2023)</li>
                    <li><strong>“No” can preserve relationships.</strong> (Harvard Business Review, 2022)</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-8 mb-3">💬 Scripts That Work (Without Making It Personal)</h2>
                <p className="mb-4">
                    Here are a few phrases and responses I&apos;ve developed or seen recommended that help shut down boundary-pushing behavior without sounding aggressive:
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>
                        <strong>Client shows up early without warning:</strong><br />
                        “Thanks for coming by — unfortunately we’re not available until your scheduled pickup at 1 PM. See you then!”
                    </li>
                    <li>
                        <strong>Client asks last-minute to change their time:</strong><br />
                        “We’re fully booked at that time, but we’ll be ready at your original appointment.”
                    </li>
                    <li>
                        <strong>Client keeps pushing after you’ve said no:</strong><br />
                        “I really appreciate you checking, but our schedule doesn’t allow for changes today.”
                    </li>
                    <li>
                        <strong>You’re ready to exit the relationship:</strong><br />
                        “It seems like our scheduling needs might not be the best fit going forward. I can refer you to other providers who may offer more flexibility.”
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">⚠️ The One Time I Didn’t Handle It Well — and What I Learned</h2>
                <p className="mb-4">
                    About six years ago, I had my only real “blowup” with a client. She repeatedly didn&apos;t show up when scheduled, caused chaos for my team, and once lied about what time she had arrived. I called her out, and things escalated.
                </p>
                <p className="mb-4">
                    That interaction stuck with me because I realized something important: even when you&apos;re in the right, being confrontational hurts your brand.
                </p>
                <p className="mb-4">
                    I haven&apos;t had a situation like that since. Not because no one&apos;s crossed a line — but because I&apos;ve learned how to respond without emotion. Now, if someone is routinely inconsiderate, I simply stop letting them book. I don&apos;t argue. I don&apos;t confront. I just quietly move on.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">👥 Respecting Your Team Means Respecting the Schedule</h2>
                <p className="mb-4">
                    When a client disrespects your rules, they&apos;re also disrespecting your employees. I&apos;ve had staff trying to manage check-ins, feedings, and walks — and then a client arrives at a random time with no warning. That creates stress, confusion, and puts pressure on everyone.
                </p>
                <p className="mb-4">
                    In a high-turnover industry, small acts of disrespect add up. It becomes harder to retain great people if they feel like the client always comes first — even when the client is the problem.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🤝 You Don’t Have to Be Rude — Just Consistent</h2>
                <p className="mb-4">
                    A lot of business owners fear setting boundaries because they think it&apos;ll come off as harsh or inflexible. The truth is, you don&apos;t need to be either. The key is consistency.
                </p>
                <p className="mb-4">
                    If you enforce a policy for everyone, clients are more likely to respect it. If you bend the rules for one person, then say no to someone else, you&apos;ll just create confusion and resentment.
                </p>
                <p className="mb-4">
                    And you can be warm and polite while still holding the line. Research shows clear, evenly applied policies increase satisfaction because they create reliability.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧘 Final Thoughts: Don’t Take It Personally</h2>
                <p className="mb-4">
                    When a client ignores your policies, shows up early, or acts entitled — it&apos;s easy to feel frustrated. But I&apos;ve learned not to take it personally. They probably aren&apos;t trying to be rude — they just assume it&apos;s not a big deal.
                </p>
                <p className="mb-4">
                    That&apos;s why we need systems that protect us, not just hope people will follow the rules. And when they don&apos;t? You don&apos;t need to blow up. You don&apos;t need to lecture them. You just quietly move on.
                </p>
                <p className="mb-4">
                    Because at the end of the day, we&apos;re here for the dogs. The ones who wag their tails when their owner finally arrives. The ones who trust us with their daily routine. The ones who need us calm, collected, and focused.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📚 Sources</h2>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-gray-600">
                    <li>Gionta, D., &amp; Sweigart, L. (2022). Strategy+Business</li>
                    <li>Harvard Business Review. Zucker, R. (2022)</li>
                    <li>Acara Solutions. (2023)</li>
                    <li>Williams, G. (2023). American Express Business Class</li>
                    <li>Wood, A. (2024). The Admin Bar</li>
                    <li>McFee, A. (2024). EHL Insights</li>
                    <li>Pallen, P. (2023). Phil Pallen Blog</li>
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
