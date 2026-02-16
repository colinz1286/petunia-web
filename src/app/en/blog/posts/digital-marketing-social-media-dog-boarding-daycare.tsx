'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function DigitalMarketingSocialMediaForBoardingDaycare() {
  const locale = useLocale();

  // --- Metadata ---------------------------------------------------------------
  const title =
    'Digital Marketing & Social Media Strategies for Dog Boarding & Dog Daycare Businesses';
  const date = 'August 23, 2025';
  const categories = ['boarding', 'daycare'] as const;

  // Keep keys/labels EXACTLY as used in prior posts
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

  const description =
    'A complete, practical playbook for dog boarding and dog daycare marketing: local SEO, Google Business Profile, Facebook and Instagram content, short-form video, ads that actually convert, reviews, referrals, SMS/email, partnerships, seasonal promos, KPIs, and templates you can ship this week.';

  const slug = 'digital-marketing-social-media-dog-boarding-daycare';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
        {/* Per user preference, do not use the word "index" here. */}
        <meta name="robots" content="all" />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

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
            <li><a href="#tldr" className="underline hover:opacity-80">TL;DR</a></li>
            <li><a href="#who" className="underline hover:opacity-80">Who This Is For</a></li>
            <li><a href="#positioning" className="underline hover:opacity-80">Brand Positioning</a></li>
            <li><a href="#website-seo" className="underline hover:opacity-80">Website &amp; SEO</a></li>
            <li><a href="#gbp" className="underline hover:opacity-80">Google Business Profile</a></li>
            <li><a href="#reviews" className="underline hover:opacity-80">Reviews &amp; Reputation</a></li>
            <li><a href="#organic-social" className="underline hover:opacity-80">Organic Social</a></li>
            <li><a href="#content-engine" className="underline hover:opacity-80">Content Engine</a></li>
            <li><a href="#paid" className="underline hover:opacity-80">Paid Ads That Convert</a></li>
            <li><a href="#email-sms" className="underline hover:opacity-80">Email &amp; SMS</a></li>
            <li><a href="#promos" className="underline hover:opacity-80">Promotions &amp; Seasonality</a></li>
            <li><a href="#partners" className="underline hover:opacity-80">Partnerships</a></li>
            <li><a href="#measurement" className="underline hover:opacity-80">Measurement &amp; KPIs</a></li>
            <li><a href="#playbooks" className="underline hover:opacity-80">Playbooks &amp; Templates</a></li>
            <li><a href="#hiring-brand" className="underline hover:opacity-80">Hiring &amp; Employer Brand</a></li>
            <li><a href="#multi-country" className="underline hover:opacity-80">US/CA/UK/IE/AU/NZ Notes</a></li>
            <li><a href="#faq" className="underline hover:opacity-80">FAQ</a></li>
            <li><a href="#sources" className="underline hover:opacity-80">Sources (Selected)</a></li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tldr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Marketing for dog boarding and dog daycare is won locally with proof, rhythm, and empathy. Your highest-ROI stack looks like this: a fast, trustworthy website; a fully optimized Google Business Profile; a drumbeat of review requests; organic Facebook &amp; Instagram with short, calm clips that show safety and joy; 1–2 paid offers aimed at &quot;new to facility&quot; and &quot;win back&quot; audiences; and a monthly email/SMS that rewards loyalty. Keep it simple, measurable, and kind. Owners book where they feel safe, informed, and respected.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Think &quot;Help, then sell.&quot; Teach owners how you keep dogs calm &amp; safe, then ask for the booking. Trust scales faster than hype.
          </div>
        </section>

        {/* Who this is for */}
        <section id="who" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Who This Is For (and What You Can Expect)</h2>
          <p className="mb-3">
            This playbook is written for owners and managers of dog boarding and dog daycare facilities ranging from small, home-grown operations to multi-room, high-volume properties. It focuses on practical, low-bloat tactics you can implement this week without hiring an agency or buying expensive software you do not need. You will find step-by-step checklists, sample copy, content calendars, ad frameworks, and metrics that actually predict bookings.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Beginners:</strong> Copy &amp; paste the templates and ship your first month of content and emails.</li>
            <li><strong>Growing facilities:</strong> Layer on lightweight paid ads, referral rewards, and a reviews flywheel.</li>
            <li><strong>Busy operations:</strong> Assign owners vs managers vs front desk tasks with weekly cadences so nothing stalls.</li>
          </ul>
        </section>

        {/* Brand Positioning */}
        <section id="positioning" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Brand Positioning: Say Less, Mean More</h2>
          <p className="mb-3">
            Most facilities sound the same: &quot;We love dogs, we are safe, we care.&quot; Great, but owners cannot choose between identical promises. Positioning is the one-sentence reason you exist that a stranger can repeat. It should be true, specific, and provable through photos, reviews, and policies.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Positioning formula</h3>
          <p className="mb-3">
            <em>For</em> [target owners] who want [outcome], <em>we</em> provide [unique approach] so that [evidence-backed benefit]. Unlike [common alternative], we [policy/proof you can show].
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Example (Daycare-first):</strong> &quot;For owners who value calm socialization over chaos, we run structured play blocks with planned sniff breaks and small, matched groups so dogs come home relaxed. Unlike drop-in free-for-alls, our program publishes daily room notes and recovery targets.&quot;</li>
            <li><strong>Example (Boarding-first):</strong> &quot;For dogs who thrive on routine, we design overnight stays around sleep, light, and quiet. Our rooms minimize arousal and our white-noise plan protects rest. We publish sleep notes and yard timing windows for each guest.&quot;</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Positioning is a promise you must operationalize. If you say &quot;calm,&quot; your videos cannot be wall-to-wall sprint footage. Show slow tails, soft bodies, and post-yard naps.
          </div>
        </section>

        {/* Website & SEO */}
        <section id="website-seo" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Website &amp; SEO: Turn Curiosity Into a Booking</h2>
          <p className="mb-3">
            Your website does two jobs: convert local searchers today and educate future clients so they trust you tomorrow. Pages must load quickly, explain your program without fluff, and make booking or requesting a meet-and-greet obvious. SEO is not magic; it is organized clarity that search engines can parse and that humans appreciate.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Must-have pages (and what to put on each)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Home:</strong> 3-sentence promise, 3 proof blocks (reviews, photos, policies), &quot;Book Boarding&quot; and &quot;Book Daycare&quot; buttons above the fold.</li>
            <li><strong>Boarding:</strong> sleep philosophy, rooms, feeding/meds policy, yard schedule, safety standards, exact steps to book, what to pack.</li>
            <li><strong>Daycare:</strong> assessment process, group structure, handler ratios, rest routine, pickup windows, temperament expectations.</li>
            <li><strong>Pricing:</strong> transparent nightly/day rates, add-ons, multi-dog policy, cancellation policy in plain language.</li>
            <li><strong>About:</strong> owner philosophy, team photos (first names, roles), training/CPR certs, facility photos in daylight.</li>
            <li><strong>FAQ:</strong> vaccination list, intact/heat policy, fleas/ticks, medical issues, behavior standards, holiday hours.</li>
            <li><strong>Contact:</strong> click-to-call, email, map link, parking directions, drop-off flow.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Local SEO essentials</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>Consistent NAP (Name, Address, Phone) across your site, Google Business Profile, Facebook, and directories.</li>
            <li>Embed a <code>LocalBusiness</code> schema snippet (JSON-LD) with your hours, phone, and services so search engines understand your business.</li>
            <li>Write service-area blurbs that read like helpful guidance, not keyword stuffing: &quot;We serve families in [neighborhoods]&quot; plus travel-time notes.</li>
            <li>Publish 3–6 &quot;pillar&quot; blog posts that owners actually need: vaccines &amp; deadlines, what to pack, how assessments work, med instructions, senior dog boarding tips.</li>
          </ul>
          <p className="mb-3">
            Load speed matters. Compress images, keep your fonts simple, and avoid auto-playing heavy video on mobile. If it feels slow on your phone, it is costing you calls.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Add &quot;proof blocks&quot; on every key page: a review quote, a policy excerpt, and a daylight photo. Repetition of proof builds trust.
          </div>
        </section>

        {/* Google Business Profile */}
        <section id="gbp" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Google Business Profile: The Front Door of Local Search</h2>
          <p className="mb-3">
            Most owners will discover you or judge you here. Treat your profile like a miniature website you update weekly. Name must match your signage, categories should include &quot;Dog Day Care Center&quot; and/or &quot;Kennel&quot; (local wording varies), hours must be correct, and photos should show calm dogs, clean rooms, and humans in the frame for scale and warmth.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Five things to fix this week</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>Upload 12–20 fresh photos: sunlight, tidy spaces, soft-body dog greetings, staff at work, front desk with signage.</li>
            <li>Write a 750-character description using natural language about boarding/daycare, safety, sleep, and intake process.</li>
            <li>Set services with descriptive blurbs (Boarding, Daycare, Puppy Daycare, Senior Care, Medication Administration, Enrichment Walks).</li>
            <li>Enable messaging if you can staff it reliably; otherwise funnel to call/text/email with clear CTAs.</li>
            <li>Publish a weekly &quot;Update&quot; with a single tip: &quot;What to pack for boarding,&quot; &quot;How assessments work,&quot; &quot;Our nap routine.&quot;</li>
          </ol>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Rename photos before uploading (e.g., <code>calm-dog-boarding-rooms.jpg</code>). It helps context without spammy captions.
          </div>
        </section>

        {/* Reviews & Reputation */}
        <section id="reviews" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Reviews &amp; Reputation: Your Quiet Growth Engine</h2>
          <p className="mb-3">
            Reviews are not vanity; they are conversion levers. A steady cadence of authentic, specific reviews beats occasional essays. Respond with grace, thank people by first name, and describe one concrete detail from the visit. For difficult reviews, acknowledge, explain policy calmly, and offer a path forward offline.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">A simple reviews flywheel</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li>Tag new clients at check-in. After pickup, send a text/email with a friendly, non-pushy link.</li>
            <li>Rotate staff names so clients mention them (&quot;Sasha took great care of Luna&quot;), which builds your employer brand.</li>
            <li>Print a tiny QR card for the front desk with &quot;Was your experience helpful?&quot; and a smile. Hand it to happy owners.</li>
            <li>Celebrate reviews in a monthly staff huddle. People repeat what is recognized.</li>
          </ol>
          <p className="mb-3">
            Avoid incentives that violate platform rules. Instead, reward staff internally when reviews mention excellent care. Keep it clean and ethical.
          </p>
        </section>

        {/* Organic Social */}
        <section id="organic-social" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Organic Social: Show Safety, Joy, and Routine</h2>
          <p className="mb-3">
            You do not need viral content. You need repeatable, calm proof that your program is safe, structured, and kind. Owners want to recognize your facility &amp; your team in the feed and feel reassured that their dog will do well there. Build a simple calendar and stick to it.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Weekly posting rhythm (starter)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Mon:</strong> &quot;This week&quot; post: hours, capacity notes, any weather adjustments.</li>
            <li><strong>Tue:</strong> Calm yard clip (10–20 seconds): loose bodies, gentle greetings, handler presence.</li>
            <li><strong>Wed:</strong> Education tip (&quot;Why we do decompression walks&quot;).</li>
            <li><strong>Thu:</strong> Staff spotlight with first name, role, and a caring detail.</li>
            <li><strong>Fri:</strong> Boarding prep checklist or &quot;What to pack&quot; carousel.</li>
            <li><strong>Sat:</strong> Before/after &quot;Yellow to Green&quot; success story (no shame, just growth).</li>
            <li><strong>Sun:</strong> Cozy nap photo; gratitude note; booking CTA for the week ahead.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Platform notes</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Facebook:</strong> Still the backbone for local parents. Post albums and events; reply to DMs quickly.</li>
            <li><strong>Instagram:</strong> Carousels with captions that educate. Short Reels with soft music. Avoid chaotic clips.</li>
            <li><strong>TikTok:</strong> Use sparingly if your audience is not there. Focus on calm, informative snippets over trends.</li>
            <li><strong>YouTube:</strong> 60–120 second explainers (&quot;Our assessment day&quot;). Great for embedding on your site.</li>
            <li><strong>LinkedIn:</strong> Employer brand: hiring posts, staff certifications, community partnerships.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm mt-3">
            <strong>Petunia tip:</strong> Content gets easier if you make &quot;routes.&quot; Every shift lead films one 15-second calm clip, one staff photo, and one tidy room photo. That is it.
          </div>
        </section>

        {/* Content Engine */}
        <section id="content-engine" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Content Engine: Batch, Label, Reuse</h2>
          <p className="mb-3">
            Shooting daily is exhausting. Batch once a week. Use natural light, clean backgrounds, and human touch. Label files by topic (&quot;calm-greetings&quot;, &quot;nap-routine&quot;, &quot;what-to-pack&quot;) so anyone can assemble posts later.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Fifteen post ideas owners actually save</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>&quot;How we intro new dogs&quot; mini-guide.</li>
            <li>&quot;Our nap plan&quot; with room sound and light notes.</li>
            <li>&quot;What to pack for boarding&quot; checklist.</            li>
            <li>&quot;Why we separate by play style&quot; with examples.</li>
            <li>&quot;Medication handoff&quot; explainer.</li>
            <li>&quot;Senior dog boarding&quot; comfort tips.</li>
            <li>&quot;Puppy daycare&quot; expectations &amp; pacing.</li>
            <li>&quot;Storm day&quot; enrichment ideas.</li>
            <li>&quot;After a big holiday&quot; recovery plan.</li>
            <li>&quot;Meet the team&quot; carousel.</li>
            <li>&quot;Client spotlight&quot; thank-you post (with consent).</li>
            <li>&quot;Why we ask for a waiver&quot; transparency post.</li>
            <li>&quot;How we clean&quot; behind-the-scenes (short, calm).</li>
            <li>&quot;How to read loose body language&quot; visual tips.</li>
            <li>&quot;Boarding vs daycare&quot; decision helper.</li>
          </ul>
          <p className="mb-3">
            Write captions like a neighbor, not a brand manager. One clear point, one warm detail, one CTA (&quot;Questions? Send us a message.&quot;).
          </p>
        </section>

        {/* Paid Ads */}
        <section id="paid" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Paid Ads That Convert: Two Offers, Simple Targeting</h2>
          <p className="mb-3">
            You do not need a massive budget or complicated audiences. Pick two evergreen offers and show them to local parents near your facility. Use gentle creative that mirrors your organic posts so the ad feels like you, not a gimmick.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Evergreen offers</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>New-to-facility:</strong> &quot;Meet &amp; Greet + First Daycare Session&quot; at a fair, transparent rate. Clarify assessment steps.</li>
            <li><strong>Boarding trial night:</strong> &quot;One Night Practice Stay&quot; for anxious owners to test routines before a vacation.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Meta Ads (Facebook/Instagram) setup</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Objective:</strong> Leads or Messages for small teams; Conversions if your site is fast and ready.</li>
            <li><strong>Audience:</strong> Radius 5–12 miles; age 25–64; expand if you serve commuters. Exclude current followers for &quot;new to facility&quot; ads.</li>
            <li><strong>Creative:</strong> 15-second calm clip, 1–2 dog faces, handler visible. Headline: &quot;Calm, structured play. Happy, tired dogs.&quot;</li>
            <li><strong>Budget:</strong> Start small. Allocate most to your best creative; turn off losers early.</li>
            <li><strong>Destination:</strong> Simple landing page with one form or &quot;Tap to call.&quot; Reduce fields; prioritize speed.</li>
          </ol>
          <h3 className="text-lg font-semibold mt-2 mb-1">Google Ads (when to consider)</h3>
          <p className="mb-3">
            If your competitors run search ads and you rank poorly, a small search budget on &quot;dog boarding near me&quot; and &quot;dog daycare near me&quot; may bridge the gap. Keep keyword sets tight, match your landing page to the query, and watch mobile experience obsessively.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Ads amplify strong operations; they cannot fix weak ones. Record calls, check response times, and make sure your team knows exactly what to say when leads arrive.
          </div>
        </section>

        {/* Email & SMS */}
        <section id="email-sms" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Email &amp; SMS: Retain, Remind, Reward</h2>
          <p className="mb-3">
            Social finds new owners; email and SMS keep them. Send one helpful note each month and time-sensitive reminders when it matters. Respect consent and preferred channels, especially outside the United States where rules differ.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">Monthly email outline (copy &amp; paste)</h3>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Subject:</strong> &quot;This month at [Facility Name]: Calm dogs, clear plans.&quot;</li>
            <li><strong>Block 1:</strong> One tip (&quot;What our nap routine looks like&quot;).</li>
            <li><strong>Block 2:</strong> Upcoming capacity notes (holidays, school breaks).</li>
            <li><strong>Block 3:</strong> Staff spotlight (first name, role, a caring detail).</li>
            <li><strong>CTA:</strong> &quot;Book a practice night&quot; or &quot;Schedule an assessment.&quot;</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Respectful SMS use</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Appointment reminders, pickup windows, and weather updates only.</li>
            <li>Opt-in required. Make opting out easy. Keep tone kind and concise.</li>
          </ul>
        </section>

        {/* Promotions & Seasonality */}
        <section id="promos" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Promotions &amp; Seasonality: Align With Real Life</h2>
          <p className="mb-3">
            You do not need deep discounts. Time offers around life rhythms: back-to-school, long weekends, spring breaks, summer travel, and winter holidays. Offer value that improves care rather than slashing price.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Practice night bundle:</strong> boarding trial + &quot;what to pack&quot; call.</li>
            <li><strong>Calm daycare week:</strong> new clients get structured micro-groups with reports.</li>
            <li><strong>Senior month:</strong> highlight comfort routines and staff training for older dogs.</li>
          </ul>
          <p className="mb-3">
            Always cap promos to protect capacity. &quot;First 15 new clients&quot; beats &quot;everyone forever.&quot;
          </p>
        </section>

        {/* Partnerships */}
        <section id="partners" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Partnerships: Borrow Trust, Give Value</h2>
          <p className="mb-3">
            The fastest way to grow is to partner with people dog families already trust: veterinarians, trainers, rescues, shelters, groomers, and neighborhood groups. Lead with helpful assets (handouts, checklists, post templates) rather than asking for referrals outright.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-1">A simple partner kit</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Printed &amp; PDF &quot;Boarding Prep&quot; checklist with your logo.</li>
            <li>Three calming &quot;how we intro dogs&quot; posts partners can share.</li>
            <li>Co-branded seminar: &quot;Boarding for seniors and shy dogs&quot; (30 minutes).</li>
          </ul>
        </section>

        {/* Measurement & KPIs */}
        <section id="measurement" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Measurement &amp; KPIs: Know What Is Working</h2>
          <p className="mb-3">
            Track a handful of numbers and review them the first Monday of each month. Trends matter more than single data points. Tie marketing to operations: if your Yellow-to-Green progress improves, your reviews will mention &quot;calm&quot; and &quot;safe,&quot; and your rebook rate will rise.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Leads by source:</strong> Google, Facebook, Instagram, referral, walk-in.</li>
            <li><strong>Time-to-first-response:</strong> minutes from inquiry to reply.</li>
            <li><strong>Assessment show rate:</strong> scheduled vs completed.</li>
            <li><strong>Boarding occupancy:</strong> by week; watch holiday fill curves.</li>
            <li><strong>Daycare capacity:</strong> average daily dogs; % in Yellow vs Green plans.</li>
            <li><strong>Review velocity:</strong> new reviews per month (sustained, not spiky).</li>
            <li><strong>Rebook rate:</strong> first-time clients who return within 60 days.</li>
            <li><strong>Ad cost per lead:</strong> and cost per completed assessment/booking.</li>
          </ul>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Petunia tip:</strong> Annotate your KPI doc with context (&quot;heat wave,&quot; &quot;school start,&quot; &quot;flu season&quot;). Operations and weather shape marketing.
          </div>
        </section>

        {/* Playbooks & Templates */}
        <section id="playbooks" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Playbooks &amp; Templates: Ship Faster</h2>
          <h3 className="text-lg font-semibold mt-2 mb-1">30-day social calendar (starter)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>4 calm yard clips</li>
            <li>4 education carousels</li>
            <li>4 staff spotlights</li>
            <li>2 client success stories</li>
            <li>2 boarding prep posts</li>
            <li>2 FAQ explainers</li>
            <li>2 partner shout-outs</li>
            <li>2 gentle offers (assessment or practice night)</li>
            <li>8 cozy photos with short gratitude captions</li>
          </ul>
          <h3 className="text-lg font-semibold mt-2 mb-1">Reply scripts (copy &amp; adapt)</h3>
          <p className="mb-2 text-sm">
            <strong>New inquiry DM:</strong> &quot;Hi [Name]! Thanks for reaching out. We run calm, structured play with planned rest. Happy to set up an assessment so we can tailor a plan for [Dog Name]. Would you prefer Tue or Thu this week?&quot;
          </p>
          <p className="mb-2 text-sm">
            <strong>Price shopper:</strong> &quot;We keep pricing simple and transparent. Most families choose [Daycare Option] or a practice night before boarding so dogs feel at home. Here is what is included and why the day runs calmer with our routine: [two bullets].&quot;
          </p>
          <p className="mb-2 text-sm">
            <strong>Review request:</strong> &quot;Thank you for trusting us with [Dog Name]. If the visit was helpful, a quick note here means a lot to our small team: [short link]. Either way, we appreciate you.&quot;
          </p>
        </section>

        {/* Hiring & Employer Brand */}
        <section id="hiring-brand" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Hiring &amp; Employer Brand: Your Team Is the Product</h2>
          <p className="mb-3">
            Great marketing without a steady, kind team is a leaky bucket. Use your channels to show mentorship, growth, and safety-first culture. Candidates who see calm, not chaos, will self-select for the work you need.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Share &quot;day in the life&quot; reels that show coaching and rest, not just play.</li>
            <li>Celebrate certifications and quiet wins (&quot;two weeks incident-free in Small Dogs&quot;).</li>
            <li>Post clear job descriptions with schedules, training plans, and pay ranges.</li>
          </ul>
        </section>

        {/* Multi-Country Notes */}
        <section id="multi-country" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">US/CA/UK/IE/AU/NZ Notes: Respect Local Norms</h2>
          <p className="mb-3">
            The heart of your program travels well, but laws and etiquette vary. In Canada, consent rules for commercial messages are stricter; in the UK and Ireland, privacy and advertising standards emphasize clear transparency; in Australia and New Zealand, community pages and local groups can be unusually strong drivers. Always write like a neighbor, not a franchise.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Consent:</strong> Get explicit permission for marketing SMS and email. Make opting out painless.</li>
            <li><strong>Transparency:</strong> Be precise about pricing, what is included, and any assessments required.</li>
            <li><strong>Tone:</strong> Local idioms differ. Mirror how your families actually speak in messages and captions.</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">
            Educational content only. For legal specifics on advertising and privacy in your region, consult qualified counsel.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="mb-3">
            <strong>How many posts per week do we need?</strong><br />
            5–7 light touches across platforms is plenty if the content is calm, helpful, and consistent. Quality &gt; volume.
          </p>
          <p className="mb-3">
            <strong>Should we try every platform?</strong><br />
            No. Master Facebook and Instagram first. Add YouTube shorts for explainers if you have capacity. TikTok only if your local parents are active there.
          </p>
          <p className="mb-3">
            <strong>What budget should we start with on ads?</strong><br />
            Start small. Run one new-client offer and one practice-night ad. Keep what is working; turn off what is not. Increase only when your response is fast and your landing page converts.
          </p>
          <p className="mb-3">
            <strong>How do we avoid &quot;chaos content&quot;?</strong><br />
            Film in quiet windows, keep clips to 10–20 seconds, show handler presence, and favor soft body language. Owners do not crave excitement; they crave assurance.
          </p>
          <p className="text-xs text-gray-600">
            Educational content only. Always follow local advertising and privacy regulations and platform policies.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources (Selected)</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Google Business Profile Help Center (profile optimization, posts, photos).
              <a
                href="https://support.google.com/business/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                Google Business Profile
              </a>
            </li>
            <li>
              Meta Business Help Center (ads policies, objectives, creative specs).
              <a
                href="https://www.facebook.com/business/help"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                Meta Business
              </a>
            </li>
            <li>
              Google Ads Help (search campaigns, local targeting, landing page tips).
              <a
                href="https://support.google.com/google-ads/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                Google Ads
              </a>
            </li>
            <li>
              Government and regulator portals for marketing consent and privacy best practices in your region (e.g., Canada&#39;s anti-spam guidance, UK advertising standards).
              <a
                href="https://fightspam.gc.ca/eic/site/030.nsf/eng/home"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                CASL (Canada)
              </a>{' '}
              ·
              <a
                href="https://www.asa.org.uk/advice-and-resources.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                ASA (UK)
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-600 mt-4">
            Links above are provided for general education and are not exhaustive. Consult your legal advisor for regional compliance questions.
          </p>
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
