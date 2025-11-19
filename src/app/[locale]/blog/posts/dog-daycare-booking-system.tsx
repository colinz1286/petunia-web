'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DogDaycareBookingSystem() {
  const locale = useLocale();

  const title =
    'Dog Daycare Booking System: How Modern Scheduling Software Streamlines Operations in 2026';
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
    'A complete guide to dog daycare booking systems: what they are, how they work, essential features, automation tools, safety workflows, and how modern software improves efficiency, reduces errors, and helps facilities scale.';

  const canonicalUrl = `https://www.petuniapets.com/${locale}/blog/dog-daycare-booking-system`;

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        <meta name="robots" content="all" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* JSON-LD SCHEMA */}
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
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">Posted on {date}</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c) => (
            <span
              key={c}
              className="text-xs bg-[#e4dbcb] text-[#2c4a30] px-3 py-1 rounded-full border border-[#d9cfc2]"
            >
              {categoryLabels[c] ?? c}
            </span>
          ))}
        </div>

        {/* Local Nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#what-it-is" className="underline hover:opacity-80">What Is a Daycare Booking System?</a></li>
            <li><a href="#features" className="underline hover:opacity-80">Core Features</a></li>
            <li><a href="#automation" className="underline hover:opacity-80">Automation Tools</a></li>
            <li><a href="#safety" className="underline hover:opacity-80">Safety Workflows</a></li>
            <li><a href="#benefits" className="underline hover:opacity-80">Benefits for Owners &amp; Staff</a></li>
            <li><a href="#buyers" className="underline hover:opacity-80">Buyer&rsquo;s Guide</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Sources</a></li>
          </ul>
        </nav>

        {/* TLDR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            A <strong>dog daycare booking system</strong> is a digital scheduling and check-in platform that manages reservations, capacity,
            waivers, vaccination records, and staff workflows. The goal is to reduce manual errors, speed up check-ins, improve safety, and
            give owners a frictionless online experience. Modern systems now include automation tools like recurring daycare plans,
            real-time capacity management, reminders, and integrated payments.
          </p>

          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            For deeper software comparisons, review:<br />
            <a
              href="http://localhost:3000/en/blog/from-clipboards-to-cloud-dog-daycare-management-software-2026"
              target="_blank"
              className="underline"
            >
              From Clipboards to Cloud: Daycare Management Software 2026
            </a><br />
            <a
              href="http://localhost:3000/en/blog/best-dog-boarding-and-daycare-software-buyer-guide"
              target="_blank"
              className="underline"
            >
              Best Daycare &amp; Boarding Software Buyer Guide
            </a><br />
            <a
              href="http://localhost:3000/en/blog/how-much-does-dog-boarding-and-daycare-software-cost-2025"
              target="_blank"
              className="underline"
            >
              How Much Does Daycare &amp; Boarding Software Cost (2025)?
            </a>
          </div>
        </section>

        {/* What it is */}
        <section id="what-it-is" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">What Is a Dog Daycare Booking System?</h2>
          <p className="mb-3">
            A dog daycare booking system is a centralized online platform where pet owners schedule daycare visits, submit profiles,
            sign waivers, upload vaccines, and receive confirmations. For facilities, it is the operational backbone — replacing
            handwritten calendars, text-message scheduling, and manual spreadsheets with a unified workflow.
          </p>
          <p>
            These systems now integrate with payments, capacity tracking, employee scheduling, and automated reminders, making them
            essential for modern daycare businesses of any size.
          </p>
        </section>

        {/* Features */}
        <section id="features" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Core Features Every Booking System Should Include</h2>

          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Online scheduling:</strong> Web-based booking with instant confirmations.</li>
            <li><strong>Dog profiles:</strong> Vaccines, behavior notes, feeding instructions, medications, and emergency contacts.</li>
            <li><strong>Digital waivers:</strong> Legally compliant forms stored with timestamps.</li>
            <li><strong>Capacity management:</strong> Real-time limits for small, medium, and large playgroups.</li>
            <li><strong>Integrated payments:</strong> Deposits, packages, prepaid credits, and checkout invoices.</li>
            <li><strong>Automated reminders:</strong> Vaccination expiration alerts and booking confirmations.</li>
            <li><strong>Reporting:</strong> Attendance trends, peak hours, revenue categories, and staffing needs.</li>
          </ul>
        </section>

        {/* Automation */}
        <section id="automation" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Automation Tools That Reduce Workload</h2>
          <p className="mb-3">
            Automation is now a competitive advantage. Facilities using modern booking software spend far less time chasing paperwork,
            calling clients, and copying data across systems.
          </p>

          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Auto-approve repeat clients with valid vaccines.</li>
            <li>Recurring daycare plans (weekly, monthly, seasonal).</li>
            <li>Smart reminders for pickups, late fees, and schedule changes.</li>
            <li>Auto-generated daily rosters for staff.</li>
            <li>Instant grooming add-on prompts.</li>
            <li>Same-day “quick check-in” scanning to reduce lines.</li>
          </ul>
        </section>

        {/* Safety */}
        <section id="safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Safety Workflows Embedded Into Software</h2>
          <p className="mb-3">
            A daycare booking system is not only about scheduling — it is about safety. High-quality systems enforce structured
            workflows that reduce risk during drop-off, playgroup rotation, and pickup.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Vaccination verification before confirmation.</li>
            <li>Behavior flags for reactivity, resource guarding, or fear.</li>
            <li>Group allocation based on size, temperament, or play style.</li>
            <li>Tracking of medications, feeding notes, and special instructions.</li>
            <li>Automated incident tracking and reporting.</li>
          </ul>
        </section>

        {/* Benefits */}
        <section id="benefits" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Benefits for Owners, Dogs, and Staff</h2>

          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Faster check-ins</strong> with digital profiles and QR codes.</li>
            <li><strong>Fewer scheduling errors</strong> due to centralized calendars.</li>
            <li><strong>Better communication</strong> through real-time reminders and confirmations.</li>
            <li><strong>More consistent safety processes</strong> across staff.</li>
            <li><strong>Clearer capacity limits</strong>, preventing overcrowding.</li>
          </ul>
        </section>

        {/* Buyers Guide */}
        <section id="buyers" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Buyer&rsquo;s Guide: How to Choose the Right System</h2>
          <p className="mb-3">
            When choosing a daycare booking system, focus on reliability, cost transparency, core features, and support quality.
            Most facilities underestimate the long-term operational savings until after adoption.
          </p>

          <p className="mb-3">
            For a thorough evaluation of the top software platforms, read:<br />
            <a
              href="http://localhost:3000/en/blog/best-dog-boarding-and-daycare-software-buyer-guide"
              className="underline"
              target="_blank"
            >
              The Best Daycare &amp; Boarding Software Buyer Guide
            </a>
          </p>

          <p>
            And for a breakdown of pricing factors:<br />
            <a
              href="http://localhost:3000/en/blog/how-much-does-dog-boarding-and-daycare-software-cost-2025"
              className="underline"
              target="_blank"
            >
              How Much Does Daycare &amp; Boarding Software Cost (2025)?
            </a>
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Can owners book recurring daycare sessions?</strong><br />
            Yes — high-quality systems now support weekly recurring bookings or pre-paid plans.
          </p>

          <p className="mb-3">
            <strong>Does a daycare booking system handle vaccines?</strong><br />
            Most systems allow uploading vaccination records and send alerts before expiration.
          </p>

          <p className="mb-3">
            <strong>Does it integrate with boarding reservations?</strong><br />
            Many platforms do — especially hybrid systems that support both daycare and overnight stays.
          </p>

          <p>
            <strong>Is staff training required?</strong><br />
            Minimal; cloud-based tools are designed for quick onboarding and mobile use.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Petunia Blog — Dog Daycare Management Software (2026).</li>
            <li>Petunia Buyer Guide — Boarding &amp; Daycare Software Platforms.</li>
            <li>Petunia Cost Breakdown — Software Pricing 2025.</li>
            <li>NBPSA Standards &amp; Operational Recommendations (2023).</li>
            <li>American Boarding Services Association (ABSA), Tech Adoption Report (2024).</li>
          </ul>

          <p className="text-xs text-gray-600 mt-4">
            Educational content only — consult your software provider and legal counsel for operational or compliance decisions.
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
