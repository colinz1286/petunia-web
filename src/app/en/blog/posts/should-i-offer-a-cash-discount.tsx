'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ShouldIOfferACashDiscount() {
    const locale = useLocale();

    const title =
        'Should You Offer a Cash Discount in the Dog Industry? The Real-World Tradeoffs Nobody Talks About';
    const date = 'December 30, 2025';
    const categories = [
        'owner',
        'boarding',
        'daycare',
        'sitter',
        'walker',
        'breeder',
    ] as const;

    const categoryLabels: Record<string, string> = {
        owner: 'Pet Owners',
        boarding: 'Boarding',
        daycare: 'Daycare',
        sitter: 'Pet Sitters',
        walker: 'Dog Walkers',
        breeder: 'Breeders',
        vet: 'Veterinary Clinics',
        rescue: 'Rescues',
        trainer: 'Trainers',
    };

    const description =
        'A practical, dog-industry–specific discussion on whether offering a cash discount actually helps your business, the hidden downstream effects many owners overlook, and how to think through the decision without judgment or dogma.';

    return (
        <>
            <Head>
                <title>{title} – Petunia Blog</title>
                <meta name="description" content={description} />
                <meta name="robots" content="index,follow" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>

            <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
                {/* Meta */}
                <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                {/* Category pills */}
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

                {/* Intro */}
                <section className="mb-10">
                    <p className="mb-4">
                        If you run a dog-related business long enough—boarding, daycare,
                        grooming, walking, sitting, training—you will almost certainly be
                        asked some version of this question:
                    </p>
                    <p className="mb-4">
                        <em>
                            “Is it cheaper if I pay cash?”
                        </em>
                    </p>
                    <p className="mb-4">
                        Over the years, I have seen many people in the dog industry offer a
                        lower price for cash payments. I have also seen many people
                        intentionally avoid doing so. This article is not about declaring
                        one approach right and the other wrong.
                    </p>
                    <p>
                        Instead, this is an attempt to put real-world considerations on the
                        table—things that often don’t come up in casual conversations about
                        payment methods, but absolutely show up later in the life of a
                        business.
                    </p>
                </section>

                {/* CONSULTING CTA — TOP OF ARTICLE */}
                <section className="mb-8">
                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
                        <p>
                            If you’re working through pricing, payment policies, or bigger structural
                            decisions in your dog business and want a second set of eyes, I do offer
                            one-on-one consulting. There’s no sales pitch here and no obligation —
                            just practical conversations grounded in real operations. If that would
                            be helpful, you’re welcome to email me directly at{' '}
                            <a
                                href="mailto:admin@petuniaopets.com"
                                className="underline hover:opacity-80"
                            >
                                admin@petuniapets.com
                            </a>.
                        </p>
                    </div>
                </section>

                {/* SECTION 1 */}
                <section id="what-is-a-cash-discount" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        1) What a “Cash Discount” Actually Is
                    </h2>

                    <p className="mb-3">
                        In practice, a cash discount usually means one simple thing: there
                        are two prices for the same service.
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>
                            A higher price if the client pays by credit or debit card
                        </li>
                        <li>
                            A lower price if the client pays with physical cash
                        </li>
                    </ul>

                    <p className="mb-3">
                        For example, a night of boarding might be advertised as $32 per
                        night, but quietly becomes $30 if the client pays in cash. The
                        service does not change. The dog does not receive different care.
                        Only the payment method does.
                    </p>

                    <p className="mb-3">
                        It’s also important to clarify what a cash discount is{' '}
                        <strong>not</strong>.
                    </p>

                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            It is not the same as raising your base prices slightly to absorb
                            card processing fees
                        </li>
                        <li>
                            It is not the same as transparently passing along a card surcharge
                            where legally permitted
                        </li>
                        <li>
                            It is not the same as offering real discounts for prepaying,
                            buying packages, or committing to memberships
                        </li>
                    </ul>

                    <p className="mt-3">
                        A cash discount is unique because it creates two prices for the same
                        work, based solely on how money changes hands.
                    </p>
                </section>

                {/* SECTION 2 */}
                <section id="why-people-offer-cash-discounts" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        2) Why Many Dog Businesses Offer Cash Discounts
                    </h2>

                    <p className="mb-3">
                        To have an honest conversation, it’s important to fairly represent
                        why cash discounts exist in the first place. For many dog industry
                        operators, the motivation is not shady or irresponsible—it’s
                        practical.
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>
                            Credit card processing fees are real, and they add up quickly with
                            volume
                        </li>
                        <li>
                            Many pet-care businesses operate on tighter margins than people
                            assume
                        </li>
                        <li>
                            Cash payments eliminate chargebacks and some forms of payment
                            disputes
                        </li>
                        <li>
                            Some clients genuinely prefer cash and feel appreciated when it
                            is accepted
                        </li>
                        <li>
                            Offering a cash discount can feel like an easy way to keep prices
                            competitive without raising headline rates
                        </li>
                    </ul>

                    <p>
                        Especially for solo operators or very small businesses, a few
                        percentage points in fees can feel meaningful. From that
                        perspective, a cash discount can seem like a simple, harmless
                        optimization.
                    </p>
                </section>

                {/* SECTION 3 */}
                <section id="tax-and-optics" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">
                        3) The Tax and Optics Question (Without Moral Judgments)
                    </h2>

                    <p className="mb-3">
                        This is where the conversation often gets uncomfortable, so it’s
                        worth addressing it carefully.
                    </p>

                    <p className="mb-3">
                        Even if you properly claim your cash income, offering a cash
                        discount can <em>signal</em> something else entirely to clients,
                        employees, lenders, or future partners.
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>
                            Some people will assume cash is not being reported, whether that
                            is true or not
                        </li>
                        <li>
                            Others may quietly question the professionalism or formality of
                            the business
                        </li>
                        <li>
                            Staff may become confused about what is official versus informal
                        </li>
                    </ul>

                    <p className="mb-3">
                        Perception matters in business, even when it is unfair. If most of
                        your revenue is cash and your reported income does not line up
                        cleanly with your expenses, it can also raise flags on paper, even
                        when nothing improper is happening.
                    </p>

                    <p>
                        This article is not about telling anyone how to handle their taxes.
                        It is about recognizing that payment structures send signals—some
                        intended, some not—and those signals can have consequences later.
                    </p>
                </section>

                {/* SECTION 4 */}
                <section id="growth-and-banking" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        4) The Growth and Banking Issue (Where This Can Quietly Backfire)
                    </h2>

                    <p className="mb-3">
                        If you never plan to expand, never plan to take on debt, and never
                        plan to buy property, then the “banking” angle might feel irrelevant.
                        But in the real world, many dog-industry businesses eventually hit a
                        point where growth requires capital.
                    </p>

                    <p className="mb-3">
                        That could look like renting a larger space, building an addition,
                        upgrading kennels, adding grooming stations, installing better
                        flooring, improving drainage, adding outdoor runs, renovating for
                        sound control, or simply hiring enough staff to serve more clients
                        without burning yourself out.
                    </p>

                    <p className="mb-3">
                        When you go to a bank (or even many private lenders), you are not
                        primarily judged on your passion, your work ethic, or the fact that
                        you care deeply about animals. You are judged on what your business
                        looks like on paper.
                    </p>

                    <p className="mb-3">
                        In many cases, that means banks will evaluate a combination of:
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>
                            Your tax returns (often multiple years)
                        </li>
                        <li>
                            Consistent top-line revenue (not just one strong month)
                        </li>
                        <li>
                            Profit margins (or at least a clear ability to service debt)
                        </li>
                        <li>
                            Cash flow stability (how predictable your income is)
                        </li>
                        <li>
                            Existing debt obligations and business expenses
                        </li>
                    </ul>

                    <p className="mb-3">
                        Here is the hard part that many owners don’t realize until they are
                        sitting in the meeting: you can’t have it both ways forever.
                    </p>

                    <p className="mb-3">
                        Many small businesses spend years trying to show the lowest possible
                        taxable income. Again, this article is not moralizing about taxes.
                        The point is simply this: if the numbers on your tax returns make
                        it look like your business barely makes money, lenders may treat
                        it as risky, even if you personally feel flush month to month.
                    </p>

                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
                        <strong>Real-world tradeoff:</strong> If you minimize reported income,
                        you may minimize what you qualify for when you need capital.
                    </div>

                    <p className="mb-3">
                        Cash discounts can intensify this problem because they often reduce
                        the amount of revenue you can easily prove in a clean, automated
                        way. Card payments create a paper trail. They show up consistently
                        in merchant statements. They reconcile cleanly with bookkeeping. It
                        is easier to demonstrate stable income when most of it is captured
                        automatically and consistently.
                    </p>

                    <p className="mb-3">
                        Even if you do everything properly with cash, you’re still choosing
                        a system that creates more work to prove your revenue later.
                    </p>

                    <p>
                        The simple idea here is: <strong>every dollar of provable revenue helps</strong>.
                        If your long-term vision includes scaling, expanding, or getting
                        approved for financing, the convenience of cleaner revenue reporting
                        is not a small detail—it can be the difference between “approved”
                        and “come back next year.”
                    </p>
                </section>

                {/* SECTION 5 */}
                <section id="operational-friction" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        5) Operational Friction You’re Buying With the Discount
                    </h2>

                    <p className="mb-3">
                        This is the section that matters most day to day. Because even if
                        you ignore taxes and ignore banks completely, cash discounts still
                        create friction inside operations.
                    </p>

                    <p className="mb-3">
                        The dog industry is already full of moving parts: scheduling,
                        feeding instructions, medications, behavioral notes, pickup windows,
                        client communication, staffing, cleaning, emergencies, and all the
                        normal chaos that comes with live animals.
                    </p>

                    <p className="mb-3">
                        Cash discounts add something subtle but very real: more ways for a
                        normal transaction to go sideways.
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>
                            People forget cash and say: <em>&ldquo;I&rsquo;ll bring it tomorrow.&rdquo;</em>
                        </li>
                        <li>
                            People promise: <em>&ldquo;I&rsquo;ll mail it to you.&rdquo;</em> (which usually means delay)
                        </li>
                        <li>
                            People ask if they can pay later because they drove across town and didn’t bring cash
                        </li>
                        <li>
                            Staff get stuck being the “bad guy” enforcing policy at pickup
                        </li>
                    </ul>

                    <p className="mb-3">
                        And now you have a new set of tasks that do not generate revenue,
                        but absolutely take time and mental energy:
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>
                            Tracking who paid what
                        </li>
                        <li>
                            Tracking who still owes
                        </li>
                        <li>
                            Confirming which rate applied (cash rate vs card rate)
                        </li>
                        <li>
                            Following up when someone “forgets” or delays
                        </li>
                        <li>
                            Handling awkward conversations when someone thinks they already paid
                        </li>
                    </ul>

                    <p className="mb-3">
                        None of these problems are guaranteed. But they happen often enough
                        that they should be part of the decision, especially if you’re busy
                        or growing.
                    </p>

                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mb-4">
                        <strong>A simple framing:</strong> A cash discount can save you a
                        small percentage in fees, but it may cost you time, attention, and
                        payment certainty. Whether that trade is worth it depends on how
                        you value your time and how much chaos you can tolerate.
                    </div>

                    <p>
                        As your life gets busier—more clients, more staff, more family
                        responsibilities—most owners naturally start prioritizing systems
                        that remove problems. That is a big reason I lean away from cash
                        discounts: they can create more “decision points” in a business that
                        already has too many.
                    </p>
                </section>

                {/* SECTION 6 */}
                <section id="pricing-psychology" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">
                        6) Client Behavior and Pricing Psychology
                    </h2>

                    <p className="mb-3">
                        Pricing isn’t just math. Pricing trains clients on how to interact
                        with you.
                    </p>

                    <p className="mb-3">
                        When you create two prices, you introduce a new client habit: they
                        start looking for the cheaper path.
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>
                            <em>&ldquo;What&rsquo;s the cheaper way to pay?&rdquo;</em>
                        </li>
                        <li>
                            <em>&ldquo;Can I get the cash price if I pay with Venmo?&rdquo;</em>
                        </li>
                        <li>
                            <em>&ldquo;Can I get the cash price if I pay next time?&rdquo;</em>
                        </li>
                        <li>
                            <em>&ldquo;Can I pay half cash and half card?&rdquo;</em>
                        </li>
                    </ul>

                    <p className="mb-3">
                        Again, none of these questions are “bad.” Clients are doing what
                        humans do: they are responding to incentives. But it matters because
                        every extra negotiation point is an opportunity for misunderstanding,
                        resentment, or special treatment expectations.
                    </p>

                    <p className="mb-3">
                        Two-tier pricing can also subtly shift the type of clients you
                        attract. If your marketing message becomes “we are cheaper if you
                        pay the right way,” you may pull in more price-sensitive clients.
                        Price-sensitive clients are not automatically bad clients, but they
                        often create more edge cases:
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>
                            More requests for exceptions
                        </li>
                        <li>
                            More questions about discounts and deals
                        </li>
                        <li>
                            More pushback on policies, cancellation rules, late fees, or
                            deposit requirements
                        </li>
                        <li>
                            More time spent explaining why something costs what it costs
                        </li>
                    </ul>

                    <p className="mb-3">
                        On the other hand, consistent pricing has a quiet power. When the
                        price is the price—no matter how someone pays—you remove negotiation.
                        You remove &ldquo;special case&rdquo; expectations. You reduce confusion.
                        You reduce staff conflict. You make your business easier to run.
                    </p>

                    <p>
                        In my opinion, this is one of the most underrated benefits of a
                        single price: it protects your attention and reinforces clear
                        boundaries. And in the dog industry, boundaries are often the
                        difference between a calm business and a stressful one.
                    </p>
                </section>

                {/* SECTION 7 */}
                <section id="professionalism-and-brand" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        7) The Professionalism and Brand Consistency Angle
                    </h2>

                    <p className="mb-3">
                        I want to be careful here, because there are plenty of honest,
                        hardworking dog professionals who offer cash discounts and run
                        excellent businesses. This is not about judging character.
                    </p>

                    <p className="mb-3">
                        This section is about something that is often uncomfortable but
                        extremely real: <strong>perception</strong>.
                    </p>

                    <p className="mb-3">
                        When a client interacts with your business, they are forming
                        conclusions constantly—about how organized you are, how reliable
                        you are, how consistent your policies are, and whether they can
                        trust you with something as important as their dog.
                    </p>

                    <p className="mb-3">
                        Pricing is part of that experience. And a single, consistent price
                        communicates a lot without you having to say anything.
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>
                            <strong>Confidence:</strong> the price is the price, because you
                            know the value of your work
                        </li>
                        <li>
                            <strong>Stability:</strong> clients don’t have to wonder what
                            changes based on method or mood
                        </li>
                        <li>
                            <strong>Less chaos:</strong> fewer exceptions, fewer negotiations,
                            fewer &ldquo;special cases&rdquo;
                        </li>
                    </ul>

                    <p className="mb-3">
                        Two-tier pricing can communicate something different—even if you
                        don’t intend it to. Again, not always, and not universally, but
                        it can read as:
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>
                            <strong>Informal:</strong> like the business is run more by
                            conversation than by systems
                        </li>
                        <li>
                            <strong>Inconsistent:</strong> as if there are hidden rules that
                            clients need to learn
                        </li>
                        <li>
                            <strong>Off-the-books vibes:</strong> the feeling of{' '}
                            <em>&ldquo;this is how we do it when nobody&rsquo;s looking&rdquo;</em>
                        </li>
                    </ul>

                    <p className="mb-3">
                        I don’t like that this is true, and I don’t think it’s fair. But it
                        is something to consider, because clients are not just buying a
                        service. They are buying peace of mind.
                    </p>

                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
                        <strong>Bottom line:</strong> Even when you are doing everything
                        correctly, the way your pricing is structured can shape how serious
                        and stable your business feels from the outside.
                    </div>
                </section>

                {/* SECTION 8 */}
                <section id="safety-and-risk" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        8) Safety and Risk Considerations (Especially in Dog Businesses)
                    </h2>

                    <p className="mb-3">
                        Dog businesses are not like selling t-shirts online. You are running
                        a physical operation with staff, customers coming and going, and
                        animals on-site. That environment already has enough risk. Adding
                        more cash handling can increase certain risks, even if the numbers
                        seem small.
                    </p>

                    <p className="mb-3">
                        Cash handling risks usually fall into a few categories:
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>
                            <strong>Theft risk:</strong> cash in a drawer is a temptation,
                            and theft doesn&rsquo;t always come from strangers
                        </li>
                        <li>
                            <strong>Staff mistakes:</strong> incorrect change, miscounts,
                            missed entries, or forgetting to write down who paid
                        </li>
                        <li>
                            <strong>Disputes:</strong> &ldquo;I paid you last week&rdquo; (and now
                            you are relying on memory instead of records)
                        </li>
                        <li>
                            <strong>Security stress:</strong> deciding where cash is stored,
                            who has access, and when it gets deposited
                        </li>
                    </ul>

                    <p className="mb-3">
                        A lot of owners assume the risk is minimal because the amounts per
                        transaction feel small. But these issues rarely show up as a single
                        dramatic incident. They show up as slow leakage:
                        small mistakes, occasional disputes, occasional missing cash, and
                        occasional awkward conversations that you wish you didn&rsquo;t have
                        to deal with.
                    </p>

                    <p className="mb-3">
                        When most payments are card-based, the system itself creates
                        reliable records. When more payments are cash-based, record-keeping
                        becomes more important and, honestly, more annoying.
                    </p>

                    <p>
                        If you run a dog daycare or boarding facility, your attention should
                        be on safety and supervision. If you are a dog walker, sitter,
                        groomer, or trainer, your attention should be on delivering
                        excellent service and managing your schedule. Any system that adds
                        more financial handling tasks competes for attention you could
                        otherwise spend on the work.
                    </p>
                </section>

                {/* SECTION 9 */}
                <section id="when-cash-discounts-might-make-sense" className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3">
                        9) When a Cash Discount Might Make Sense (Fair Exceptions)
                    </h2>

                    <p className="mb-3">
                        Even though I personally lean away from cash discounts, I don&rsquo;t
                        want this to be framed as a universal rule. There are situations
                        where a cash discount can be reasonable, especially if the owner
                        understands the tradeoffs and is using it intentionally.
                    </p>

                    <p className="mb-3">
                        Here are a few cases where it may be more defensible:
                    </p>

                    <ul className="list-disc pl-5 space-y-1 mb-4">
                        <li>
                            <strong>A tiny solo operator just starting out</strong> who is
                            trying to keep prices accessible while building a client base
                        </li>
                        <li>
                            <strong>Very low ticket sizes</strong> where processing fees are
                            disproportionately painful relative to the revenue
                        </li>
                        <li>
                            <strong>Limited offerings and low volume</strong>, where payment
                            tracking is still simple and the client base is high trust
                        </li>
                        <li>
                            <strong>A short-term transition strategy</strong> with a clear
                            plan to phase it out as pricing and systems mature
                        </li>
                    </ul>

                    <p className="mb-3">
                        Notice what these have in common: the business is either very small,
                        very simple, or operating in a context where the owner is choosing
                        short-term fee reduction over long-term scaling benefits.
                    </p>

                    <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
                        <strong>Key point:</strong> A cash discount is easiest to manage
                        when your operation is simple. As complexity rises—more clients,
                        more staff, more services—the downsides tend to grow faster than
                        people expect.
                    </div>
                </section>

                {/* SECTION 10 */}
                <section id="decision-framework" className="mb-16">
                    <h2 className="text-2xl font-semibold mb-3">
                        10) A Simple Decision Framework to End This
                    </h2>

                    <p className="mb-3">
                        If you take nothing else from this article, take this: there is no
                        magic answer. You are choosing tradeoffs.
                    </p>

                    <p className="mb-3">
                        Here is a simple framework that helps many owners decide:
                    </p>

                    <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-4">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>
                                If your priorities are <strong>simplicity</strong>,{' '}
                                <strong>scalability</strong>, <strong>clean books</strong>, and{' '}
                                <strong>fewer headaches</strong>, you will usually lean toward{' '}
                                <strong>one consistent price</strong>.
                            </li>
                            <li>
                                If your priorities are <strong>short-term fee reduction</strong>,
                                a <strong>very small operation</strong>, and you have{' '}
                                <strong>low growth plans</strong> (at least for now), then a
                                cash discount may be tolerable.
                            </li>
                        </ul>
                    </div>

                    <p className="mb-3">
                        Another way to say it is: <strong>pick the problems you want</strong>.
                    </p>

                    <p className="mb-3">
                        If you offer a cash discount, your “problems” might be:
                        tracking, follow-ups, occasional disputes, inconsistent expectations,
                        and extra mental load.
                    </p>

                    <p className="mb-3">
                        If you don&rsquo;t offer a cash discount, your “problems” might be:
                        higher processing fees and the need to price your service in a way
                        that supports your true costs.
                    </p>

                    <p className="mb-3">
                        My personal leaning is simple: I would rather pay a predictable fee
                        for clean transactions than accept the slower, messier problems that
                        can come from two-tier pricing.
                    </p>

                    <p>
                        Your job is caring for animals and building a life. It is not
                        chasing envelopes, managing payment exceptions, or adding complexity
                        that you will eventually wish you removed.
                    </p>
                </section>

                {/* PERSONAL CLOSING */}
                <section className="mt-6 mb-12">
                    <p>
                        Thank you for taking the time to read this and for caring enough about your
                        business to think through decisions like these thoughtfully. I hope this
                        helped clarify the tradeoffs and gave you a few useful angles to consider.
                        My name is Colin Zedreck, and I truly enjoy connecting with other people in
                        the dog industry. I hope I get the chance to speak with you or meet you
                        someday and help you continue growing your business in a way that supports
                        both your work and your life.
                    </p>
                </section>

                {/* CONSULTING CTA — END OF ARTICLE */}
                <section className="mt-12 mb-4">
                    <p>
                        If this article raised questions about your own pricing, growth plans, or
                        payment systems, you don&rsquo;t have to sort through it alone. I&rsquo;m always happy
                        to talk through real-world scenarios and tradeoffs with other people in the
                        dog industry. You can reach me directly at{' '}
                        <a
                            href="mailto:admin@petuniaopets.com"
                            className="underline hover:opacity-80"
                        >
                            admin@petuniapets.com
                        </a>.
                    </p>
                </section>

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
