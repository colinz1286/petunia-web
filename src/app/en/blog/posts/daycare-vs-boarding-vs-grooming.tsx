'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DaycareVsBoardingVsGroomingBlog() {
  const locale = useLocale();

  const title = 'Should You Offer Daycare Only — or Add Boarding and Grooming?';
  const date = 'July 26, 2025';
  const updatedDate = 'December 20, 2025';

  const categories = ['boarding', 'daycare', 'owner', 'sitter', 'walker'] as const;

  const categoryLabels: Record<string, string> = {
    boarding: 'Boarding & Daycare',
    daycare: 'Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    owner: 'Pet Owners',
    trainer: 'Trainers',
  };

  const description =
    'Compare daycare-only vs. adding boarding and grooming from a real facility owner&rsquo;s perspective. Learn the impact on revenue, staffing, lifestyle, compliance, and operations — plus a practical framework for choosing the right service mix.';

  const canonicalUrl = `https://www.petuniapets.com/${locale}/blog/daycare-vs-boarding-vs-grooming`;

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        <p className="text-sm text-gray-500 mb-1">Posted on {date}</p>

        {/* ✅ Update notice near the top */}
        <p className="text-xs text-gray-500 mb-3 italic">Article updated on {updatedDate}</p>

        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* 🏷️ Category Tags */}
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
          <p className="text-lg mb-4">
            When I first opened my facility, I didn&rsquo;t set out to offer everything under the sun. I
            wasn&rsquo;t a groomer. I didn&rsquo;t have aspirations of running a massive kennel. I just
            knew I was good at managing dogs in a structured, safe environment &mdash; and I believed
            there was strong demand for daycare and boarding in our area.
          </p>

          <p className="mb-4">
            Over time, I&rsquo;ve had to wrestle with the big strategic questions that show up in almost
            every pet-care business eventually: Should you stay daycare-only, or add overnight boarding?
            Should you add grooming? What happens to revenue, staffing, risk, and &mdash; maybe most
            importantly &mdash; your lifestyle?
          </p>

          <p className="mb-4">
            These questions come up constantly: Facebook groups, facility planning threads, conversations
            with owners who are tired, proud, overwhelmed, excited, or all of the above. I&rsquo;ve lived
            through the real-world tradeoffs, and this article is meant to give you a practical framework
            to think clearly &mdash; without pretending there is one perfect answer.
          </p>

          {/* 🔗 Link to the new branch article (near the top) */}
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <p>
              If you are daycare-only and specifically deciding whether to add overnight boarding, I wrote
              a dedicated companion article that goes deeper into the 24/7 responsibility shift, staffing,
              compliance, dedicated space, and liability planning:{' '}
              <Link
                href={`/${locale}/blog/should-daycare-only-expand-into-boarding`}
                className="underline font-medium hover:opacity-80"
              >
                Should a Daycare-Only Business Expand Into Boarding? A Realistic Decision Guide
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Quick TL;DR */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">TL;DR: What Each Service Really Changes</h2>

          <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4]">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Daycare-only</strong> is the simplest to run operationally. It has edges: opening,
                closing, and the ability to shut down after-hours.
              </li>
              <li>
                <strong>Boarding</strong> is the biggest revenue unlock for many facilities, but it turns
                your operation into a 24/7 responsibility with more staffing, more systems, and more risk.
              </li>
              <li>
                <strong>Grooming</strong> can be a great add-on for the right operator, but it is often the
                most fragile operationally because it depends heavily on skilled labor, high expectations,
                and tight execution.
              </li>
            </ul>
          </div>
        </section>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          🐾 Our Service Model: Daycare + Boarding, Minimal Grooming
        </h2>
        <p className="mb-4">
          At our facility, daycare and boarding are the core services. We also offer limited grooming
          (basic baths, nail trims, light cleaning for boarding departures), but we do not run a full
          grooming salon.
        </p>

        <p className="mb-8">
          That decision has always been intentional. I&rsquo;m not a groomer by trade, and I&rsquo;ve seen
          how complex grooming becomes without the right person, the right insurance, and the right systems.
          Our focus has been to do the fundamentals extremely well: safe playgroups, consistent routines,
          clean facilities, calm operations, and strong customer communication.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          📅 Operational Differences: Simplicity vs. 24/7 Coverage
        </h2>
        <p className="mb-4">
          Let&rsquo;s start with operations and lifestyle. Daycare-only is usually the least complex model
          &mdash; especially when you are small.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Your schedule often runs something like 7am to 7pm</li>
          <li>Most dogs go home at night</li>
          <li>You can fully shut down after hours (and often on holidays)</li>
        </ul>

        <p className="mb-4">
          That structure is a real advantage if you want predictable life boundaries or you are operating
          with very limited staff.
        </p>

        <p className="mb-4">
          Now contrast that with boarding. Once you introduce overnight stays, the whole rhythm changes:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Your facility never fully &ldquo;turns off&rdquo;</li>
          <li>You need weekend coverage, holiday coverage, early mornings, and late nights</li>
          <li>You take on more responsibility &mdash; and more liability exposure</li>
        </ul>

        <p className="mb-8">
          Boarding transforms your business from a daytime service into a continuous care operation. Even if
          you do not physically stay open 24 hours, you are still responsible 24 hours. That reality forces
          staffing plans, emergency plans, policies, and strong boundaries.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          ✅ The Hidden Variable: Your &ldquo;Reliability System&rdquo;
        </h2>
        <p className="mb-4">
          This is the part many people skip when they dream about expanding. Every additional service you
          offer requires a reliability system.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <strong>Daycare reliability:</strong> staffing coverage for drop-off, playgroup supervision, and
            pickup windows.
          </li>
          <li>
            <strong>Boarding reliability:</strong> everything above, plus overnight checks, incident response,
            medical decisions, and no-gaps coverage.
          </li>
          <li>
            <strong>Grooming reliability:</strong> precise timing, skilled labor, client expectation management,
            and consistent quality control.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">💰 Revenue Impact: Boarding Often Moves the Needle</h2>
        <p className="mb-4">
          In my experience, boarding tends to have the largest revenue impact. Daycare creates steady weekly
          cash flow. Boarding creates the big surges that many facilities rely on to build real profitability.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Daycare</strong> is recurring. Many clients use 2&ndash;5 days per week. This creates consistency
            and predictable operations.
          </li>
          <li>
            <strong>Boarding</strong> is seasonal and surge-driven. Holidays, long weekends, summer travel, school
            breaks &mdash; these can produce weeks that outperform typical weeks significantly.
          </li>
        </ul>

        <p className="mb-8">
          The practical point is not that boarding is &ldquo;better&rdquo; &mdash; it is that boarding can be the
          difference between being busy and being truly profitable, especially once you have fixed costs like
          rent, payroll, insurance, utilities, and facility maintenance.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          🧾 Compliance and Legitimacy: A Bigger Issue Than People Admit
        </h2>
        <p className="mb-4">
          This part becomes more important as you expand. Daycare-only can sometimes stay small and quiet.
          Boarding tends to force legitimacy faster: more dogs, more noise, more traffic, more visibility, and
          more risk.
        </p>

        <p className="mb-8">
          I&rsquo;m not here to judge anyone. I&rsquo;m just being honest that a real growth plan usually means
          you will eventually need to address licensing, zoning, business structure, insurance, and legal
          agreements. If you do not, the cost is often paid later &mdash; at the worst possible time.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          ✂️ Grooming: High Demand, High Expectations, High Fragility
        </h2>
        <p className="mb-4">
          Grooming is the most commonly misunderstood service. People assume it is an easy add-on because the
          demand is obvious. The demand is real &mdash; but the operations can be fragile if you do not have the
          right person and the right systems.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">🚩 Grooming Requires the Right Person</h3>
        <p className="mb-4">
          You cannot just &ldquo;add grooming&rdquo; and expect it to run itself. Successful grooming operations
          require specialized skill, strong handling, and consistent execution.
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>A skilled, trained groomer (ideally with formal training and strong references)</li>
          <li>Grooming-specific insurance and protocols</li>
          <li>Equipment, sanitization systems, and safety procedures</li>
          <li>Customer service that can handle timing, quality expectations, and misunderstandings</li>
        </ul>

        <p className="mb-4">
          Grooming also tends to be labor-fragile: if your groomer leaves, the service can collapse overnight.
          That is a risk many owners do not fully factor into the decision.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">💸 Grooming Margins Can Be Thinner Than People Assume</h3>
        <p className="mb-4">
          Many grooming pay structures are commission-based. That can make grooming great for the groomer, but
          less impactful for the facility owner than expected after payroll, supplies, and risk are considered.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">⚠️ Risk and Liability Are Real</h3>
        <p className="mb-8">
          Grooming can involve nicks, bites, stress reactions, allergic responses, and health events. You need
          tight protocols and strong documentation. This is one reason we stayed minimal: basic baths and nail
          trims were a better fit for our risk tolerance and staffing structure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">👥 Staffing Considerations: What You Can Train vs. What You Must Hire</h2>
        <p className="mb-4">
          Daycare and boarding staff can often be trained well with the right structure, supervision, and
          standard operating procedures. Grooming is different. Groomers usually need experience before they
          ever walk in your door.
        </p>

        <p className="mb-8">
          The key question is: Are you building a business that can operate on systems, or a business that
          depends on a single specialist? There is no shame in either. It just changes your risk profile.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          👨‍👩‍👧 Client Expectations Are Different for Each Service
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Daycare:</strong> Safety, fun, reliability, and a tired dog at pickup.
          </li>
          <li>
            <strong>Boarding:</strong> Trust, communication, structure, updates, and emergency readiness.
          </li>
          <li>
            <strong>Grooming:</strong> Timing, cleanliness, accuracy, aesthetics, and consistency.
          </li>
        </ul>

        <p className="mb-8">
          The more services you offer, the more communication and customer service discipline you need. In
          daycare and boarding, clients often build loyalty through trust. In grooming, a single bad experience
          can be the end of the relationship.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">💡 A Simple Decision Framework</h2>
        <p className="mb-4">
          Here is a simple way to think about your service mix without over-complicating it.
        </p>

        <div className="rounded-lg border border-[#d9cfc2] p-4 bg-[#f6efe4] mb-8">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Choose <strong>daycare-only</strong> if you want predictable hours, simpler staffing, and a cleaner
              operational model &mdash; especially while you build reputation and systems.
            </li>
            <li>
              Add <strong>boarding</strong> if you are ready for 24/7 responsibility, stronger staffing plans,
              firmer policies, and a bigger compliance footprint &mdash; and you want the revenue upside.
            </li>
            <li>
              Add <strong>grooming</strong> if you have the right person (or you are the right person), you can
              handle quality expectations, and you can build a stable structure that does not collapse when one
              employee leaves.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          🔁 If I Had to Start Over, I&rsquo;d Still Choose Daycare + Boarding (Minimal Grooming)
        </h2>
        <p className="mb-4">
          When I launched, I knew I wanted daycare and boarding. If I had to do it all over again, I would
          still make the same call. The services complement each other: daycare builds routine and relationships,
          while boarding captures the travel seasons and creates high-revenue periods.
        </p>

        <p className="mb-8">
          Grooming never made sense for us long-term at scale. I respect the facilities that do it well, but
          unless you have the right person and the right structure, it can introduce instability.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">📬 Final Thoughts</h2>
        <p className="mb-4">
          There is no one-size-fits-all answer. What matters is aligning your services with your strengths,
          your lifestyle goals, and your ability to deliver consistent quality.
        </p>

        <p className="mb-8">
          If you are daycare-only and the boarding decision is the big question in front of you right now,
          use the companion guide linked above. It is written specifically for that moment &mdash; when you are
          deciding whether you are ready to move from fixed hours to 24/7 responsibility.
        </p>

        {/* Backlink to the new boarding expansion article (again near the bottom) */}
        <p className="mb-8">
          Companion guide:{' '}
          <Link
            href={`/${locale}/blog/should-daycare-only-expand-into-boarding`}
            className="underline font-medium hover:opacity-80"
          >
            Should a Daycare-Only Business Expand Into Boarding? A Realistic Decision Guide
          </Link>
          .
        </p>

        <p className="mb-4 italic text-gray-600 text-sm">
          Sources (general): Industry operator experience; common grooming pay structures; typical service-model
          tradeoffs observed across independent facilities and small teams.
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
