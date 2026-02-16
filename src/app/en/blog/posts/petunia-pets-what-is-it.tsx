'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function PetuniaPetsWhatIsIt() {
  const locale = useLocale();

  const title = "Petunia Pets: What It's For, and How It Works";
  const date = 'August 26, 2025';
  const categories = ['boarding', 'owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    food: 'Dog Food & Nutrition',
    boarding: 'Boarding & Daycare',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
  };

  const metaDescription =
    'Petunia Pets is modern dog boarding & daycare software: real-time booking, vaccine & waiver enforcement, reminders, grooming add-ons, multi-location, iOS & web. $5/month for businesses with a 30-day free trial; owners are free.';

  // JSON-LD for Organization + SoftwareApplication + FAQPage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.petuniapets.com/#org',
        name: 'Petunia Pets',
        legalName: 'Berkley Creek Software LLC',
        url: 'https://www.petuniapets.com/',
        areaServed: ['US', 'CA', 'GB', 'IE', 'AU', 'NZ'],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'admin@petuniapets.com',
          availableLanguage: ['en'],
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://www.petuniapets.com/#app',
        name: 'Petunia',
        alternateName: 'Petunia Pets',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'iOS, Web',
        url: 'https://www.petuniapets.com/',
        installUrl: 'https://apps.apple.com/us/app/petunia-pets/id6744536836',
        offers: [
          {
            '@type': 'Offer',
            description: 'Free for individual pet owners',
            price: '0',
            priceCurrency: 'USD',
            category: 'free',
          },
          {
            '@type': 'Offer',
            description:
              'Boarding & daycare businesses (30-day free trial; then $5/month)',
            price: '5',
            priceCurrency: 'USD',
            category: 'subscription',
            areaServed: ['US', 'CA', 'GB', 'IE', 'AU', 'NZ'],
          },
        ],
        softwareHelp: {
          '@type': 'CreativeWork',
          about: 'Support via email; calls scheduled as needed',
          url: 'mailto:admin@petuniapets.com',
        },
        publisher: {
          '@id': 'https://www.petuniapets.com/#org',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.petuniapets.com/petunia-pets-what-is-it/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is Petunia Pets free for pet owners?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Owner accounts are free.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does Petunia Pets cost for businesses?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Boarding and daycare businesses pay $5 per month in USD after a 30-day free trial.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Petunia Pets have an Android app?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not yet. Android users can access Petunia Pets on any modern mobile browser.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I upload vaccine records from my phone?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You can upload vaccine images and set expiration dates; reminders are sent before expiry.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I have to sign a waiver for every booking?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. You will only be asked to sign again if your facility updates its waiver.',
            },
          },
          {
            '@type': 'Question',
            name: 'How are no-shows and deposits handled?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Facilities set their own deposit, cancellation, and no-show policies inside Petunia Pets. The app tracks no-shows; in-app payments are on the roadmap.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I export my data?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Self-service exports are not available yet. Facilities can request specific exports and we can build them.',
            },
          },
          {
            '@type': 'Question',
            name: 'When are payments and staff scheduling coming?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Payments are targeted for 6–10 months and staff scheduling for 3–6 months, subject to change based on demand.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="all" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

        {/* INTRO */}
        <p className="text-lg mb-4">
          Petunia Pets is modern dog boarding &amp; daycare software built to be simple,
          real-time, and affordable. On iOS it&rsquo;s listed as <strong>Petunia</strong>;
          across our website and product you&rsquo;ll see <strong>Petunia Pets</strong>.
          The platform brings boarding and daycare together, supports multi-location
          operations, and keeps pricing straightforward so facilities of any size can
          participate.
        </p>
        <p className="mb-6">
          Our focus is threefold: <strong>keep price low</strong> (competitors have not
          matched our pricing), <strong>ship improvements fast</strong>, and{' '}
          <strong>respect the people who run pet-care businesses</strong> by saving them
          time and money. Facilities configure rules to match how they actually operate;
          there&rsquo;s no cookie-cutter gating of your processes.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">What is Petunia Pets?</h2>
        <p className="mb-4">
          Petunia Pets is an all-in-one platform that helps boarding/daycare facilities run
          day-to-day operations and lets owners manage their pets. Key workflows—real-time
          booking, vaccine &amp; waiver compliance, reminders, and grooming add-ons—are
          built in.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Who can sign up (business):</strong> Boarding &amp; daycare facilities
          </li>
          <li>
            <strong>Price (business):</strong> $5/month (USD) after a 30-day free trial
          </li>
          <li>
            <strong>Owner accounts:</strong> Free
          </li>
          <li>
            <strong>Countries supported:</strong> US, Canada, UK, Ireland, Australia, New
            Zealand
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          For Boarding/Daycare Facilities
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Real-time bookings:</strong> Accepted clients book within your rules
            (hours, capacities, arrival windows). Each business can set unique settings.
          </li>
          <li>
            <strong>Compliance baked in:</strong> Vaccine uploads with enforced expiration
            dates; waiver enforcement so clients must sign before booking. If you edit your
            waiver, clients re-sign.
          </li>
          <li>
            <strong>Grooming add-ons:</strong> Offer optional services during daycare or
            boarding bookings—per-pet and multi-select.
          </li>
          <li>
            <strong>No-shows &amp; policies:</strong> Configure deposits/cancellations/no-show
            policies to match your operation. (In-app payment processing is on the roadmap.)
          </li>
          <li>
            <strong>Multi-location support:</strong> Built in for operators with more than one
            site.
          </li>
          <li>
            <strong>Staff scheduling:</strong> In development (target 3–6 months, subject to
            change).
          </li>
          <li>
            <strong>Payments:</strong> On the roadmap (target 6–10 months, subject to change).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">For Pet Owners</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            Create a free account, add pets, upload vaccines, and connect with a facility
            that uses Petunia Pets.
          </li>
          <li>
            Book in real time once your facility approves you as a client within Petunia
            Pets.
          </li>
          <li>Receive reminders ahead of vaccine expirations and upcoming visits.</li>
          <li>
            Sign waivers digitally; if a facility updates its waiver, you&rsquo;ll be asked
            to review and sign again.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Core Features (Booking, Vaccines, Waivers, Reminders)
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Online booking (real time):</strong> Availability reflects each
            facility&rsquo;s custom rules.
          </li>
          <li>
            <strong>Vaccine tracking &amp; expirations:</strong> Upload records, set dates,
            and receive reminders before expiry.
          </li>
          <li>
            <strong>Waiver enforcement:</strong> Require signatures before any booking and
            re-prompt on edits.
          </li>
          <li>
            <strong>SMS &amp; email reminders:</strong> Configurable messaging to keep
            clients on track.
          </li>
          <li>
            <strong>Grooming add-ons:</strong> Attach services to one or multiple pets in
            the same booking.
          </li>
          <li>
            <strong>Client portal:</strong> Profiles, pets, vaccine uploads, waiver history,
            upcoming reservations, and notifications.
          </li>
        </ul>

        <div className="rounded-xl border border-[#d9cfc2] bg-[#f7f4ee] p-4 text-sm mb-8">
          <strong>Not yet available:</strong> Daycare packages/credits and self-serve data
          exports. (We can build exports based on demand. Payments &amp; staff scheduling
          are already in development windows noted above.)
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Platforms (iOS / Android / Web)
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>iOS App:</strong>{' '}
            <a
              className="underline"
              href="https://apps.apple.com/us/app/petunia-pets/id6744536836"
              target="_blank"
              rel="noopener noreferrer"
            >
              Petunia on the App Store
            </a>
          </li>
          <li>
            <strong>Android:</strong> No native app yet; fully supported on any modern
            Android browser.
          </li>
          <li>
            <strong>Web:</strong> Works on every major desktop and mobile browser.
          </li>
          <li>
            <strong>Account security:</strong> Email verification is required at sign-up.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Start</h2>
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="rounded-xl border border-[#d9cfc2] p-4">
            <h3 className="text-lg font-semibold mb-2">For Pet Owners (Free)</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Create an individual account.</li>
              <li>Add your pets and upload vaccine records.</li>
              <li>
                Connect with your facility and, once accepted, book in real time.
              </li>
              <li>Receive reminders for visits and vaccine deadlines.</li>
            </ol>
          </div>
          <div className="rounded-xl border border-[#d9cfc2] p-4">
            <h3 className="text-lg font-semibold mb-2">
              For Boarding/Daycare Businesses
            </h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Create a business account (boarding/daycare).</li>
              <li>
                We are notified automatically and reach out within 24 hours to help you
                get set up.
              </li>
              <li>Configure hours, services, waivers, and booking rules.</li>
              <li>Invite/approve clients and start taking bookings.</li>
            </ol>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Link
            href={`/${locale}/loginsignup`}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium bg-[#2c4a30] text-white hover:opacity-90"
          >
            Create your account
          </Link>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Support &amp; Trust</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Support:</strong> Email{' '}
            <a
              className="underline"
              href="mailto:admin@petuniapets.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              admin@petuniapets.com
            </a>{' '}
            (we schedule calls as needed).
          </li>
          <li>
            <strong>Privacy Policy:</strong>{' '}
            <Link className="underline" href="/en/privacypolicy">
              petuniapets.com/en/privacypolicy
            </Link>
          </li>
          <li>
            <strong>Data protection:</strong> Data is encrypted in transit and at rest
            using Google-cloud-backed services.
          </li>
          <li>
            <strong>Data exports:</strong> Not available yet; we can build specific
            exports based on customer requests.
          </li>
          <li>
            <strong>Where we&rsquo;re based:</strong> United States (north of Pittsburgh,
            Pennsylvania).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">FAQ</h2>
        <div id="faq" className="space-y-4 mb-10">
          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              Is Petunia Pets free for pet owners?
            </summary>
            <p className="mt-2">Yes. Owner accounts are free.</p>
          </details>
          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              How much does Petunia Pets cost for businesses?
            </summary>
            <p className="mt-2">
              Boarding/daycare businesses pay $5/month (USD) after a 30-day free trial.
            </p>
          </details>
          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              Does Petunia Pets have a native Android app?
            </summary>
            <p className="mt-2">
              Not yet. Android users can access Petunia Pets on any modern mobile
              browser.
            </p>
          </details>
          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              Can I upload vaccine records from my phone?
            </summary>
            <p className="mt-2">
              Yes—snap a photo, upload, and set expiration dates. Reminders are sent
              before expiry.
            </p>
          </details>
          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              Do I have to sign a waiver for every booking?
            </summary>
            <p className="mt-2">
              No. You only re-sign if your facility updates its waiver.
            </p>
          </details>
          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              How are no-shows and deposits handled?
            </summary>
            <p className="mt-2">
              Facilities set their own deposit, cancellation, and no-show policies in
              Petunia Pets. The app tracks no-shows. In-app payment processing is on the
              roadmap.
            </p>
          </details>
          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">Can I export my data?</summary>
            <p className="mt-2">
              Self-serve exports are not available yet. If you need specific exports,
              tell us—we can build them.
            </p>
          </details>
          <details className="rounded-xl border border-[#d9cfc2] p-4">
            <summary className="font-semibold cursor-pointer">
              When are payments and staff scheduling coming?
            </summary>
            <p className="mt-2">
              Payments: targeted 6–10 months. Staff scheduling: targeted 3–6 months.
              Timelines may change based on demand.
            </p>
          </details>
        </div>

        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Footnote */}
        <p className="text-xs text-gray-500 mt-8">
          Feature availability and timelines reflect current plans and may change. For
          questions or requests, please email admin@petuniapets.com.
        </p>
      </main>
    </>
  );
}
