'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function GMBTipsBoarding2025() {
  const locale = useLocale();

  const title = 'Top Google My Business Tips for Pet Boarding Facilities';
  const date = 'October 14, 2025';
  const categories = ['boarding', 'marketing', 'owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding & Daycare',
    marketing: 'Marketing & SEO',
    daycare: 'Daycare Facilities',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    rescue: 'Rescues',
  };

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta
          name="description"
          content="Learn how to optimize your Google My Business listing for your dog boarding or daycare facility. Improve visibility, manage reviews, and grow trust with this actionable GMB checklist and brand reputation guide."
        />
        <meta name="robots" content="all" />
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
          In today’s pet care market, your Google My Business (GMB) profile is often the
          first impression new clients have of your boarding or daycare facility. A
          well-optimized listing helps you rank higher in the local search “map pack,”
          increase calls and website visits, and establish trust before a client ever
          walks through your door.
        </p>

        <p className="mb-6">
          This article covers step-by-step optimization techniques for your GMB listing,
          explains how reviews directly affect rankings, and offers professional templates
          for replying to reviews—both positive and negative. Finally, it links back to our
          Petunia guide on <em>Brand Reputation and Client Trust</em>, ensuring your online
          presence reflects the same care you provide in person.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Quick Answer (Straight to the Point)</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Complete every section of your GMB listing—accuracy boosts visibility.</li>
          <li>Upload high-quality photos of dogs, facilities, and staff regularly.</li>
          <li>Respond to all reviews (especially negative ones) within 48 hours.</li>
          <li>Post weekly updates with new photos, promotions, or community events.</li>
          <li>Maintain consistent business hours, category tags, and contact info.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Part 1 — Why Google My Business Matters</h2>
        <p className="mb-4">
          Nearly 90% of local pet service decisions start with a Google search (BrightLocal,
          2024). For boarding and daycare operators, that means your GMB profile is as
          important as your website. A complete listing improves credibility, helps Google
          match your services to “near me” searches, and signals activity to potential
          clients.
        </p>
        <p className="mb-6">
          The goal is not just to appear—but to appear with excellence: accurate details,
          appealing visuals, timely responses, and glowing reviews that show reliability
          and empathy.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 2 — The Petunia GMB Optimization Checklist
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[#d9cfc2] text-sm">
            <thead className="bg-[#e4dbcb] text-[#2c4a30]">
              <tr>
                <th className="p-2 text-left">Section</th>
                <th className="p-2 text-left">What to Do</th>
                <th className="p-2 text-left">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Business Name</td>
                <td className="p-2">Use your exact registered name (no keyword stuffing).</td>
                <td className="p-2">Maintains credibility and compliance.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Categories</td>
                <td className="p-2">Primary: Dog Boarding Service; Secondary: Dog Daycare, Pet Groomer, etc.</td>
                <td className="p-2">Increases visibility across multiple search intents.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Description</td>
                <td className="p-2">Include your core services, values, and local keywords.</td>
                <td className="p-2">Improves SEO and client clarity.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Photos</td>
                <td className="p-2">Upload at least 20 high-resolution images (facility, play areas, staff, pets).</td>
                <td className="p-2">Listings with photos get 42% more direction requests.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Posts</td>
                <td className="p-2">Share weekly updates about events, new services, or happy clients.</td>
                <td className="p-2">Shows active engagement and boosts freshness signals.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Q&amp;A</td>
                <td className="p-2">Seed common questions (“Do you accept puppies?”) with official answers.</td>
                <td className="p-2">Prevents misinformation and builds authority.</td>
              </tr>
              <tr className="border-t border-[#d9cfc2]">
                <td className="p-2">Reviews</td>
                <td className="p-2">Request feedback consistently and reply courteously to all reviews.</td>
                <td className="p-2">Improves rankings and client trust.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 3 — How Reviews Affect Local Pack Ranking
        </h2>
        <p className="mb-4">
          Google’s local algorithm weighs three pillars: relevance, distance, and
          prominence. Reviews influence all three. Frequent, positive feedback signals
          authority and trustworthiness, helping your facility appear in the top 3 “map
          pack” results for searches like “dog boarding near me.”
        </p>
        <p className="mb-6">
          According to Moz’s 2024 Local Search Ranking Factors report, reviews contribute
          up to 16% of local ranking signals—more than backlinks or on-page content.
          Authentic, consistent reviews increase click-through rates and lower bounce
          rates, reinforcing Google’s confidence in your business.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 4 — How to Encourage and Manage Reviews
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Ask within 48 hours of a client’s visit while experience is fresh.</li>
          <li>
            Use direct review links (short URLs from your GMB dashboard) via text or email.
          </li>
          <li>Display a QR code in your lobby linking to your review form.</li>
          <li>Always thank reviewers publicly—acknowledgment strengthens loyalty.</li>
        </ul>

        <p className="mb-6">
          Avoid incentivizing reviews; instead, rely on genuine follow-ups and community
          engagement. Consistency is the key—Google prefers natural, steady feedback over
          bursts of reviews in short periods.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 5 — Replying to Reviews (Templates Included)
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">✅ Positive Review Reply Example</h3>
        <blockquote className="border-l-4 border-[#d9cfc2] pl-4 italic mb-4">
          “Thank you, Sarah! We loved having Bailey stay with us this week. She was a joy
          during playtime and naps. We can’t wait to see her again soon!”
        </blockquote>

        <h3 className="text-xl font-semibold mt-6 mb-2">⚠️ Negative Review Reply Example</h3>
        <blockquote className="border-l-4 border-[#d9cfc2] pl-4 italic mb-4">
          “Hi John, thank you for sharing your feedback. We’re sorry your experience didn’t
          meet expectations. Our goal is always your dog’s comfort and safety. We’d love to
          discuss this further—please call our manager directly at [number] so we can make
          things right.”
        </blockquote>

        <p className="mb-6">
          These templates demonstrate empathy, accountability, and professionalism. Never
          argue publicly or reveal private details. Invite offline conversation and follow
          through promptly. Transparent, calm responses often convert unhappy reviewers
          into loyal advocates.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 6 — Posting Strategy and Visual Optimization
        </h2>
        <p className="mb-4">
          Consistent posting keeps your GMB profile active. Treat it like a mini social
          feed showcasing your brand personality. Ideal post types include:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Photo updates of happy dogs, clean suites, or staff milestones.</li>
          <li>Event announcements—holiday boarding openings, adoption drives, etc.</li>
          <li>Educational snippets linking to your Petunia Blog content.</li>
          <li>Behind-the-scenes posts showing play areas and sanitation practices.</li>
        </ul>

        <p className="mb-6">
          Use natural lighting, candid shots, and clean backgrounds. Geotag images when
          uploading; it subtly reinforces your local authority for “near me” searches.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Part 7 — Connect to Your Brand Reputation Strategy
        </h2>
        <p className="mb-4">
          Your Google My Business reputation is an extension of your broader brand trust
          efforts. Pair consistent reviews and posts with your ongoing brand reputation
          practices described in our companion article:
        </p>

        <p className="mb-6">
          <Link
            href={`/${locale}/blog/brand-reputation-for-pet-businesses`}
            className="underline text-[#2c4a30] font-medium hover:opacity-80"
          >
            → Read: Building Brand Reputation and Client Trust in Pet Care
          </Link>
        </p>

        <p className="mb-6">
          Combined, these strategies ensure that your facility ranks well, retains
          customers, and builds an authentic, lasting community presence—both online and
          offline.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Final Takeaway</h2>
        <p className="mb-6">
          Google My Business is not a set-and-forget tool—it’s your digital storefront. By
          maintaining accurate details, engaging content, and thoughtful responses, you’ll
          consistently rank higher, earn more bookings, and demonstrate professionalism that
          pet owners can trust.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">References</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm mb-10">
          <li>BrightLocal. (2024). <em>Local Consumer Review Survey.</em></li>
          <li>Moz. (2024). <em>Local Search Ranking Factors Report.</em></li>
          <li>Google Business Profile Help Center. (2025). <em>Manage Reviews and Q&amp;A Sections.</em></li>
          <li>Pet Care Marketing Alliance. (2024). <em>Digital Presence Standards for Pet Service Providers.</em></li>
        </ul>

        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="underline text-[#2c4a30] font-medium hover:opacity-80"
        >
          ← Back to Blog
        </Link>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-8">
          This article provides educational marketing guidance. Results may vary by region
          and competition level. Always follow Google’s Business Profile content policies
          when publishing images or responding to reviews.
        </p>
      </main>
    </>
  );
}
