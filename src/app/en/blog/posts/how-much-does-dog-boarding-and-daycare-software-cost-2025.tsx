'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HowMuchDoesDogBoardingDaycareSoftwareCost2025() {
  const locale = useLocale();

  const title =
    'How Much Does Dog Boarding & Daycare Software Cost in 2025?';
  const date = 'August 26, 2025';
  const categories = ['boarding'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
  };

  return (
    <>

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

        {/* INTRO */}
        <p className="text-lg mb-4">
          What should boarding and daycare facilities actually budget for software in 2025? You&rsquo;ll
          see list prices, starter tiers, and add-ons scattered across the web, but it&rsquo;s hard to
          translate those into a clear monthly number you can trust. This guide breaks down real-world
          pricing models, typical ranges seen across public category pages and vendor pricing pages,
          and the extra costs (like text messaging and email) that affect your total cost of ownership
          (TCO). We&rsquo;ll also show quick ROI math and negotiation tips so you can evaluate offers
          with confidence.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 text-sm mb-6">
          <strong>Petunia&rsquo;s pricing, up front:</strong> For boarding &amp; daycare businesses,
          Petunia is <strong>$5/month</strong> (USD) after a 30-day free trial. Owner accounts are free.
          That&rsquo;s the whole model for this category today&mdash;simple and predictable.
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Executive Summary (TL;DR)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Most kennel/daycare systems use a subscription model</strong> priced per business
            (sometimes per location), with ranges that commonly start around the lower double digits
            and can climb into the low hundreds per month depending on modules, usage limits, and
            support tiers. Public category pages, vendor price pages, and marketplaces show this spread
            clearly. <em>(See Sources at the end.)</em>
          </li>
          <li>
            <strong>Add-ons matter:</strong> text messaging (SMS), email throughput, extra logins,
            advanced reporting, or grooming/training modules can materially change the monthly bill.
          </li>
          <li>
            <strong>Payments &amp; messaging have their own pass-through costs:</strong> card
            processing (e.g., ~2.9% + $0.30 in the U.S.) and SMS per-message fees (fractions of a
            cent, plus carrier/registration fees) are separate from your software subscription.
          </li>
          <li>
            <strong>Implementation, data migration, and support</strong> can be billed as one-time
            fees or rolled into higher monthly plans; always ask what&rsquo;s included.
          </li>
          <li>
            <strong>Petunia&rsquo;s stance:</strong> provide the core boarding/daycare stack for $5/month,
            keep features moving quickly, and reduce the &ldquo;nickel-and-dime&rdquo; feel common to
            modular price sheets.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">How Vendors Price Boarding &amp; Daycare Software</h2>
        <p className="mb-4">
          Most systems you&rsquo;ll evaluate follow one or more of these models. Understanding them lets
          you decode a pricing page instantly and avoid surprises.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">1) Flat monthly subscription (single location)</h3>
        <p className="mb-4">
          The most common approach: a set monthly price that includes a core feature bundle (online
          booking, calendar, client/pet CRM, basic communications, etc.). In 2025, public category and
          pricing pages show a wide spread for single-location plans, often starting in the lower
          double digits per month and reaching the low hundreds per month depending on features and
          caps. The &ldquo;sweet spot&rdquo; many facilities encounter is roughly the price of a few
          daycare day passes per month. <em>(See Sources; we intentionally avoid naming competitors.)</em>
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">2) Modular pricing (boarding, daycare, grooming, training)</h3>
        <p className="mb-4">
          Some platforms price a base client/pet manager and then add boarding, daycare, grooming, or
          training modules for an extra monthly fee each. On paper it looks flexible; in practice, it
          can become a runaway train as you layer modules. If you operate boarding <em>and</em> daycare,
          you may end up paying for two modules to get essential features. Always total the full bundle
          you actually need.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">3) Tiered plans with usage caps (logins, messages, bookings)</h3>
        <p className="mb-4">
          Tiered plans sometimes cap concurrent logins, bookings per month, or message volume. Small
          teams often start in a low tier and bump up quickly once operations pick up. Watch for
          language like &ldquo;concurrent user&rdquo; (which is not the same as total staff accounts)
          and for add-on message blocks.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">4) Annual prepay vs. month-to-month</h3>
        <p className="mb-4">
          Many vendors discount annual prepayment (sometimes 10–20%). Month-to-month is more flexible,
          but the annual discount can be worthwhile once you&rsquo;re confident after a 30–60 day trial
          and a successful migration. Never accept a long contract without a clear exit path and data
          export language.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Typical 2025 Price Ranges (What We See Publicly)</h2>
        <p className="mb-4">
          Based on publicly available category pages and vendor pricing pages as of August&nbsp;2025,
          single-location kennel/daycare subscriptions frequently start in the lower double digits per
          month and can extend into the low hundreds per month depending on feature depth, modules, and
          usage limits. You&rsquo;ll also see genuine &ldquo;free&rdquo; tiers (often with tight caps)
          and per-user pricing models in the mix. We avoid naming competitors in this article, but you
          can review the sources list to see representative public pricing pages and category summaries.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 text-sm mb-6">
          <strong>Benchmarks to sanity-check a quote:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Starter/SMB plans commonly publish starting prices in the lower-to-mid double digits per
              month; mid-tier plans (board+daycare+comms) can cross into the low hundreds with add-ons.
            </li>
            <li>
              Free tiers, when available, usually cap records, messages, or logins in ways that push a
              real facility to paid once operations are steady.
            </li>
            <li>
              Modular pricing (boarding <em>and</em> daycare) can add $10–$40+ per module in some
              ecosystems; always total your &ldquo;all-in&rdquo; monthly number.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">The Add-Ons That Change Your Bill</h2>
        <p className="mb-4">
          Two facilities on the same plan can pay very different monthly totals because of messaging
          volume, staff size, and feature toggles. Here&rsquo;s what typically moves the needle.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">SMS reminders &amp; confirmations</h3>
        <p className="mb-4">
          Text messaging is often a pass-through cost from a provider. U.S. outbound/inbound SMS is
          typically priced by message segment (160 characters for plain text) and can also include
          carrier/registration fees for application-to-person (A2P) traffic. While each vendor may
          bundle a small allowance, higher-volume shops should expect metered usage. If you send a few
          hundred confirmations and reminders a month, these costs remain modest; at thousands per
          month, they become a line item to manage.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Email throughput</h3>
        <p className="mb-4">
          For email, many providers lean on a transactional email service. Plans often start with a
          free tier for limited daily volume, then graduate to paid plans as you grow. If you
          communicate primarily by email (e.g., confirmations, reminders, notices), factor in those
          monthly costs as your contact list scales.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Modules: grooming, training, advanced reporting</h3>
        <p className="mb-4">
          Some ecosystems sell features in à-la-carte bundles. Grooming or training may be &ldquo;add
          $10–$40 per month&rdquo; each, and advanced reporting/analytics sometimes sit in higher
          tiers. If your operation uses grooming add-ons during daycare/boarding booking, validate
          whether your tier includes it or if it&rsquo;s a separate fee.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Extra logins &amp; locations</h3>
        <p className="mb-4">
          Watch wording: some quotes price &ldquo;concurrent logins&rdquo; rather than total staff
          accounts. Multi-location operators sometimes pay per location; others get a blended plan once
          volumes are higher. Clarify whether pricing is &ldquo;per business&rdquo; vs. &ldquo;per
          location&rdquo; for your case.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Hidden/One-Time Costs to Ask About</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Onboarding &amp; training:</strong> Some vendors charge setup fees or offer
            premium onboarding in higher tiers. Ask what&rsquo;s free vs. paid.
          </li>
          <li>
            <strong>Data migration:</strong> Exports from your current system + field mapping + a
            &ldquo;dual-run&rdquo; week usually take effort. Some vendors charge for assisted
            migration, others provide templates and let you DIY.
          </li>
          <li>
            <strong>Hardware:</strong> If you add front-desk tablets, label printers, card readers, or
            barcode scanners, plan for that CapEx.
          </li>
          <li>
            <strong>Contract changes:</strong> Annual contracts can carry early-termination fees. Push
            for month-to-month until you&rsquo;ve validated fit.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Payments &amp; Messaging: The Pass-Through Reality</h2>
        <p className="mb-4">
          Even when a vendor advertises &ldquo;built-in payments&rdquo; or &ldquo;integrated
          messaging,&rdquo; the underlying rails have industry-standard costs. In the U.S., card
          payments commonly sit around a percentage + fixed fee per transaction, and business SMS is
          priced per message with carrier/registration overhead. These are not software subscription
          dollars; they&rsquo;re usage fees that ride alongside your plan and scale with your activity.
        </p>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 text-sm mb-6">
          <strong>Rule of thumb:</strong> Budget card fees on every processed payment, and budget text
          costs on every message segment. If your vendor &ldquo;bundles&rdquo; these, confirm the
          allowance and overage rate in writing.
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">TCO Math: Three Sized Scenarios</h2>
        <p className="mb-4">
          Here&rsquo;s a pragmatic way to forecast total cost of ownership. Adjust the numbers to your
          operation. We keep this vendor-neutral and align with industry-standard rails for payments
          and messaging.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Scenario A — Small facility (single location, lean comms)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Software:</strong> A low-tier subscription in the lower-double-digit range per
            month is common on public price sheets; Petunia&rsquo;s plan is $5/month for boarding/daycare,
            which is intentionally below typical starter tiers.
          </li>
          <li>
            <strong>Messaging:</strong> 300 SMS/mo for reminders and confirmations is a few dollars in
            pass-through spend; email could be covered by a basic transactional plan or free tier at
            low volumes.
          </li>
          <li>
            <strong>Payments:</strong> If you process on-site with cards, expect a standard percentage
            + fixed fee per successful transaction.
          </li>
          <li>
            <strong>One-time:</strong> DIY migration (no fee) if you import spreadsheets yourself; paid
            assistance if you prefer hands-on help.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Scenario B — Busy daycare + boarding (higher comms)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Software:</strong> Mid-tier market plans often sit in the mid-double-digit to low
            triple-digit range depending on modules; Petunia remains $5/month for boarding/daycare.
          </li>
          <li>
            <strong>Messaging:</strong> 1,500–3,000 SMS/mo can add a noticeable but manageable
            operational cost; email may require a paid tier for deliverability and throughput.
          </li>
          <li>
            <strong>Payments:</strong> If you use integrated payments, include card fees on every
            transaction.
          </li>
          <li>
            <strong>One-time:</strong> You may pay for assisted migration to keep go-live smooth.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Scenario C — Multi-location operator (higher volumes)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Software:</strong> Some vendors price per location; others negotiate enterprise
            bundles. Your effective rate often drops at scale.
          </li>
          <li>
            <strong>Messaging:</strong> Volume SMS discounts can kick in, but you&rsquo;ll also add
            registration/carrier fees. Email typically lands in a mid-tier plan.
          </li>
          <li>
            <strong>Payments:</strong> Your blended effective rate can be negotiated at higher
            volumes.
          </li>
          <li>
            <strong>One-time:</strong> Budget for data mapping, QA, and training across teams.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">ROI: Where the Subscription Pays for Itself</h2>
        <p className="mb-4">
          The value of software isn&rsquo;t just the sticker price; it&rsquo;s the revenue and time it
          protects. For many facilities, the largest ROI levers are <strong>fewer no-shows</strong>,
          <strong> faster confirmations</strong>, and <strong>vaccine/waiver compliance</strong> that
          keeps bookings clean. A single avoided no-show on a busy weekend can cover an entire month of
          software for most market plans. The same goes for a staff hour saved daily by better calendar
          visibility and automated confirmations.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Back-of-the-napkin math</h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            If one no-show costs you $40–$70 of lost daycare/boarding revenue, preventing even <em>one</em>{' '}
            per month covers many plans&rsquo; subscription lines.
          </li>
          <li>
            If staff save 30 minutes/day (~10 hours/month) on booking ping-pong, and you value that hour
            at $18–$22 fully loaded, the time savings alone can offset subscription and messaging costs.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">How to Read a Pricing Page (Checklist)</h2>
        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>
            <strong>What&rsquo;s in the core plan?</strong> Online booking, CRM, vaccine/waiver
            enforcement, reminders, grooming add-ons, reporting?
          </li>
          <li>
            <strong>What&rsquo;s capped?</strong> Logins, messages, bookings, pet records, storage?
          </li>
          <li>
            <strong>What&rsquo;s truly an add-on?</strong> Board vs. daycare modules, grooming,
            training, advanced reporting, API.
          </li>
          <li>
            <strong>Messaging pricing:</strong> Included allowance? Overage per message segment? Are A2P
            registration fees and carrier pass-throughs called out?
          </li>
          <li>
            <strong>Payments:</strong> Card fee structure (percentage + fixed)? Any extra platform
            fees?
          </li>
          <li>
            <strong>Support &amp; onboarding:</strong> Is implementation included or paid? Response time
            SLA?
          </li>
          <li>
            <strong>Data ownership:</strong> Can you export clients, pets, reservations on request?
            What format? Any fee?
          </li>
          <li>
            <strong>Contract terms:</strong> Month-to-month vs. annual discount? Early termination
            policy?
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Negotiation Tips (Vendor-Neutral)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Pilot first:</strong> Run a 30-day pilot with a small group of clients. Ask for the
            month-to-month rate and a guarantee that your pilot data will export cleanly if you move on.
          </li>
          <li>
            <strong>Bundle smartly:</strong> If you need boarding + daycare + grooming, ask for a
            single &ldquo;operations&rdquo; price rather than stacking list prices.
          </li>
          <li>
            <strong>Messaging transparency:</strong> Get written confirmation of included SMS/email
            allowances and overage rates.
          </li>
          <li>
            <strong>Ask for multi-site terms:</strong> If you plan to add a second site within 6–12
            months, negotiate the blended rate now.
          </li>
          <li>
            <strong>Protect your data:</strong> Confirm you can export on request, even during a
            contract.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Migration &amp; Go-Live: Keep Costs in Check</h2>
        <p className="mb-4">
          Migrations fail when teams underestimate mapping and testing. Keep it simple: export clients,
          pets, and upcoming reservations; map to the new fields; load a staging workspace; and run a
          one-week dual-run where both systems mirror bookings. Assign one owner to sign off on data
          quality before you flip the switch. If a vendor quotes a large migration fee, ask for a DIY
          template first&mdash;you might not need the white-glove package.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Where Petunia Fits</h2>
        <p className="mb-4">
          Petunia&rsquo;s promise is straightforward: keep the software for boarding &amp; daycare
          affordable, ship improvements fast, and respect operators&rsquo; time. Pricing is $5/month
          after a 30-day free trial for boarding/daycare businesses; owner accounts are free. Real-time
          booking, vaccine expiration enforcement, waiver enforcement, SMS/email reminders, grooming
          add-ons during booking, and multi-location support are built in. Payments and staff
          scheduling are on the near-term roadmap.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Link
            href={`/${locale}/loginsignup`}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium bg-[#2c4a30] text-white hover:opacity-90"
          >
            Create your account
          </Link>
          <Link
            href={`/${locale}/businesssignup`}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium border border-[#2c4a30] text-[#2c4a30] hover:bg-[#e4dbcb]"
          >
            See business plans
          </Link>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">FAQ (Short Answers)</h2>
        <div className="space-y-4 mb-10">
          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              What&rsquo;s a realistic monthly budget for a single-location facility in 2025?
            </summary>
            <p className="mt-2">
              Public category and vendor pricing pages commonly show starter plans in the
              lower-double-digit range per month and mid-tier bundles that can reach the low hundreds,
              depending on modules and caps. Always total your real needs (board + daycare + comms) and
              add messaging/payment pass-throughs.
            </p>
          </details>

          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              Are free tiers viable for established facilities?
            </summary>
            <p className="mt-2">
              Often not. Free tiers typically cap records, logins, or messages. They&rsquo;re great for
              trials and very small shops, but most active facilities graduate to paid plans to remove
              caps and add modules.
            </p>
          </details>

          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              How much should I budget for SMS?
            </summary>
            <p className="mt-2">
              Expect fractions of a cent per message segment in the U.S., plus registration/carrier
              fees for A2P traffic. Hundreds of texts per month are only a few dollars; thousands will
              show up as a modest line item.
            </p>
          </details>

          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              How much are payment processing fees?
            </summary>
            <p className="mt-2">
              U.S. online card payments commonly land around a percentage + fixed fee per successful
              transaction (e.g., a few percent plus $0.30). At scale, blended effective rates can be
              negotiated.
            </p>
          </details>

          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              Will I pay for onboarding and migration?
            </summary>
            <p className="mt-2">
              It depends. Some vendors charge a one-time setup or offer paid &ldquo;assisted
              migration.&rdquo; Ask for a DIY template first; you may not need the white-glove package.
            </p>
          </details>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Sources &amp; Further Reading</h2>
        <p className="text-sm text-gray-700 mb-2">
          Representative public category and pricing pages reviewed August&nbsp;2025:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm mb-10">
          <li>
            Capterra &mdash; Kennel Software category (pricing &amp; features snapshots):{' '}
            <a
              className="underline"
              href="https://www.capterra.com/kennel-software/"
              target="_blank"
              rel="noopener noreferrer"
            >
              capterra.com/kennel-software
            </a>
          </li>
          <li>
            Software Advice &mdash; Kennel Software (reviews &amp; pricing):{' '}
            <a
              className="underline"
              href="https://www.softwareadvice.com/kennel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              softwareadvice.com/kennel
            </a>
          </li>
          <li>
            GetApp &mdash; Kennel category filters &amp; pricing callouts:{' '}
            <a
              className="underline"
              href="https://www.getapp.com/industries-software/kennel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              getapp.com/industries-software/kennel
            </a>
          </li>
          <li>
            Example modular pricing page (boarding/daycare add-ons) &mdash; representative vendor:{' '}
            <a
              className="underline"
              href="https://www.propetware.com/pricing-subscriptions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              propetware.com/pricing-subscriptions
            </a>
          </li>
          <li>
            Representative per-user &amp; free/premium tiers (example vendor):{' '}
            <a
              className="underline"
              href="https://doggiedashboard.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              doggiedashboard.com
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-700 mb-2">
          Messaging &amp; email throughput pricing (U.S., accessed August&nbsp;2025):
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm mb-10">
          <li>
            Twilio &mdash; U.S. SMS pricing and A2P notes:{' '}
            <a
              className="underline"
              href="https://www.twilio.com/en-us/sms/pricing/us"
              target="_blank"
              rel="noopener noreferrer"
            >
              twilio.com/en-us/sms/pricing/us
            </a>{' '}
            &amp;{' '}
            <a
              className="underline"
              href="https://www.twilio.com/en-us/pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              twilio.com/en-us/pricing
            </a>
          </li>
          <li>
            Twilio &mdash; A2P 10DLC carrier/registration fees overview:{' '}
            <a
              className="underline"
              href="https://help.twilio.com/articles/1260803965530-What-pricing-and-fees-are-associated-with-the-A2P-10DLC-service-"
              target="_blank"
              rel="noopener noreferrer"
            >
              help.twilio.com (A2P 10DLC)
            </a>
          </li>
          <li>
            SendGrid (Twilio) &mdash; transactional email plans &amp; paid tiers:{' '}
            <a
              className="underline"
              href="https://sendgrid.com/en-us/pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              sendgrid.com/pricing
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-700 mb-2">
          Payment processing reference (U.S., accessed August&nbsp;2025):
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm mb-10">
          <li>
            Stripe &mdash; U.S. pricing overview:{' '}
            <a
              className="underline"
              href="https://stripe.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              stripe.com/pricing
            </a>
          </li>
        </ul>

        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Footnote */}
        <p className="text-xs text-gray-500 mt-8">
          Pricing is subject to change. Always confirm the current rates and terms on the provider&rsquo;s
          official pages for your location and use case.
        </p>
      </main>
    </>
  );
}
