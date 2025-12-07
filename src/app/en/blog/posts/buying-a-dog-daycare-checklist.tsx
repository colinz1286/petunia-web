'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function BuyingADogDaycareChecklist() {
  const locale = useLocale();

  const title =
    'Buying a Dog Daycare Checklist: What to Evaluate Before Purchasing a Daycare or Boarding Facility in 2026';
  const date = 'November 19, 2025';
  const categories = ['boarding'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides'
  };

  const description =
    'A complete checklist for buying a dog daycare or boarding facility: what to inspect, financial metrics to review, licensing considerations, safety standards, staffing, client lists, building needs, zoning rules, and hidden operational risks.';

  const canonicalUrl = `https://www.petuniapets.com/${locale}/blog/buying-a-dog-daycare-checklist`;

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: title,
              description,
              datePublished: date,
              dateModified: date,
              url: canonicalUrl,
              author: { '@type': 'Organization', name: 'Petunia' },
              publisher: {
                '@type': 'Organization',
                name: 'Petunia',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.petuniapets.com/logo.png'
                }
              }
            })
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2c4a30]">
        {/* Meta + Title */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Category Pills */}
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

        {/* Local Nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#overview" className="underline hover:opacity-80">Buying a Facility 101</a></li>
            <li><a href="#financials" className="underline hover:opacity-80">Financial Checklist</a></li>
            <li><a href="#safety" className="underline hover:opacity-80">Safety &amp; Operations Review</a></li>
            <li><a href="#building" className="underline hover:opacity-80">Building &amp; Zoning</a></li>
            <li><a href="#employees" className="underline hover:opacity-80">Staffing Evaluation</a></li>
            <li><a href="#client-base" className="underline hover:opacity-80">Client Base Evaluation</a></li>
            <li><a href="#transition" className="underline hover:opacity-80">Transition Planning</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Buying a dog daycare or boarding facility requires evaluating finances, safety protocols, staffing, building condition,
            zoning, licensing, customer base, local reputation, and operational software. A structured, neutral checklist prevents
            expensive surprises and helps buyers understand whether the business is stable, scalable, or in need of major updates.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            You can also review:<br />
            <a
              href="https://www.petuniapets.com/en/blog/choose-dog-boarding-daycare"
              target="_blank"
              className="underline"
            >
              Choosing a Dog Boarding or Daycare Facility
            </a>
            <br />
            <a
              href="https://petuniapets.com/en/blog/boarding-daycare-checklist-2025"
              target="_blank"
              className="underline"
            >
              Boarding &amp; Daycare Checklist (2025)
            </a>
          </div>
        </section>

        {/* Buying Overview */}
        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Buying a Dog Daycare or Boarding Facility: What You Are Really Evaluating</h2>
          <p className="mb-3">
            Purchasing a daycare or boarding facility is less about buying a building and more about acquiring a functioning ecosystem:
            staff culture, safety processes, client trust, equipment, licensing, and reputation. A strong facility has predictable
            systems, documented workflows, and a stable financial history.
          </p>
          <p>
            A weaker facility may require large investment in renovations, staffing, or operational restructuring. A neutral, structured
            checklist helps you understand where the business currently stands.
          </p>
        </section>

        {/* Financial Checklist */}
        <section id="financials" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Financial Checklist</h2>

          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Last 3–5 years of financial statements:</strong> revenue, expenses, EBITDA, tax returns.</li>
            <li><strong>Occupancy and capacity trends:</strong> daycare bookings, boarding fill rates, seasonality.</li>
            <li><strong>Client retention:</strong> how many clients return monthly or annually.</li>
            <li><strong>Pricing structure:</strong> competitors, package plans, discounting behavior.</li>
            <li><strong>Debt and leases:</strong> equipment loans, building lease terms, renewal timelines.</li>
            <li><strong>Software subscriptions:</strong> management platform, payment processing, marketing tools.</li>
            <li><strong>Hidden costs:</strong> HVAC repairs, drainage, flooring, noise mitigation, insurance premium history.</li>
          </ul>
        </section>

        {/* Safety & Operations */}
        <section id="safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safety &amp; Operational Systems</h2>
          <p className="mb-3">
            A well-run daycare or boarding business has strict safety protocols that reduce risk, prevent incidents, and protect staff.
            Buyers should verify that processes are documented and consistently followed.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Vaccination verification workflows.</li>
            <li>Group play evaluations and temperament testing.</li>
            <li>Clear separation between small and large dogs.</li>
            <li>Cleaning protocols and frequency.</li>
            <li>Emergency plans for illness, injury, or escape.</li>
            <li>Dog-to-staff ratios during peak hours.</li>
            <li>Incident reporting and resolution systems.</li>
            <li>Noise control and stress mitigation (white noise, rest schedules).</li>
          </ul>
        </section>

        {/* Building */}
        <section id="building" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Building, Zoning &amp; Compliance</h2>
          <p className="mb-3">
            Whether the facility is leased or owned, the physical structure determines long-term sustainability and cost. A good
            evaluation includes both safety and regulatory requirements.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Local zoning classification for boarding/daycare use.</li>
            <li>Fire code compliance, sprinklers, alarms, emergency exits.</li>
            <li>Drainage, flooring durability, kennel layout, and air quality.</li>
            <li>Outdoor yard: fencing, gates, turf condition, drainage.</li>
            <li>Parking and traffic flow during peak drop-off hours.</li>
            <li>Noise ordinances and neighbor relations.</li>
          </ul>
        </section>

        {/* Staffing */}
        <section id="employees" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Staffing &amp; Training Evaluation</h2>
          <p className="mb-3">
            The quality of a dog daycare or boarding operation depends heavily on its people. A business may look profitable on paper
            but struggle due to turnover or lack of qualified staff.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Tenure of current staff — how long have they been there?</li>
            <li>Training programs for dog handling and safety.</li>
            <li>Employee certifications or experience levels.</li>
            <li>Managerial stability and leadership structure.</li>
            <li>Pay structure, overtime, and scheduling consistency.</li>
            <li>Employee-to-dog ratios.</li>
          </ul>
        </section>

        {/* Client Base */}
        <section id="client-base" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Client Base Evaluation</h2>
          <p className="mb-3">
            A loyal and stable client base is one of the strongest indicators of a healthy daycare or boarding business. Ask for
            anonymized, exportable reports to verify the following:
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Monthly active clients.</li>
            <li>Retention rate over the past 12–24 months.</li>
            <li>How many clients use recurring daycare plans.</li>
            <li>The split between daycare vs. boarding revenue.</li>
            <li>Peak hours and seasonal booking patterns.</li>
          </ul>
        </section>

        {/* Transition Planning */}
        <section id="transition" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Transition Planning: What Happens After the Sale?</h2>
          <p className="mb-3">
            Even with a good purchase, the transition phase determines future stability. Most buyers underestimate the value of
            overlap between previous ownership and new management.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Agreed-upon transition period with the seller.</li>
            <li>Training on existing workflows, equipment, and software.</li>
            <li>Clear messaging to clients about continuity.</li>
            <li>Documented handbook and safety protocols.</li>
            <li>Audit of all vendor relationships (cleaning, landscaping, supplies).</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Is buying a dog daycare profitable?</strong><br />
            It can be, but profitability depends on occupancy, pricing, staffing costs, and building requirements.
          </p>

          <p className="mb-3">
            <strong>How much should I budget for renovation?</strong><br />
            Flooring, drainage, fencing, HVAC, and noise mitigation are the most common expenses.
          </p>

          <p>
            <strong>Should the seller stay on temporarily?</strong><br />
            In many cases, yes — continuity helps clients and staff adapt to new ownership smoothly.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Petunia Blog — Choosing a Dog Boarding or Daycare Facility.</li>
            <li>Petunia Blog — Boarding &amp; Daycare Checklist (2025).</li>
            <li>NBPSA — Operational and Safety Guidelines (2023).</li>
            <li>American Boarding Services Association — New Owner Transition Framework (2024).</li>
            <li>Small Business Administration (SBA) — Business Acquisition Due Diligence.</li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only — consult legal and financial professionals before purchasing a business.
          </p>
        </section>

        {/* Back Link */}
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
