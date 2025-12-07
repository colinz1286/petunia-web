'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HandleConflictBlog() {
    const locale = useLocale();

    const title = 'When Clients Cross the Line: How I Handle Conflict, Refunds, and Protecting My Staff';
    const date = 'July 15, 2025';
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
                    content="How one facility owner handles angry clients, verbal abuse, and refund requests—while protecting staff and upholding business values."
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
                    Every now and then, a question pops up in Facebook groups that hits a little too close to home. One recently asked:{' '}
                    <em>
                        &quot;A client wants to take a tip back that he didn’t like his wife left. I offered credit since our system doesn’t allow tip refunds. Then he started screaming profanity at my office staff. What would you do?&quot;
                    </em>
                </p>

                <p className="mb-4">
                    Here&apos;s the truth: you can&apos;t be in the dog boarding and daycare industry—or any service business, really—without running into situations like this. Clients get upset. Some are justified. Others aren&apos;t. But the way you handle those moments says everything about your leadership, your business, and your values.
                </p>

                <p className="mb-4">
                    In my own facility, I&apos;ve never had a client specifically demand a tip be returned. But I&apos;ve absolutely had people request that their daycare or boarding fees be waived after the fact. It&apos;s almost never about the money—it&apos;s about control, frustration, pride, or a lack of understanding. And when those emotions boil over, you better have a plan.
                </p>

                <p className="mb-4 font-semibold">Here&apos;s mine.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">👂 Listen First, React Later</h2>
                <p className="mb-4">
                    It&apos;s taken me years to figure this out, but when someone&apos;s upset, the first step isn&apos;t to fix the problem. The first step is to <em>hear</em> the problem. Not just hear the words—truly listen.
                </p>
                <p className="mb-4">
                    People need to feel acknowledged before they can calm down. That means making eye contact, staying calm, and validating their concern:{' '}
                    <em>&quot;I hear you. That&apos;s frustrating. I understand why this matters to you.&quot;</em> Those are not magic words, but they open the door for solutions. As one source from Help Scout notes,{` `}
                    <em>&quot;people want their feelings acknowledged before they want their issue resolved&quot;</em> (Patterson, 2025).
                </p>
                <p className="mb-4">And sometimes? That&apos;s enough to diffuse the situation on its own.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📉 Match Their Concern—Not Their Energy</h2>
                <p className="mb-4">
                    When clients escalate, it&apos;s tempting to match their tone. But if they&apos;re yelling and you yell back, things only spiral. The trick I&apos;ve learned is to match their <em>level of concern</em>—not their emotional volume.
                </p>
                <p className="mb-4">
                    You stay calm, but you <em>care just as much as they do.</em> You show that you take the issue seriously, even if you disagree with how they&apos;re expressing it. That level of engagement helps them shift out of fight mode. It&apos;s a subtle way of saying:{' '}
                    <em>&quot;You&apos;re right to want answers. I&apos;m here to help you get them.&quot;</em>
                </p>
                <p className="mb-4">
                    Training materials from Heartland emphasize this exact strategy:{' '}
                    <em>&quot;Stay calm, use your body language to project empathy, and guide the conversation toward a solution&quot;</em> (Heartland, 2022).
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">💸 Sometimes, You Just Give the Money Back</h2>
                <p className="mb-4">
                    Here&apos;s a truth that may not sit well with every business owner: sometimes you refund the money not because you were wrong, but because it&apos;s the fastest, cleanest way to make a situation disappear.
                </p>
                <p className="mb-4">
                    I&apos;ve issued refunds plenty of times even when I didn&apos;t have to. Why? Because a few hundred dollars isn&apos;t worth having someone blast your name all over town or leave a flaming Google review.
                </p>
                <p className="mb-4">
                    Of course, if you <em>did</em> mess up, then a refund is the bare minimum. But even when you didn&apos;t, a refund can be a strategic move to protect your reputation. Studies show that customers who have a complaint resolved are more likely to become loyal than those who never had a problem at all (Help Scout, 2023).
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📃 We Don&apos;t Have a Written Refund Policy—And That&apos;s On Purpose</h2>
                <p className="mb-4">
                    In my business, we don&apos;t have a hard-written refund policy. That&apos;s not because we&apos;re disorganized—it&apos;s because we want flexibility. If we cancel a service or can&apos;t perform what we promised, we absolutely issue a full refund. But in other cases, we use our judgment.
                </p>
                <p className="mb-4">
                    This flexibility has allowed us to do what&apos;s <em>right</em> in each situation, not just what&apos;s <em>allowed</em>. And I believe that&apos;s a better long-term approach. That said, our team is fully trained on what&apos;s within their discretion and when to bring leadership in.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🚫 No One Yells at My Staff—Ever</h2>
                <p className="mb-4">
                    Here&apos;s where I draw a hard line. If a client raises their voice, uses profanity, or insults one of my staff—especially our younger high school or college team members—they are <strong>done</strong>. Period.
                </p>
                <p className="mb-4">
                    I will not entertain excuses, apologies, or justifications. That person is immediately removed from our client list and never allowed back. There is <strong>no</strong> circumstance that justifies verbal abuse.
                </p>
                <p className="mb-4">
                    This policy is in place not just for moral reasons—it&apos;s a business decision. As Richard Branson said,{` `}
                    <em>&quot;Take care of your employees and they&apos;ll take care of your customers.&quot;</em> Experts agree: a zero-tolerance policy protects morale and builds trust internally (Patterson, 2025).
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧠 You Can&apos;t Guess What&apos;s Really Going On</h2>
                <p className="mb-4">
                    Clients get upset for a thousand reasons. Maybe they&apos;re embarrassed. Maybe they&apos;re stressed. Maybe they just had a fight with their spouse. You can&apos;t know, and it&apos;s a waste of energy to try.
                </p>
                <p className="mb-4">
                    What matters is that you <em>acknowledge</em> the frustration and handle it with care. If you guess wrong, you might escalate things further. So skip the psychoanalysis. Focus on the present:{' '}
                    <em>&quot;This person is upset. I need to address the concern and move forward.&quot;</em>
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">👋 When It&apos;s Time to Fire a Client</h2>
                <p className="mb-4">
                    There&apos;s a saying I live by: <em>1% of your clients will cause 99% of your problems.</em> And I&apos;ll tell you—letting go of those clients is one of the most freeing things you can do.
                </p>
                <p className="mb-4">
                    If someone is repeatedly difficult, complains about everything, or causes your staff stress every time they walk through the door—they&apos;re not worth it. No matter how much they spend.
                </p>
                <p className="mb-4">
                    Customer service expert Jonathan Lance writes,{` `}
                    <em>&quot;If the abusive cycle doesn&apos;t end, cut them loose&quot;</em> (Ignition, 2023). I agree completely.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🛡️ Empower Your Staff, But Don&apos;t Abandon Them</h2>
                <p className="mb-4">
                    I tell my team this all the time: <em>&quot;If something feels off, or someone is acting irrationally, get me or another owner immediately.&quot;</em>
                </p>
                <p className="mb-4">
                    People in a high state of anger want to speak to someone with authority. That alone can calm things down. Just as important, it gives our young employees a way to remove themselves from confrontation without appearing dismissive.
                </p>
                <p className="mb-4">That&apos;s not just good training—that&apos;s good leadership.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📬 Final Thoughts</h2>
                <p className="mb-4">
                    In this industry, you need thick skin and a soft heart. You need to care deeply about your clients and their pets, but you also need to protect your staff and your sanity.
                </p>
                <p className="mb-4">
                    If you stay calm, listen first, acknowledge emotions, protect your people, and lead with integrity, most conflicts will resolve themselves. And when they don&apos;t? It&apos;s okay to walk away.
                </p>
                <p className="mb-6">Your business doesn&apos;t need every client. It needs the <strong>right</strong> clients.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🔗 Sources</h2>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-gray-600">
                    <li>
                        Heartland Blog (2022). &quot;Conflict resolution strategies to retain your staff and win back angry customers.&quot;
                    </li>
                    <li>
                        Patterson, M. (2025). &quot;Dealing With Abusive Customers.&quot; Help Scout.
                    </li>
                    <li>
                        Help Scout (2023). &quot;Customer Loyalty Stats After Complaint Resolution.&quot;
                    </li>
                    <li>
                        Lance, J. (2023). &quot;How to Deal With Difficult Clients (and Avoid Them).&quot; Ignition Blog.
                    </li>
                    <li>
                        Branson, R. (n.d.). &quot;Take Care of Your Employees, and They&apos;ll Take Care of Your Clients.&quot;
                    </li>
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
