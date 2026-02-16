'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function MostPopularPetNames2025() {
  const locale = useLocale();

  const title = 'Most Popular Dog (and Cat) Names of 2025: Luna, Charlie, Milo, and Cultural Trends';
  const date = 'December 29, 2025';
  const categories = ['owner'] as const;

  const categoryLabels: Record<string, string> = {
    owner: 'Pet Owners',
    boarding: 'Boarding',
    daycare: 'Daycare',
    rescue: 'Rescues',
    veterinary: 'Veterinary Clinics',
    sitter: 'Pet Sitters',
    walker: 'Dog Walkers',
    breeder: 'Breeders',
    breed_specific_guides: 'Breed Specific Guides',
  };

  const description =
    'A data-informed look at the most popular pet names of 2025 from Rover&rsquo;s annual Top Pet Names report, what they reveal about culture and pet parent behavior, and the trends shaping how we name our dogs and cats.';

  return (
    <>
      <Head>
        <title>{title} – Petunia Blog</title>
        <meta name="description" content={description} />
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
            <li>
              <a href="#tl-dr" className="underline hover:opacity-80">
                TL;DR
              </a>
            </li>
            <li>
              <a href="#core-findings" className="underline hover:opacity-80">
                Core Findings
              </a>
            </li>
            <li>
              <a href="#trend-insights" className="underline hover:opacity-80">
                Cultural &amp; Trend Insights
              </a>
            </li>
            <li>
              <a href="#why-names-matter" className="underline hover:opacity-80">
                Why Pet Names Matter
              </a>
            </li>
            <li>
              <a href="#sources" className="underline hover:opacity-80">
                📚 Sources
              </a>
            </li>
          </ul>
        </nav>

        {/* TL;DR */}
        <section id="tl-dr" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Short Answer (TL;DR)</h2>
          <p className="mb-4">
            Rover&rsquo;s 13th Annual Top Pet Names report shows that classic names like <strong>Luna</strong> and <strong>Charlie</strong> remain at the top of 2025&rsquo;s list for both dogs and cats worldwide, while cultural influences, sports icons, and personality traits continue to shape naming trends among pet parents.
          </p>
          <div className="rounded-md border border-[#d9cfc2] bg-[#f6efe4] p-4 text-sm">
            <strong>Quick takeaway:</strong> Naming trends reflect not just cute preferences but broader cultural forces — from pop culture and sports to personality traits, owners are intentionally choosing names that resonate for more than just sound.
          </div>
        </section>

        {/* Core findings */}
        <section id="core-findings" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Core Findings from Rover&rsquo;s Top Pet Names 2025</h2>
          <p className="mb-4">
            Rover&rsquo;s latest data, drawn from millions of user-submitted dog and cat names globally, confirms that some names have enduring popularity while others reflect emerging cultural influences.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Luna</strong> continues to top the list as the most popular name overall for both female dogs and female cats in 2025, a position it has held in recent years and that resonates with its literary and celestial appeal.
            </li>
            <li>
              <strong>Charlie</strong> leads male dog names for 2025, while <strong>Milo</strong> frequently appears as the top male cat name in many regional breakdowns.
            </li>
            <li>
              Beyond the top names, trending lists include creative new entries that rose significantly in popularity year-over-year, such as Elphie, Tsuki, and Caesar — showing how new cultural touchpoints influence owner naming decisions.
            </li>
            <li>
              Across regions like the United States, Canada, and Europe, classic and trending names blend timeless choices with local cultural flavor, from traditional favorites to whimsical or themed names.
            </li>
          </ul>
        </section>

        {/* Trend insights */}
        <section id="trend-insights" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Cultural &amp; Trend Insights Behind the Names</h2>
          <p className="mb-4">
            Rover&rsquo;s name report also offers insight into how broader cultural forces shape pet naming — from entertainment and mythology to sports fandom and seasonal trends.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Pop Culture &amp; Media:</strong> Names inspired by movies, mythology, and media figures remain prominent, with owners drawing from familiar cultural touchpoints.
            </li>
            <li>
              <strong>Sports Influence:</strong> Pet parents often honor beloved athletes or teams, with sports-inspired names growing on pet name lists year-over-year.
            </li>
            <li>
              <strong>Personality &amp; Individuality:</strong> A Rover survey shows many owners choose names that reflect their pet&rsquo;s unique personality rather than just aesthetics or trend alone.
            </li>
          </ul>
        </section>

        {/* Why names matter */}
        <section id="why-names-matter" className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why Pet Names Matter to Owners</h2>
          <p className="mb-4">
            Choosing a name goes beyond simple labeling — it&rsquo;s part of how owners bond with their pet and how pets are socialized into the family. Names often carry emotional resonance, narrative meaning, and even sociocultural signals that reflect the broader identity of the owner and pet relationship.
          </p>
          <p className="mb-4">
            A well-chosen name can reinforce training cues, become a defining part of shared experiences, and even serve as a conversation starter in social settings like parks, events, or online communities.
          </p>
        </section>

        {/* Sources */}
        <section id="sources" className="mb-16">
          <h2 className="text-2xl font-semibold mb-3">📚 Sources &amp; Official References</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>
              Rover&rsquo;s 13th Annual Top Pet Names Report (Rover Group Press Release, Nov 11, 2025):{' '}
              <a
                href="https://www.rover.com/blog/press-release/pet-names-2025/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.rover.com/blog/press-release/pet-names-2025/
              </a>
            </li>
            <li>
              Rover Top Pet Names highlights (FOX Local coverage, Dec 2025):{' '}
              <a
                href="https://www.fox4news.com/news/most-popular-cat-dog-names-2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.fox4news.com/news/most-popular-cat-dog-names-2025
              </a>
            </li>
            <li>
              U.S. trending popularity &amp; name examples (amNY coverage, Dec 2025):{' '}
              <a
                href="https://www.amny.com/lifestyle/pets/most-popular-cat-dog-names-2025/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.amny.com/lifestyle/pets/most-popular-cat-dog-names-2025/
              </a>
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
