'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ChoosingBoardingDaycareSoftware2025() {
  const locale = useLocale();

  const title =
    'Choosing Boarding & Daycare Software in 2025: A Calm, Candid Buyer’s Guide';
  const date = 'May 8, 2025';
  const categories = ['boarding'];

  const categoryLabels: Record<string, string> = {
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    owner: 'Pet Owners',
    breeder: 'Breeders',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="Neutral, practical guidance for dog boarding & daycare owners choosing software in 2025. Real pricing patterns, anonymized comparisons, TCO math, security must-haves, and a simple evaluation framework."
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

        <p className="italic mb-6">
          A neutral, practical guide for facility owners of any size — from
          single-site daycares to multi-location boarding operations.
        </p>

        <p className="mb-4">
          If you run a boarding or daycare facility, you’ve probably noticed the
          same thing we did: many “all-in-one” tools feel expensive for what you
          actually use, slow to adapt to real-world needs, and rigid when you
          ask for changes. That’s precisely why we built Petunia — to deliver
          excellent software at a fair price, ship meaningful updates in 1–2
          week cycles, and respond quickly to the features you actually need.
        </p>

        <p className="mb-6">
          This guide explains how to evaluate options calmly and clearly.
          We’ll keep competitor names out of the body (to stay cordial) but cite
          public pages at the end so you can verify numbers yourself.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">TL;DR (for busy owners)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <span className="font-semibold">Total cost matters more than sticker price.</span>{' '}
            Watch for SMS bundles, payment add-ons, “gateway/platform” markups,
            and per-location uplifts.
          </li>
          <li>
            <span className="font-semibold">Security & portability are non-negotiable.</span>{' '}
            Unique user logins, MFA, encryption in transit/at rest, and simple
            full-account export keep your data safe and your options open.
          </li>
          <li>
            <span className="font-semibold">Speed of iteration wins long-term.</span>{' '}
            You’ll outgrow any static tool. Favor vendors who prove they can
            ship new features (and fixes) in weeks, not quarters.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">How to Evaluate Boarding/Daycare Software</h2>
        <p className="mb-4">
          Here’s a straightforward framework our team uses when we talk with
          owners. Score each category 1–5, then compare options side-by-side:
        </p>

        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>
            <span className="font-semibold">Core Fit:</span> Reservations, runs/rooms,
            daycare playgroups, vaccinations, feeding/meds, staffing, checkout,
            reporting. If a feature is “coming soon,” treat it as a{' '}
            <em>no</em> unless there’s a date.
          </li>
          <li>
            <span className="font-semibold">Payments:</span> Transparent rates, no forced
            processors, no unexplained “gateway/platform” markups, reasonable
            hardware options, and simple deposits/refunds.
          </li>
          <li>
            <span className="font-semibold">Messaging:</span> Clear SMS pricing
            (bundles vs. unlimited), easy opt-in, templates, and delivery
            reliability.
          </li>
          <li>
            <span className="font-semibold">Security:</span> Individual logins (never shared),
            MFA support, audit trails, and modern password practices. See the
            PCI DSS and NIST references at the end.
          </li>
          <li>
            <span className="font-semibold">Data Portability:</span> Can you export
            everything (clients, pets, reservations, invoices, documents,
            images) on your own, without support tickets?
          </li>
          <li>
            <span className="font-semibold">Roadmap & Velocity:</span> Ask how often they ship.
            Weekly/biweekly releases are a practical sign of responsiveness.
          </li>
          <li>
            <span className="font-semibold">True Cost:</span> Add software fees + SMS +
            payment fees + add-ons + per-location costs. Run a 12-month TCO.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-3">What Pricing Looks Like in 2025 (Anonymized)</h2>
        <p className="mb-4">
          Below is a snapshot of publicly posted prices (as of {date}). Names
          are anonymized here as Competitor A/B/C/etc., but the billing pages
          are cited in the source list for verification. Prices can change — the
          goal is directional clarity.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#d9cfc2] text-sm">
            <thead className="bg-[#e4dbcb]">
              <tr>
                <th className="text-left p-3 border-b border-[#d9cfc2]">Competitor</th>
                <th className="text-left p-3 border-b border-[#d9cfc2]">Typical Boarding/Daycare Tier (USD/mo)</th>
                <th className="text-left p-3 border-b border-[#d9cfc2]">Notes (from public pages)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#efe6d7]">
                <td className="p-3">Competitor A</td>
                <td className="p-3">$155 with integrated payments; $180 without</td>
                <td className="p-3">Boarding-focused tier; integrated payments unlock discount.</td>
              </tr>
              <tr className="border-b border-[#efe6d7]">
                <td className="p-3">Competitor B</td>
                <td className="p-3">$99.99</td>
                <td className="p-3">Boarding/Daycare/Multi-Service plan; SMS add-on listed.</td>
              </tr>
              <tr className="border-b border-[#efe6d7]">
                <td className="p-3">Competitor C</td>
                <td className="p-3">$89 / $109 / $149 (tiered)</td>
                <td className="p-3">Module-based pricing; optional SMS; integrated payments.</td>
              </tr>
              <tr className="border-b border-[#efe6d7]">
                <td className="p-3">Competitor D</td>
                <td className="p-3">$150 (Basics) / $250 (Professional)</td>
                <td className="p-3">Messaging sold separately (flat unlimited add-on).</td>
              </tr>
              <tr>
                <td className="p-3">Competitor E</td>
                <td className="p-3">$0 (up to 10 pets) / $40 (Premium)</td>
                <td className="p-3">Month-to-month; explicit export verbiage on site.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500 mb-10">
          Sources for the anonymized table are provided at the end of this post.
          We’ve removed vendor names in-line for a neutral tone.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Add-Ons That Quietly Change Your Bill</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#d9cfc2] text-sm">
            <thead className="bg-[#e4dbcb]">
              <tr>
                <th className="text-left p-3 border-b border-[#d9cfc2]">Category</th>
                <th className="text-left p-3 border-b border-[#d9cfc2]">Typical Structure</th>
                <th className="text-left p-3 border-b border-[#d9cfc2]">Example Math</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#efe6d7]">
                <td className="p-3">SMS</td>
                <td className="p-3">Bundle (e.g., 700 texts) + overage per text or “unlimited” flat</td>
                <td className="p-3">
                  3,000 texts on a 700-included plan at $10.99 + $0.02/overage ≈ 2,300×0.02 + 10.99 = <strong>$56.99</strong>/mo.
                </td>
              </tr>
              <tr className="border-b border-[#efe6d7]">
                <td className="p-3">Payments</td>
                <td className="p-3">Processor rates (e.g., 2.9% + $0.30 online) + potential “gateway/platform” fee</td>
                <td className="p-3">
                  $50,000 card volume, 1,000 tx/mo: 2.9% ($1,450) + $0.30×1,000 ($300) = $1,750.
                  If a 1% gateway fee applies: +$500 ⇒ <strong>$2,250</strong> total.
                </td>
              </tr>
              <tr>
                <td className="p-3">Storage</td>
                <td className="p-3">Cloud storage is inexpensive at scale</td>
                <td className="p-3">
                  500 GB on common object storage ≈ <strong>$11.50</strong>/mo at $0.023/GB — negligible versus SaaS fees.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          The takeaway: don’t just compare list prices. Model your <em>usage</em> and
          lock in the 12-month total cost of ownership (TCO) before you sign.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Security & Compliance: What “Good” Looks Like</h2>
        <p className="mb-4">
          For any system that touches payments or personal data, insist on
          fundamentals that map to PCI DSS and NIST 800-63B guidance:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <span className="font-semibold">Unique logins for every staff member</span> (no shared accounts) and{' '}
            <span className="font-semibold">role-based permissions</span>.
          </li>
          <li>
            <span className="font-semibold">Multi-factor authentication (MFA)</span> available and encouraged.
          </li>
          <li>
            <span className="font-semibold">Encryption in transit and at rest</span>, plus audit logs.
          </li>
          <li>
            <span className="font-semibold">Modern password practices</span> (support long passphrases; screen
            passwords against known-compromised lists; avoid “hint” fields).
          </li>
          <li>
            <span className="font-semibold">Clear data-export paths</span> and a written policy confirming your
            data is yours — not sold or monetized.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Data Portability (Don’t Skip This)</h2>
        <p className="mb-4">
          Even if you love your choice, you should be able to leave with a clean
          export. Confirm that you can self-serve export{' '}
          <em>all</em> core entities (clients, pets, reservations, invoices,
          payments, documents, images). Ask for a test export before signing.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Rollout Plan You Can Actually Follow</h2>
        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>
            <span className="font-semibold">1–2 weeks: Discovery & data prep.</span> Clean lists, map fields,
            decide user roles, and pick go-live day.
          </li>
          <li>
            <span className="font-semibold">1 week: Parallel run.</span> Enter real bookings in both systems for
            a few days; verify reports and payments reconcile.
          </li>
          <li>
            <span className="font-semibold">Hours: Go-live window.</span> Announce to customers; enable SMS/email
            templates; turn on deposits.
          </li>
          <li>
            <span className="font-semibold">2–4 weeks post-launch:</span> Short, focused check-ins, collect
            feedback, and iterate features on a weekly/biweekly cadence.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Why We Built Petunia This Way</h2>
        <p className="mb-4">
          We’re candidly skeptical that core facility software should cost
          $150–$180 per month <em>plus</em> payment markups and add-ons — especially when
          cloud storage and compute are inexpensive. We also believe most
          “how-to” questions are better answered by quick screen-recording
          videos than long tickets. That’s why Petunia focuses on:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <span className="font-semibold">Fair, transparent pricing</span> without hidden platform fees.
          </li>
          <li>
            <span className="font-semibold">Rapid development cycles</span> (weeks, not quarters) so your
            real-world requests actually land in product.
          </li>
          <li>
            <span className="font-semibold">Top-level security practices</span>{' '}
            (unique user accounts, MFA support, encryption in transit/at rest,
            and strict privacy — we don’t sell data).
          </li>
          <li>
            <span className="font-semibold">Frictionless onboarding</span> with clean imports and simple,
            visual training.
          </li>
        </ul>

        <p className="mb-6">
          If you’re technically savvy, you probably won’t need much support.
          If you prefer hands-on help, we’ll meet you where you are. Either way,
          you shouldn’t be paying a premium for basics.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Common Pitfalls (and how to avoid them)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Signing before you see an export/import plan and sample files.</li>
          <li>Ignoring payment <em>total</em> costs (rates <em>plus</em> any add-on/gateway fees).</li>
          <li>Assuming SMS is “free” or truly unlimited — read the fine print.</li>
          <li>Underestimating how often you’ll need vendor changes; roadmap and ship-rate matter.</li>
          <li>Letting staff share logins “temporarily” — it never stays temporary.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">📚 Sources & References</h2>
        <p className="text-sm text-gray-600 mb-3">
          We anonymized brands in the article body for a neutral tone. Below are
          the public pages used to populate tables and examples (accessed {date}).
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-8">
          <li>
            Gingr – Pricing (shows “$155/mo with payments; $180/mo without” on Stay plan).{' '}
            <a
              href="https://www.gingrapp.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.gingrapp.com/pricing
            </a>
          </li>
          <li>
            Paw Partner – Pricing (Boarding/Daycare/Multi-Service $99.99; SMS 700 texts + $0.02 overage).{' '}
            <a
              href="https://pawpartner.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://pawpartner.com/pricing
            </a>
          </li>
          <li>
            Kennel Connection – Pricing ($89/$109/$149 tiers, optional SMS, integrated payments).{' '}
            <a
              href="https://kennelconnection.com/pricing2/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://kennelconnection.com/pricing2/
            </a>
          </li>
          <li>
            Goose – Pricing ($150 Basics / $250 Professional; messaging add-on).{' '}
            <a
              href="https://www.goose.pet/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.goose.pet/pricing
            </a>
          </li>
          <li>
            DoggieDashboard – Pricing & FAQs (Free up to 10 pets; Premium $40; explicit export statement).{' '}
            <a
              href="https://doggiedashboard.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://doggiedashboard.com/
            </a>
          </li>
          <li>
            Stripe – U.S. Standard Pricing (2.9% + $0.30 online).{' '}
            <a
              href="https://stripe.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://stripe.com/pricing
            </a>
          </li>
          <li>
            Square – Processing Fees (2.9% + $0.30 online; other methods vary).{' '}
            <a
              href="https://squareup.com/us/en/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://squareup.com/us/en/pricing
            </a>{' '}
            &nbsp;/&nbsp;{' '}
            <a
              href="https://squareup.com/us/en/payments/our-fees"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://squareup.com/us/en/payments/our-fees
            </a>
          </li>
          <li>
            PCI Security Standards Council – Quick Reference (unique user IDs; password guidance).{' '}
            <a
              href="https://www.pcisecuritystandards.org/documents/PCIDSS_QRGv3_1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.pcisecuritystandards.org/documents/PCIDSS_QRGv3_1.pdf
            </a>
          </li>
          <li>
            NIST SP 800-63B – Digital Identity Guidelines (authentication & lifecycle).{' '}
            <a
              href="https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-63b.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-63b.pdf
            </a>
          </li>
          <li>
            Google Cloud Storage – Pricing (regional/dual-region rates).{' '}
            <a
              href="https://cloud.google.com/storage/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://cloud.google.com/storage/pricing
            </a>
          </li>
          <li>
            AWS S3 – Pricing (S3 Standard: $0.023/GB for first 50 TB).{' '}
            <a
              href="https://aws.amazon.com/s3/pricing/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://aws.amazon.com/s3/pricing/
            </a>
          </li>
          <li>
            Merchant Cost Consulting – PetExec payment processing review (notes new 1% gateway fee effective Sept 1, 2025).{' '}
            <a
              href="https://merchantcostconsulting.com/lower-credit-card-processing-fees/petexec-payment-processing-review/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://merchantcostconsulting.com/lower-credit-card-processing-fees/petexec-payment-processing-review/
            </a>
          </li>
          <li>
            PetExec – Payment Processing (Stripe integration info).{' '}
            <a
              href="https://www.petexec.net/payment-processing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.petexec.net/payment-processing
            </a>{' '}
            &nbsp;/&nbsp;{' '}
            <a
              href="https://www.petexec.net/payment-processing-rates"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.petexec.net/payment-processing-rates
            </a>
          </li>
        </ul>

        <p className="text-xs text-gray-500 italic mb-8">
          Disclaimer: Pricing and features change frequently. Always confirm
          current terms with each provider. Nothing here is legal, tax, or
          security advice; consult qualified professionals for your facility’s
          specific needs.
        </p>

        <Link
          href={`/${locale}/blog`}
          className="inline-block underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>
      </main>
    </>
  );
}
