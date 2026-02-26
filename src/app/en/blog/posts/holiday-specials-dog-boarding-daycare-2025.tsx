'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HolidaySpecialsDogBoardingDaycare2025() {
  const locale = useLocale();

  const title = 'Holiday-Friendly Specials & Events for Dog Boarding and Daycare Facilities';
  const date = 'December 2, 2025';
  const categories = ['boarding', 'daycare', 'owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    vet: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides',
  };

  return (
    <>

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

        {/* Local anchor nav */}
        <nav className="mb-8 text-sm">
          <ul className="flex flex-wrap gap-3">
            <li><a href="#why-holiday-events" className="underline hover:opacity-80">Why Holiday Events Work</a></li>
            <li><a href="#event-ideas" className="underline hover:opacity-80">Holiday Event & Promo Ideas</a></li>
            <li><a href="#logistics-and-safety" className="underline hover:opacity-80">Logistics & Safety Considerations</a></li>
            <li><a href="#marketing-and-communication" className="underline hover:opacity-80">Marketing & Owner Communication</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">📚 Further Reading</a></li>
          </ul>
        </nav>

        {/* Why Holiday Events Work */}
        <section id="why-holiday-events" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Holiday Events & Specials Work for Daycare & Boarding</h2>
          <p className="mb-3">
            Holiday seasons bring a mix of excitement — owners often travel, schedule time off, or look for special treats for their pets. For a boarding or daycare facility, that means increased demand, but also a chance to offer something extra. Running holiday-themed events, add-ons, or promotions can:  
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Attract new clients or past clients you haven’t seen in a while.</li>
            <li>Encourage existing clients to book more days (holiday trips, extra daycare, special services).</li>
            <li>Create a sense of community and goodwill — owners appreciate the extra thought and care.</li>
            <li>Allow you to charge modest premiums for heightened service or holiday-specific packages — small things that add up in seasonal revenue. </li>
          </ul>
          <p className="mb-3">
            For inspiration and deeper strategy, we recommend checking our broader article about <Link href="https://www.petuniapets.com/en/blog/holiday-ideas-dog-boarding-daycare-2025">holiday ideas for dog boarding & daycare</Link>, which outlines several ways pet-care businesses can lean into the festive season.  
          </p>
        </section>

        {/* Event & Promo Ideas */}
        <section id="event-ideas" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Holiday Event & Promo Ideas for Your Facility</h2>
          <ul className="list-disc pl-5 space-y-3 mb-4">
            <li>
              <strong>Themed Photo Days / Portrait Sessions:</strong> Decorate a small area with holiday-themed props (lights, hats, scarves, seasonal backdrops) and offer pet owners the chance to purchase holiday portraits of their dogs — either prints or digital downloads. Great for social-media sharing too.
            </li>
            <li>
              <strong>Holiday Playtime & Party Days:</strong> Host a holiday-themed play session (e.g. “Santa Paws Day,” “Winter Wonderland romp,” “Halloween Pup-tacular,” depending on season) — with decorated spaces, holiday-safe chew toys or treats, and optional costume contests. Charge a small event fee or premium daycare rate for that day.
            </li>
            <li>
              <strong>Seasonal Care Packages & Add-Ons:</strong> Offer add-ons such as extra cuddle time, grooming, holiday-safe treat boxes, chew toy baskets, or seasonal bandanas/collars. Bundle them as “Holiday Care Packages” for clients who want a little extra pampering.
            </li>
            <li>
              <strong>Holiday Gift Certificates & Pre-Paid Packages:</strong> Sell gift certificates or pre-paid daycare/boarding credits as gifts — many dog owners buy boarding or daycare for traveling relatives, friends, or as holiday gifts. Makes a great last-minute gift item.
            </li>
            <li>
              <strong>“Pup Mail” or Holiday Cards for Dogs:</strong> Create a fun “pup mail” — postcards or holiday cards addressed from their dog, optionally with a small photo — and send them to owners or relatives. Cute, unexpected, and increases owner loyalty.
            </li>
            <li>
              <strong>Seasonal Workshops or Mini-Events (for Owners):</strong> Host short workshops or meet-ups such as holiday grooming, basic dog massage, DIY dog treat baking, or holiday safety tips — invite clients (and their friends) to join for a small fee. Doubles as community-building and marketing.
            </li>
            <li>
              <strong>Decorated “Quiet Holidays” Package:</strong> For dogs that thrive on calm — offer a quiet, low-stimulation holiday stay with gentle music or white noise, soft lighting, optional aromatherapy (safe scents), and extra rest periods — letting owners know their dog gets a peaceful holiday boarding stay rather than just group chaos. This plays to clients who value calm (especially after hearing about your decompression-focused approach).  
            </li>
            <li>
              <strong>Holiday-Themed Merchandise or Swag:</strong> Small items like holiday bandanas, seasonal collars, custom treat jars, or limited-edition holiday toys. Sell them individually or as part of a holiday package. Low overhead, potentially good margins.  
            </li>
            <li>
              <strong>“Referral Gifts” for Holiday Referrals:</strong> Run a holiday referral promotion — existing clients who refer a friend get a small discount or holiday gift (treat bag, free daycare day, etc.) when the referred friend books. Encourages word-of-mouth growth during a period when many people consider holiday travel or pet care.  
            </li>
            <li>
              <strong>Holiday Social Media & Virtual Sharing Events:</strong> Create a holiday photo album or short video compilation of pups enjoying holiday events and offer digital copies to owners. Use this also to promote the facility for potential new clients — many pet owners search for warm, community-oriented facilities for holiday boarding.  
            </li>
          </ul>
        </section>

        {/* Logistics & Safety Considerations */}
        <section id="logistics-and-safety" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Logistics & Safety — What to Keep in Mind</h2>
          <p className="mb-3">
            Holiday-themed events and packages are fun, but caring for dogs responsibly still comes first. Make sure to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Use only pet-safe decorations (avoid small choking hazards, toxic plants or foods, ornaments that can break, loose wiring near dogs, etc.).  
            </li>
            <li>
              Maintain usual sanitation, vaccination, and supervision protocols even during events and parties. Don’t let holiday fun compromise hygiene or safety.  
            </li>
            <li>
              Keep group sizes and staff-to-dog ratios reasonable — holiday excitement can increase overstimulation and risk of conflicts.  
            </li>
            <li>
              Clearly communicate with owners about what’s included in holiday packages, what is optional, and any extra cost; get written consent for add-ons or special services.  
            </li>
            <li>
              If offering overnight or “quiet holiday stay,” ensure fire safety, emergency plans, and staff or monitoring as required by your normal care standards.  
            </li>
          </ul>
        </section>

        {/* Marketing & Owner Communication */}
        <section id="marketing-and-communication" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Marketing & Owner Communication Tips for Holiday Offers</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Early announcements:</strong> Let clients know about holiday events/packages at least 4–6 weeks ahead — people plan travel or gifts in advance.  
            </li>
            <li>
              <strong>Use email newsletters, social media, and website banners:</strong> Showcase cute sample photos, highlight special packages, and explain benefits (peace of mind, holiday-ready care, socialization, photo keepsake).  
            </li>
            <li>
              <strong>Create limited-time offers or early-bird discounts:</strong> Encourage early bookings with small discounts or bonuses (free treat bag, free extra day, etc.).  
            </li>
            <li>
              <strong>Offer gift certificates or “gift-ready” packages:</strong> Make it easy for people to gift daycare or boarding to friends/family — package visually and price clearly.  
            </li>
            <li>
              <strong>Over-communicate safety and policies:</strong> Especially for holiday events, emphasize that standard care protocols remain unchanged — hygiene, vaccination, supervision, emergency planning. Build trust by being transparent.  
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>

          <p className="mb-3">
            <strong>Do holiday specials distract from core care standards?</strong><br />
            They don’t have to — if you plan carefully. The best holiday packages integrate seamlessly with regular care: proper supervision, hygiene, rest, and safety remain unchanged. Use holiday events as a value-add, not a replacement for core standards.
          </p>

          <p className="mb-3">
            <strong>Is it worth the extra work for a small facility?</strong><br />
            Yes, especially if you already have a loyal client base. Even small holiday-themed add-ons (photo sessions, treat boxes, referral promos) can generate enough extra revenue to justify the modest additional effort.  
          </p>

          <p className="mb-3">
            <strong>How should I price holiday packages?</strong><br />
            Consider your costs (supplies, staff time, cleaning, props) and the perceived added value. Many owners are willing to pay for festive vibes or extra convenience during busy periods. A modest premium over standard rates — or flat-fee on top of regular boarding/daycare — often balances everything well.  
          </p>

          <p>
            <strong>How do I avoid holiday-related safety risks?</strong><br />
            Prioritize pet-safe materials, avoid toxic decorations or foods, keep group sizes and supervision top-priority, and treat holiday extras as optional add-ons — never mandatory for core care. Transparency, consent, and clear communication are key.
          </p>
        </section>

        {/* Sources / Further Reading */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Further Reading &amp; Inspiration</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Petunia’s national-level holiday ideas for dog boarding &amp; daycare: <Link href="https://www.petuniapets.com/en/blog/holiday-ideas-dog-boarding-daycare-2025">https://www.petuniapets.com/en/blog/holiday-ideas-dog-boarding-daycare-2025</Link>
            </li>
          </ul>
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
