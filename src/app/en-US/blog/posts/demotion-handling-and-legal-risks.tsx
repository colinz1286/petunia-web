'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DemotionBlog() {
    const locale = useLocale();

    const title = 'Why I’ve Never Demoted an Employee—and What You Should Know If You Have To';
    const date = 'August 4, 2025';
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
                    content="Learn how one business owner avoids demotions, and what to know legally and ethically if you need to make one. A real-world guide for handling difficult leadership transitions with dignity."
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
                    A question recently came up in one of the pet care forums I follow:{' '}
                    <em>
                        &quot;Has anyone had success demoting a manager without backlash? I.e. they quit, their performance suffers, they’re resentful…&quot;
                    </em>
                </p>

                <p className="mb-4">
                    It&apos;s a question that hits on something most business owners have either faced—or feared. Demotions can be complicated, emotional, and risky.
                </p>

                <p className="mb-4">
                    But here&apos;s the truth: I&apos;ve never once demoted an employee. Not in my dog boarding and daycare business, and not in any of the industries I&apos;ve worked in prior.
                </p>

                <p className="mb-4">
                    That&apos;s not because I haven&apos;t had underperformers. It&apos;s because I&apos;ve developed an approach that helps prevent this kind of issue from happening in the first place.
                </p>

                <p className="mb-4">
                    And yet, I know many business owners don&apos;t have that luxury. So in this article, I&apos;m going to walk you through:
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Why I avoid demotions altogether</li>
                    <li>What the research says about when and how to demote someone</li>
                    <li>The legal landmines you need to avoid</li>
                    <li>How to handle it with dignity if it must be done</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧭 How I Avoid Demotions Entirely</h2>
                <p className="mb-4">
                    In my company, I never promote someone unless I&apos;ve already tested their ability to handle that role.
                </p>
                <p className="mb-4">
                    Instead of promoting based on potential or length of time on the job, I give increasing responsibilities over time. I pay close attention to how they respond—not just to the tasks themselves, but to the pressure, the communication demands, and the expectations that come with a leadership role.
                </p>
                <p className="mb-4">
                    If they&apos;re thriving with those added layers, then yes, I&apos;ll move them into the title and position officially. But by that point, it&apos;s not really a promotion. It&apos;s formalizing what they&apos;ve already proven they can do.
                </p>
                <p className="mb-4">
                    This process eliminates the risk of putting someone into a role they aren&apos;t ready for—and then having to take it back.
                </p>
                <p className="mb-4">
                    Because let&apos;s be honest: a demotion, no matter how diplomatically you present it, feels like a loss of trust. It can be demoralizing, humiliating, and, in some cases, grounds for legal action.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🩹 Still, Sometimes a Demotion Is Necessary</h2>
                <p className="mb-4">
                    Even with the best planning, people sometimes end up in the wrong seat.
                </p>
                <p className="mb-4">
                    They may request a move down due to burnout or personal life changes. The company might restructure and eliminate a role. Or, yes, someone might fail in a position they lobbied hard for.
                </p>
                <p className="mb-4">
                    And when that happens, avoiding the conversation doesn&apos;t help anyone. But how you handle it makes all the difference.
                </p>
                <p className="mb-4">
                    Research shows that demotions can sometimes work—but only when handled with honesty, empathy, and care.
                </p>
                <p className="mb-4">
                    Axcet HR Solutions says, <em>&quot;If handled respectfully, demotion can be a constructive course of action that salvages a struggling employee’s career and preserves morale.&quot;</em> That&apos;s a big <em>if</em>.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">✔️ Step 1: Make Sure the Demotion Is Justified</h2>
                <p className="mb-4">
                    Before you even consider a demotion, you need to ask:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Have we tried coaching and performance improvement plans?</li>
                    <li>Have we clearly communicated expectations and given support?</li>
                    <li>Is there a legitimate business reason for the demotion?</li>
                </ul>
                <p className="mb-4">
                    This is where most employers go wrong. If you haven&apos;t documented performance issues or followed a clear process, a demotion might come across as unfair or retaliatory.
                </p>
                <p className="mb-4">
                    Insperity notes that you should be able to <em>&quot;show a clear, documented pattern of underperformance and the steps taken to address it.&quot;</em>
                </p>
                <p className="mb-4">
                    If you&apos;re demoting someone just to avoid firing them, you need to ask yourself if that&apos;s actually doing them—or your team—any favors.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">⚖️ Step 2: Know the Legal Risks</h2>
                <p className="mb-4">
                    This is the part no one talks about—but they should.
                </p>
                <p className="mb-4">
                    In many jurisdictions, a demotion that changes someone&apos;s pay, title, or responsibilities can legally be viewed as a <em>termination</em> if it&apos;s not handled correctly. That&apos;s called <em>constructive dismissal</em>, and it could cost you big.
                </p>
                <p className="mb-4">
                    According to Achkar Law, constructive dismissal occurs when <em>&quot;an employer unilaterally makes substantial changes to the terms of employment without the employee&apos;s consent.&quot;</em>
                </p>
                <p className="mb-4">
                    This means you need to:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Check employment contracts before changing job titles or compensation</li>
                    <li>Give written notice of any changes to pay, in advance</li>
                    <li>Be careful about timing—if someone just returned from leave, filed a complaint, or asked for accommodation, your actions may look retaliatory</li>
                </ul>
                <p className="mb-4">
                    Bottom line? <strong>You need a paper trail.</strong> Consult an employment lawyer before taking action if there&apos;s any doubt.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📐 Step 3: Prepare a Role That Sets Them Up for Success</h2>
                <p className="mb-4">
                    A demotion should never be a punishment. It should be a move toward a role that better fits the employee&apos;s abilities and the company&apos;s needs.
                </p>
                <p className="mb-4">
                    If you can&apos;t clearly define the new role—and show why it matters—you&apos;re just shuffling them into a dead-end.
                </p>
                <p className="mb-4">
                    Be transparent about responsibilities, compensation, reporting structure, and opportunities for growth. Set clear expectations from day one.
                </p>
                <p className="mb-4">
                    And for the record—if you&apos;re cutting pay, you must follow state and federal notice requirements. According to Lewis Brisbois LLP, <em>&quot;many states require written notice prior to any pay reduction, typically before the next scheduled payday.&quot;</em>
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🗣️ Step 4: Communicate the Change With Honesty and Empathy</h2>
                <p className="mb-4">
                    This conversation can&apos;t be outsourced. It needs to come directly from you or the highest appropriate leader in the organization.
                </p>
                <p className="mb-4">Start with the truth:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Acknowledge that this is a hard conversation.</li>
                    <li>Explain clearly and calmly what&apos;s happening and why.</li>
                    <li>Emphasize that the goal is to help the employee succeed, not to punish.</li>
                </ul>
                <p className="mb-4">
                    Avoid vague statements like, <em>&quot;This just isn&apos;t working out,&quot;</em> or emotionally loaded ones like, <em>&quot;You&apos;ve failed.&quot;</em>
                </p>
                <p className="mb-4">
                    Instead, say something like:
                </p>
                <blockquote className="border-l-4 border-[#d9cfc2] pl-4 italic text-gray-700 mb-4">
                    &quot;We&apos;ve talked through the challenges in this role, and despite efforts to support your success, the results haven&apos;t aligned with what the position requires. Rather than parting ways, we&apos;d like to offer a role that better matches your strengths and gives you a clearer path forward.&quot;
                </blockquote>
                <p className="mb-4">
                    Have a formal letter ready with all the details in writing, and—critically—get the employee to sign it.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧭 Step 5: Support Them After the Transition</h2>
                <p className="mb-4">What happens after the demotion is just as important as how you deliver the news.</p>
                <p className="mb-4">You need a reintegration plan. That means:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Setting new performance goals</li>
                    <li>Checking in regularly</li>
                    <li>Providing emotional and professional support</li>
                    <li>Protecting their dignity in front of peers</li>
                </ul>
                <p className="mb-4">
                    If you treat the demotion as a fresh start—and not a disciplinary action—there&apos;s a much better chance they&apos;ll see it that way too.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📚 Step 6: Learn From the Experience</h2>
                <p className="mb-4">
                    Demotions aren&apos;t fun. They&apos;re a signal that something broke down—whether in communication, support, hiring, or promotion.
                </p>
                <p className="mb-4">If you had to demote someone, ask yourself:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Did we promote them too quickly?</li>
                    <li>Did we give enough training or support?</li>
                    <li>Were there warning signs we ignored?</li>
                </ul>
                <p className="mb-4">Use the experience to build better systems for the future.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">💬 What I Tell Other Business Owners</h2>
                <ol className="list-decimal pl-5 space-y-2 mb-6">
                    <li><strong>Don&apos;t promote anyone unless you&apos;re sure they&apos;re already doing the job.</strong></li>
                    <li><strong>If you must demote, do it with dignity.</strong> Frame it as a move <em>toward</em> something, not just <em>away</em> from failure.</li>
                    <li><strong>Document everything.</strong> Treat it like you would a termination.</li>
                    <li><strong>Be realistic.</strong> Sometimes demotions lead to resignations. Don&apos;t sugarcoat that.</li>
                    <li><strong>Put people in situations where they discover the truth for themselves.</strong></li>
                </ol>
                <p className="mb-6">
                    In the end, you have to protect your business, your staff, and your standards. But you can do that without wrecking someone&apos;s confidence or inviting a lawsuit.
                </p>
                <p className="mb-6">
                    And maybe, if you handle it right, a demotion doesn&apos;t have to be a failure. It can be the beginning of a better fit—for everyone.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🔗 Sources</h2>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-gray-600">
                    <li>Shefchik, A. (2023). <em>Demotion</em>. Eddy HR Encyclopedia.</li>
                    <li>Coleman, J., SPHR (2025). <em>How to Demote an Employee</em>. Axcet HR Solutions.</li>
                    <li>Dilliard, J. (2024). <em>Demoting an Employee: What to Know and Watch Out For</em>. Insperity Blog.</li>
                    <li>Lewis Brisbois Legal Blog (2023). <em>Documenting and Communicating Demotions</em>.</li>
                    <li>Achkar Law (2024). <em>Employee Demotions: Understanding the Risks</em>.</li>
                    <li>The Labor Law Center (2023). <em>Wrongful Demotion Explained</em>.</li>
                    <li>Bartlett, A. (2024). <em>Key Demotion Questions for Small Business Owners</em>. Genovations HR.</li>
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
