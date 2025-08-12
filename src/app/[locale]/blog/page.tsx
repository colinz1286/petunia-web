'use client';

import { useMemo, useState } from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { blogPosts } from './blogposts'; // ✅ centralized registry

// ---- Category labels --------------------------------------------------------
const CATEGORY_MAP: Record<string, string> = {
  boarding: 'Boarding & Daycare',
  owner: 'Pet Owners',
  sitter: 'Pet Sitters',
  rescue: 'Rescues',
  vet: 'Veterinary Clinics',
  walker: 'Dog Walkers',
  breeder: 'Breeders',
  breed_specific_guides: 'Breed Specific Guides',
};

// (unchanged rows for button filters)
const firstRow = ['boarding', 'owner', 'sitter'] as const;
const secondRow = ['rescue', 'vet', 'walker'] as const;
const thirdRow = ['breeder'] as const; // 👈 breed dropdown sits beside/under buttons

// ---- Helpers ----------------------------------------------------------------
// Prefer an explicit `breed` field on posts; otherwise try to infer from title/slug.
function inferBreed(post: any): string | null {
  if (post?.breed) return post.breed;

  // Try title pattern “… for <Breed> …”
  if (typeof post?.title === 'string') {
    const t = post.title;
    // capture words after " for " up to punctuation
    const m =
      /(?:for|For)\s+([A-Z][A-Za-z\s\-\u2013\u2014\u2019']+?)(?:[:\-\u2013\u2014(]|$)/.exec(t) ||
      /(?:for|For)\s+([A-Z][A-Za-z\s\-\u2019']+)$/.exec(t);
    if (m?.[1]) return cleanBreed(m[1]);
  }

  // Fallback: try slug like "boarding-tips-for-labrador-retrievers"
  if (typeof post?.slug === 'string') {
    const s = post.slug.replace(/-/g, ' ');
    const m =
      /\bfor\s+([a-z][a-z\s']+?)$/.exec(s) ||
      /\bfor\s+([a-z][a-z\s']+?)\b/.exec(s);
    if (m?.[1]) return titleCase(m[1].replace(/\b(the|a|an)\b/gi, '').trim());
  }

  return null;
}

function cleanBreed(x: string) {
  // remove common trailing words
  const cleaned = x.replace(/\b(dogs?|puppies|owners?)\b/gi, '').trim();
  return titleCase(cleaned.replace(/\s{2,}/g, ' '));
}

function titleCase(s: string) {
  return s
    .toLowerCase()
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ')
    .replace(/\b(Of|And|The|For|In|On|With)\b/g, (m) => m.toLowerCase());
}

export default function BlogPage() {
  const locale = useLocale();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>(''); // 👈 NEW

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // ---- Build breed options from registry (auto-updates as you add posts) ----
  const breedOptions = useMemo(() => {
    const breeds = new Set<string>();
    for (const post of blogPosts) {
      if (post?.categories?.includes('breed_specific_guides')) {
        const b = inferBreed(post);
        if (b) breeds.add(b);
      }
    }
    return Array.from(breeds).sort((a, b) => a.localeCompare(b));
  }, []);

  // ---- Sort & filter posts ---------------------------------------------------
  const sortedPosts = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const filteredPosts = useMemo(() => {
    let list = sortedPosts;

    // If any category buttons selected, filter by those
    if (selectedCategories.length > 0) {
      list = list.filter((post) =>
        post.categories?.some((cat: string) => selectedCategories.includes(cat))
      );
    }

    // If a breed is selected, show only breed guides matching that breed
    if (selectedBreed) {
      list = list.filter((post) => {
        if (!post.categories?.includes('breed_specific_guides')) return false;
        const b = inferBreed(post);
        return b === selectedBreed;
      });
    }

    return list;
  }, [sortedPosts, selectedCategories, selectedBreed]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBreed('');
  };

  return (
    <>
      <Head>
        <title>Petunia Blog – Tips for Pet Pros, Sitters & Facility Owners</title>
        <meta
          name="description"
          content="Petunia's blog covers dog boarding tips, sitter tools, daycare safety, and expert advice for pet care professionals and pet parents."
        />
      </Head>

      <main className="flex flex-col items-center px-4 py-10 text-center bg-[#f6efe4]">
        <Image
          src="/petunia_logo.png"
          alt="Petunia Logo"
          width={288}
          height={0}
          className="mb-6 h-auto w-64 sm:w-72"
          priority
        />

        <h1 className="text-3xl font-bold text-[#2c4a30] mb-4 tracking-wide">
          Welcome to the Petunia Blog
        </h1>
        <p className="text-gray-600 italic text-lg mb-8 max-w-xl text-balance">
          Advice, how-tos, and real answers for sitters, walkers, boarding facility owners, and loving pet parents.
        </p>

        {/* Filter Row 1 */}
        <div className="flex flex-wrap justify-center gap-2 mb-2 max-w-2xl">
          {firstRow.map((key) => {
            const isActive = selectedCategories.includes(key);
            return (
              <button
                key={key}
                onClick={() => toggleCategory(key)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition border-[3px] ${
                  isActive
                    ? 'bg-[#2c4a30] text-white border-[#2c4a30]'
                    : 'text-[#2c4a30] border-[#2c4a30] hover:bg-[#e4dbcb]'
                }`}
              >
                {CATEGORY_MAP[key]}
              </button>
            );
          })}
        </div>

        {/* Filter Row 2 */}
        <div className="flex flex-wrap justify-center gap-2 mb-2 max-w-2xl">
          {secondRow.map((key) => {
            const isActive = selectedCategories.includes(key);
            return (
              <button
                key={key}
                onClick={() => toggleCategory(key)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition border-[3px] ${
                  isActive
                    ? 'bg-[#2c4a30] text-white border-[#2c4a30]'
                    : 'text-[#2c4a30] border-[#2c4a30] hover:bg-[#e4dbcb]'
                }`}
              >
                {CATEGORY_MAP[key]}
              </button>
            );
          })}
        </div>

        {/* Row 3: existing buttons + Breed dropdown */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-8 max-w-2xl">
          {thirdRow.map((key) => {
            const isActive = selectedCategories.includes(key);
            return (
              <button
                key={key}
                onClick={() => toggleCategory(key)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition border-[3px] ${
                  isActive
                    ? 'bg-[#2c4a30] text-white border-[#2c4a30]'
                    : 'text-[#2c4a30] border-[#2c4a30] hover:bg-[#e4dbcb]'
                }`}
              >
                {CATEGORY_MAP[key]}
              </button>
            );
          })}

          {/* Breed Specific Guides dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="breedFilter" className="text-sm font-semibold text-[#2c4a30]">
              {CATEGORY_MAP['breed_specific_guides']}:
            </label>
            <select
              id="breedFilter"
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              className="text-sm rounded-full border-[3px] border-[#2c4a30] bg-white px-3 py-1.5 text-[#2c4a30] hover:bg-[#e4dbcb] cursor-pointer"
            >
              <option value="">All Breeds</option>
              {breedOptions.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {(selectedCategories.length > 0 || selectedBreed) && (
            <button
              onClick={clearFilters}
              className="ml-1 text-xs underline text-[#2c4a30] hover:opacity-80"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Blog Card List */}
        <section className="w-full max-w-xl space-y-8">
          {filteredPosts.length === 0 ? (
            <p className="text-[#2c4a30]">No articles available for the selected filters.</p>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="text-left border border-[#d9cfc2] rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-lg font-bold text-[#2c4a30] mb-1">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-sm text-[#2c4a30] mb-3">{post.description}</p>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="underline text-[#2c4a30] font-medium hover:opacity-80"
                >
                  Read More →
                </Link>
              </div>
            ))
          )}
        </section>
      </main>
    </>
  );
}
