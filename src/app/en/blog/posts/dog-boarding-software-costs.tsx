'use client';

// SEO weakness notes: likely limited backlinks; schema is only baseline BlogPosting
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function DogBoardingSoftwareCostArticle() {
  const locale = useLocale();

  return (
    <>

      <article className="prose lg:prose-xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-2">Written by&nbsp;Colin Zedreck&nbsp;·&nbsp;November&nbsp;4,&nbsp;2025</p>

        <h1 className="text-3xl font-bold mb-4">
          Dog Boarding Software Doesn’t Need to Be Expensive
        </h1>

        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">
            Industry Insights
          </span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
            Opinion
          </span>
        </div>

        <nav className="mb-6">
          <h2 className="font-semibold">Table of Contents</h2>
          <ul className="list-disc list-inside">
            <li><a href="#intro">Why I’m Writing This</a></li>
            <li><a href="#reality">The Reality of Software Costs</a></li>
            <li><a href="#pricing">Why Competitors Charge So Much</a></li>
            <li><a href="#philosophy">Our Philosophy at Petunia</a></li>
            <li><a href="#inflation">Giving Back in an Inflationary World</a></li>
            <li><a href="#link">Related Reading</a></li>
            <li><a href="#conclusion">Final Thoughts</a></li>
          </ul>
        </nav>

        <section id="intro" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Why I’m Writing This</h2>
          <p>
            I’ve spent years running a dog boarding and daycare business, and I’ve seen how expensive and
            complicated software can make a simple job feel. When I looked at what many platforms charge—$99,
            $150, sometimes $180 a month—I couldn’t believe it. For an industry built around care and community,
            it felt wrong that technology had become a luxury instead of a tool.
          </p>
        </section>

        <section id="reality" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">The Reality of Software Costs</h2>
          <p>
            Here’s the truth: running an app or website for most small pet-care businesses costs less than
            fifty cents a month in actual hosting and data-storage fees. The technology has become that
            efficient. The real expense isn’t the infrastructure—it’s the mark-ups layered on top.
          </p>
          <p>
            When someone charges you $150 a month to manage check-ins, vaccine records, and scheduling,
            they’re not paying for servers. They’re paying for marketing budgets, layers of management, and
            shareholder expectations. None of that helps you run a calmer, better business.
          </p>
        </section>

        <section id="pricing" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Why Competitors Charge So Much</h2>
          <p>
            Many of the established software companies in this space built their pricing years ago—when
            technology was slower and costlier—and never looked back. Others charge premium rates simply
            because they can. The logic is that if you depend on their platform every day, you’ll keep paying,
            no matter what it costs.
          </p>
          <p>
            But high price doesn’t equal high quality. In most cases, it just means you’re funding features
            you don’t need or paying for support teams you rarely contact. There’s a quiet assumption that
            small operators can’t access good software unless they overpay. I built Petunia to prove that’s
            not true.
          </p>
        </section>

        <section id="philosophy" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Philosophy at Petunia</h2>
          <p>
            Petunia costs <strong>$2 a month</strong> because that’s what’s fair. I believe great software
            should be accessible to every business—whether you’re a single-location daycare or a growing
            boarding facility. We’re not cutting corners; we’re cutting the nonsense. Every feature that
            matters—bookings, waivers, vaccine tracking, reminders, and client management—is built with the
            same care and reliability as platforms charging thirty times more.
          </p>
          <p>
            I don’t believe software should feel like a tax on your hard work. It should help you breathe
            easier, save time, and protect your margins.
          </p>
        </section>

        <section id="inflation" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Giving Back in an Inflationary World</h2>
          <p>
            Inflation has made everything harder—from rent to food to payroll. The last thing small
            businesses need is another unnecessary bill. Petunia was built as a response to that pressure.
            We’re giving back to the people who keep this industry running by charging what’s reasonable
            instead of what’s traditional.
          </p>
          <p>
            Fair pricing isn’t a marketing tactic. It’s a commitment to community. The dog-care industry is
            full of hardworking people who deserve better tools without the heavy overhead.
          </p>
        </section>

        <section id="link" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Related Reading</h2>
          <p>
            To learn more about how we approach boarding and daycare technology, visit our overview&nbsp;
            <a
              href="https://www.petuniapets.com/en/dog-boarding-software"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dog Boarding &amp;&nbsp;Daycare Software Page
            </a>.
          </p>
        </section>

        <section id="conclusion" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Final Thoughts</h2>
          <p>
            I’m not interested in racing to the bottom on price—I’m interested in lifting the floor. 
            Software should make your life easier without taking your peace of mind. We can run better
            businesses, take care of our teams, and still afford the tools that help us do it. 
            That’s the kind of fairness I want to bring back to this industry.
          </p>
        </section>

        
        {/* Expanded depth content start */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Evaluate software by failure cost, not just monthly price</h2>
          <p className="mb-4">A platform is cheap only if it reduces operational friction without creating new billing errors, vaccine misses, staff workarounds, and owner confusion. The better comparison is not subscription price alone. It is the cost of preventable mistakes, unpaid invoices, time spent chasing records, and how difficult it is to onboard new staff into the system you chose.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Measure time saved:</strong> booking, check-in, medication notes, customer reminders, and incident follow-up should all be easier to execute.</li>
            <li><strong>Look at error prevention:</strong> vaccine enforcement, waiver version control, and payment reconciliation matter more than nice dashboard language.</li>
            <li><strong>Check the export story:</strong> if you cannot leave cleanly with your client and dog records, your price is not the real price.</li>
            <li><strong>Review support under stress:</strong> response quality during busy periods matters more than sales responsiveness during demos.</li>
          </ul>
          <p className="mb-0">That operating view is what separates a low-cost tool from a low-value one.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Vendor questions that prevent painful migrations later</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-0">
            <li>How are records exported, in what format, and with what limits?</li>
            <li>What core workflows are included at base price versus upsold later?</li>
            <li>How are failed payments, vaccine expirations, and incident notes surfaced to staff?</li>
            <li>What happens when we grow, add locations, or need to change pricing structures?</li>
          </ol>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Related Reading Inside Petunia</h2>
          <ul className="list-disc pl-5 space-y-2 mb-0">
            <li><a href="https://www.petuniapets.com/en/blog/tracking-medications-in-dog-boarding-software" className="underline hover:opacity-80">Tracking Medications in Dog Boarding Software: Multi-Day Safety, Overnight Protocols, and Petunia’s Real-Time Workflow from Pre-Arrival to Check-Out</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/why-dog-boarding-software-prices-are-dropping" className="underline hover:opacity-80">Why Dog Boarding &amp; Daycare Software Costs Are Dropping While Subscription Prices Keep Going Up</a></li>
            <li><a href="https://www.petuniapets.com/en/blog/allergy-diet-tracking-dog-boarding-daycare-software" className="underline hover:opacity-80">Allergy &amp; Diet Tracking in Dog Boarding Software and Dog Daycare Software</a></li>
          </ul>
        </section>
        {/* Expanded depth content end */}
<section id="sources" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Sources</h2>
          <ul className="list-disc list-inside">
            <li>Personal industry experience – Colin Zedreck, 2025</li>
            <li>Estimated average cloud-storage and hosting costs (AWS &amp; Firebase pricing data)</li>
          </ul>
        </section>

        <div className="mt-8">
          <Link href={`/${locale}/blog`} className="text-blue-600 hover:underline">
            &larr;&nbsp;Back&nbsp;to&nbsp;Blog
          </Link>
        </div>
      </article>
    </>
  );
}
