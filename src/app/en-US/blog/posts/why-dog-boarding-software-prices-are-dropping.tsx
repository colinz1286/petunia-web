'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogBoardingSoftwarePricingTrendsArticle() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Why Dog Boarding & Daycare Software Costs Are Dropping While Subscription Prices Keep Going Up';
  const date = 'November 14, 2025';
  const description =
    'Cloud infrastructure and tooling for dog boarding and daycare software are cheaper than ever, yet many vendors are raising prices. This article breaks down what actually got cheaper, why subscriptions climbed anyway, and how operators can use cost math to push back and protect their margins.';
  const categories = ['boarding'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    walker: 'Dog Walkers',
    sitter: 'Pet Sitters',
    rescue: 'Rescues',
    vet: 'Veterinary',
    software_buying: 'Software Buying Guides',
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <header className="mb-8">
          <p className="text-sm text-gray-600">{date}</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {categoryLabels[c] ?? c}
              </span>
            ))}
          </div>
          <p className="mt-4 text-lg text-gray-800">{description}</p>
        </header>

        {/* TLDR */}
        <section className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-xl font-semibold text-emerald-900">
            TL;DR — software got cheaper, not more expensive
          </h2>
          <ul className="mt-3 list-disc pl-6 text-gray-800 space-y-2">
            <li>
              {`The real cost of running modern boarding and daycare software (cloud hosting, databases, storage, notifications) has dropped dramatically over the last decade thanks to better tooling and scale.`}
            </li>
            <li>
              {`Many vendors raised subscription prices anyway by adding sales overhead, complex pricing tiers, bundled payment markups, and optional add-ons that used to be standard.`}
            </li>
            <li>
              {`A large facility can now be supported on infrastructure that costs only a fraction of a single booking per month, which means triple-digit monthly subscriptions are often more about business models than hard costs.`}
            </li>
            <li>
              {`Owners should focus on total cost of ownership (TCO): subscription + payment fees + messaging + setup time, not just the headline base price.`}
            </li>
            <li>
              {`Platforms like Petunia are betting on the opposite pattern: simple, flat pricing (currently $29 per month after a 60-day free trial) that reflects what it actually costs to run the technology.`}
            </li>
          </ul>
        </section>

        {/* Intro */}
        <section className="prose prose-gray max-w-none">
          <p>
            {`If you have been in the dog boarding or daycare world for a few years, you have probably watched software prices climb from “this feels reasonable” to “this is starting to hurt.” Meanwhile, the actual technology behind those tools kept getting cheaper, faster, and easier to maintain. Something does not add up.`}
          </p>
          <p>
            {`This article is written from the perspective of someone who has lived both sides: running a real boarding and daycare facility day after day, and building software to support those operations. The goal is not to shame any particular company, but to explain the forces at work so you can make better long-term decisions for your own business.`}
          </p>
          <p>
            {`We will look at what actually became cheaper, why many subscription prices moved in the opposite direction, and how you can run simple cost math to decide whether you are paying for real value or just subsidizing someone else’s overhead. Along the way, we will point to deeper resources such as our guide on `}
            <Link
              href={`/${locale}/blog/dog-boarding-software-costs`}
              className="text-emerald-700 underline"
            >
              dog boarding software costs
            </Link>
            {` and our practical `}
            <Link
              href={`/${locale}/blog/best-dog-boarding-and-daycare-software-buyer-guide`}
              className="text-emerald-700 underline"
            >
              buyer guide for boarding and daycare software
            </Link>
            {`.`}
          </p>
        </section>

        {/* Section 1: What actually got cheaper */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">
            What actually got cheaper in the last decade
          </h2>
          <p className="mt-2 text-gray-800">
            {`When people talk about software costs, they often imagine rows of servers in a closet somewhere, or a team of engineers frantically keeping things from falling apart. The reality of modern cloud platforms is very different. Here are the components that power a typical dog boarding and daycare platform, and why many of them now cost less than ever for responsible teams.`}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6">
            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">
                Cloud hosting and databases
              </h3>
              <p className="mt-2 text-gray-800">
                {`Instead of renting physical servers, most boarding and daycare platforms now sit on top of cloud services like Firebase, AWS, or similar tools. These services bill by usage: storage, bandwidth, read/write calls, and functions. When code is written efficiently and data models are designed well, supporting even a busy facility does not cost hundreds of dollars per month in raw infrastructure. In many cases, it is far less — sometimes under a dollar per day.`}
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">
                Storage for vaccines, waivers, and photos
              </h3>
              <p className="mt-2 text-gray-800">
                {`Cloud object storage for vaccine images, signed waivers, and routine photos has become extremely affordable. You pay for gigabytes, not for the concept of “file storage” as a premium feature. With smart retention policies and compression, the marginal cost of adding one more vaccine record is tiny compared with the subscription fees many operators are paying today.`}
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">
                Notifications and reminders
              </h3>
              <p className="mt-2 text-gray-800">
                {`There is still a real cost to sending SMS and email messages, and you should absolutely include those in your cost math. But the tooling to schedule reminders, enforce vaccine expirations, and send automated confirmations has become more accessible to small teams. You no longer need a massive engineering department for basic “don’t forget your reservation tomorrow” workflows.`}
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">
                Developer productivity and frameworks
              </h3>
              <p className="mt-2 text-gray-800">
                {`Modern frameworks, component libraries, and managed services mean that teams can build high-quality, reliable tools with fewer people and less duplicated effort. Every time a framework solves a common problem once, dozens of businesses no longer have to reinvent it. That makes it cheaper to ship new features without passing big bills on to facility owners.`}
              </p>
            </div>
          </div>
          <p className="mt-4 text-gray-800">
            {`Taken together, these shifts mean that the technology required to run boarding and daycare software is more efficient and less expensive than it was five or ten years ago — especially for teams that pay close attention to their own cloud spend. Yet many operators have watched their invoices move in the opposite direction.`}
          </p>
        </section>

        {/* Section 2: Why prices still climbed */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">
            If technology is cheaper, why did subscription prices climb?
          </h2>
          <p className="mt-2 text-gray-800">
            {`If the underlying tools are more affordable, why are so many boarding and daycare platforms charging $99, $155, $189, $250, or even $299 per month? The answer has less to do with technology and more to do with business models and incentives.`}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6">
            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">
                Heavy sales and marketing overhead
              </h3>
              <p className="mt-2 text-gray-800">
                {`Trade show booths, paid ad campaigns, and large commissioned sales teams do not show up on your dashboard, but they show up in your subscription price. When a company’s growth strategy depends on aggressive outbound sales, the subscription often has to carry those costs — especially if the product itself is not priced for efficiency.`}
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">
                Complex tiering and per-feature upsells
              </h3>
              <p className="mt-2 text-gray-800">
                {`Many providers created increasingly complex tiers: one level for basic reservations, another for vaccine tracking, another for advanced reporting, another for texting, and so on. On paper, this looks flexible. In practice, it often nudges operators into paying more just to unlock what feels like basic operational functionality.`}
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">
                Payment markups and hidden fees
              </h3>
              <p className="mt-2 text-gray-800">
                {`A common pattern is to bundle card processing into the platform and quietly add a margin above standard payment rates. On every transaction, a small slice flows to the software vendor. Over a year of boarding and daycare volume, that can exceed the base subscription. Owners see a clean, integrated payment experience but may not realize how much extra they are paying to process the same transactions.`}
              </p>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold text-gray-900">
                Investor expectations and growth targets
              </h3>
              <p className="mt-2 text-gray-800">
                {`Some platforms are funded with the expectation of rapid revenue growth. That can drive pricing decisions that focus more on hitting financial milestones than aligning with the day-to-day realities of small pet-care businesses. When a company’s job is to satisfy investors first, it is natural for subscription prices to creep up over time.`}
              </p>
            </div>
          </div>
          <p className="mt-4 text-gray-800">
            {`None of this is inherently evil or unethical, but it is important context. If your monthly subscription keeps climbing while your own margins remain tight, you are likely paying for a lot more than the raw cost of running your reservations and pet records.`}
          </p>
        </section>

        {/* Section 3: Simple cost math example */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">
            A simple cost comparison: $29 per month vs. $199 per month
          </h2>
          <p className="mt-2 text-gray-800">
            {`Imagine two boarding and daycare facilities with similar capacity and workflows. Both take online reservations, enforce vaccines, manage feeding and medications, and send reminders. One uses a platform priced at $199 per month. The other uses a platform priced at $29 per month after a generous free trial.`}
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-700">
                    Cost component
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-700">
                    Higher-priced platform
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-700">
                    Lower-priced platform
                  </th>
                </tr>
              </thead>
              <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
                <tr>
                  <td className="px-4 py-3">Base subscription (12 months)</td>
                  <td className="px-4 py-3">$199 × 12 = $2,388</td>
                  <td className="px-4 py-3">$29 × 12 = $348</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Free trial period</td>
                  <td className="px-4 py-3">14–30 days</td>
                  <td className="px-4 py-3">
                    {`60 days (designed to match how long it takes clients to add their own data)`}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    Payment markups beyond card network rates
                  </td>
                  <td className="px-4 py-3">Often present, sometimes hidden</td>
                  <td className="px-4 py-3">
                    {`Depends on your payment setup — you can run the math directly with your processor.`}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">
                    Base subscription difference
                  </td>
                  <td className="px-4 py-3 font-semibold">—</td>
                  <td className="px-4 py-3 font-semibold">
                    {`$2,388 − $348 = $2,040 saved before you even consider payment fees.`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-800">
            {`This does not mean every facility should automatically pick the cheapest option. Features, reliability, data ownership, and support all matter. But it does highlight a key point: when the underlying technology is efficient, it is entirely possible to run robust software for a fraction of what many owners are paying today.`}
          </p>
          <p className="mt-2 text-gray-800">
            {`If you want a deeper worksheet to plug in your own numbers, our article on `}
            <Link
              href={`/${locale}/blog/dog-boarding-software-costs`}
              className="text-emerald-700 underline"
            >
              boarding software costs
            </Link>
            {` walks through a more detailed version of this math.`}
          </p>
        </section>

        {/* Section 4: What fair pricing looks like in practice */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">
            What fair pricing looks like for boarding and daycare software
          </h2>
          <p className="mt-2 text-gray-800">
            {`So what does it look like when a platform tries to align subscription prices with the actual cost of running the technology and the realities of a boarding or daycare facility? Petunia is one example, and we will use it here because the model is intentionally simple.`}
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-800">
            <li>
              {`A long, realistic free trial that starts when onboarding actually begins — not when you first create an account. At Petunia, the free trial is currently 60 days so you have time for clients to enter their own data and for your team to settle in.`}
            </li>
            <li>
              {`A flat monthly price (today, $29 per month for boarding and daycare operators) that is not tied to number of pets, number of staff, or number of locations in a way that punishes growth.`}
            </li>
            <li>
              {`Core features included by default: reservations, client and pet profiles, vaccine tracking and expirations, waiver enforcement, reminders, and operational views such as Dogs on Property and upcoming reservations — not paywalled behind premium tiers.`}
            </li>
            <li>
              {`A roadmap driven by real facility feedback rather than only by what looks good in a sales brochure. We run regular polls and prioritize the features that matter most to daily operations.`}
            </li>
            <li>
              {`Transparent communication about what is coming next, such as multi-location support and payment tools, so you can plan without guessing whether you will be charged more each time a new feature ships.`}
            </li>
          </ul>
          <p className="mt-4 text-gray-800">
            {`If you want to see how this philosophy shows up in the product, you can explore the dedicated page for our boarding and daycare platform here:`}{' '}
            <Link
              href={`/${locale}/dog-boarding-software`}
              className="text-emerald-700 underline"
            >
              Dog Boarding &amp; Daycare Software that is fairly priced
            </Link>
            {`.`}
          </p>
        </section>

        {/* Section 5: How to protect your margins going forward */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">
            How to protect your margins in the next wave of software trends
          </h2>
          <p className="mt-2 text-gray-800">
            {`Looking ahead, you will hear more about artificial intelligence, automation, and personalization inside pet-care software. Some of those features will be genuinely useful; some will be marketing noise. Either way, there will be pressure to attach new fees and surcharges to them.`}
          </p>
          <p className="mt-2 text-gray-800">
            {`You do not have to say yes to every new add-on. Instead, anchor your decisions in a few simple principles:`}
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-800">
            <li>
              {`Does this feature save measurable time, reduce risk, or meaningfully improve the dog and client experience?`}
            </li>
            <li>
              {`Can I quantify the value in dollars — fewer no-shows, better occupancy, reduced admin hours — and compare it against the cost?`}
            </li>
            <li>
              {`If I turned this feature off tomorrow, would my entire operation break, or would my team simply revert to a simpler workflow?`}
            </li>
            <li>
              {`Is the vendor willing to be transparent about how the feature is priced and what it costs them to run?`}
            </li>
          </ul>
          <p className="mt-4 text-gray-800">
            {`If the answer to most of those questions is “no,” treat the add-on as optional. Focus your spending on the tools that keep dogs safe, staff calm, and clients informed.`}
          </p>
          <p className="mt-2 text-gray-800">
            {`If you want a broader framework for evaluating platforms beyond price alone, our `}
            <Link
              href={`/${locale}/blog/best-dog-boarding-and-daycare-software-buyer-guide`}
              className="text-emerald-700 underline"
            >
              no-nonsense software buyer guide
            </Link>
            {` walks through feature fit, data ownership, security, and implementation step by step.`}
          </p>
        </section>

        {/* Health-adjacent note tie-in */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">
            Pricing is part of health and safety too
          </h2>
          <p className="mt-2 text-gray-800">
            {`It might sound strange to link software pricing to dog health, but the connection is real. When software is overpriced, something else usually has to give: staffing, training, facility upgrades, or the time you have available to focus on individual dogs.`}
          </p>
          <p className="mt-2 text-gray-800">
            {`One of the reasons we write so much about breed-specific health issues — for example, our article on `}
            <Link
              href={`/${locale}/blog/what-health-issues-do-poodles-have`}
              className="text-emerald-700 underline"
            >
              common health issues in poodles
            </Link>
            {` — is that better information leads to better decisions in the day-to-day care of dogs. Fair, transparent software pricing works the same way for the business side: it frees up resources to invest back into staff education, facility improvements, and individualized care.`}
          </p>
        </section>

        {/* Closing */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            The bottom line: software costs less than you think
          </h2>
          <p className="mt-2 text-gray-800">
            {`The technology required to run a calm, organized boarding and daycare operation is not trivial, but it is also not as expensive as many subscription prices suggest. Cloud infrastructure, storage, frameworks, and tooling have all moved in your favor. What has not always moved in your favor are the business models layered on top of that technology.`}
          </p>
          <p className="mt-3 text-gray-800">
            {`As you evaluate your current software or consider a change, keep a simple idea in mind: you should not have to give up a meaningful slice of your hard-earned revenue just to keep bookings, vaccines, waivers, and dogs on property organized. Do the math, ask direct questions, and choose partners who treat your margins with the same respect you give to every dog that walks through your door.`}
          </p>
          <p className="mt-3 text-gray-800">
            {`Whether you stay where you are, move to a new platform, or explore tools like Petunia, your pricing should reflect the reality that software is a tool — not a luxury tax on people who love dogs enough to build a business around them.`}
          </p>
        </section>

        {/* References */}
        <section className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-semibold">References &amp; further reading</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
            <li>
              {`Cloud provider small-business pricing guides (for example, documentation from major platforms outlining pay-as-you-go storage and database costs).`}
            </li>
            <li>
              {`Payment processor documentation showing standard card processing rates and how to calculate effective blended rates for your volume.`}
            </li>
            <li>
              {`Industry discussions and reports on software total cost of ownership (TCO) for small service businesses, including pet-care operations.`}
            </li>
            <li>
              {`Petunia resources on boarding and daycare software evaluation, including cost breakdowns and practical worksheets for facility owners.`}
            </li>
          </ul>
        </section>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    </>
  );
}
