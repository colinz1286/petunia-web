'use client';

import { useMemo, useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { blogPosts } from './blogposts';

// ---- Config -----------------------------------------------------------------
const PAGE_SIZE = 18; // how many cards to show per batch

// ---- Category labels --------------------------------------------------------
const CATEGORY_MAP = {
  boarding: 'Boarding & Daycare',
  owner: 'Pet Owners',
  sitter: 'Pet Sitters',
  rescue: 'Rescues',
  vet: 'Veterinary Clinics',
  walker: 'Dog Walkers',
  breeder: 'Breeders',
  breed_specific_guides: 'Breed Specific Guides',
  food: 'Food Guide',
  train: 'Training',
} as const;

type CategoryKey = keyof typeof CATEGORY_MAP;
const CATEGORY_KEYS = Object.keys(CATEGORY_MAP) as CategoryKey[];
const BREED_CATEGORY_KEY: CategoryKey = 'breed_specific_guides';

// (button rows)
const firstRow: readonly CategoryKey[] = ['boarding', 'owner', 'sitter'];
const secondRow: readonly CategoryKey[] = ['rescue', 'vet', 'walker'];
const thirdRow: readonly CategoryKey[] = ['breeder', 'food', 'train'];
const fourthRow: readonly CategoryKey[] = [BREED_CATEGORY_KEY]; // dropdown row

// ---- Helpers ----------------------------------------------------------------
interface BlogPostMeta {
  breed?: string;
  title?: string;
  categories?: string[];
  date: string;
  description?: string;
  slug?: string;
}

function normalizeCategory(cat: string): CategoryKey | null {
  // normalize minor inconsistencies
  if (cat === 'pet-owners') return 'owner';
  return CATEGORY_KEYS.includes(cat as CategoryKey) ? (cat as CategoryKey) : null;
}

// Prefer an explicit `breed` field on posts; otherwise try to infer from title/slug.
function inferBreed(post: BlogPostMeta | null | undefined): string | null {
  if (post?.breed) return post.breed;

  // Try title pattern “… for <Breed> …”
  if (typeof post?.title === 'string') {
    const m =
      /(?:for|For)\s+([A-Z][A-Za-z\s\-\u2013\u2014\u2019']+?)(?:[:\-\u2013\u2014(]|$)/.exec(
        post.title
      ) ||
      /(?:for|For)\s+([A-Z][A-Za-z\s\-\u2019']+)$/.exec(post.title);
    if (m?.[1]) return cleanBreed(m[1]);
  }

  // Fallback: try slug like "boarding-tips-for-labrador-retrievers"
  if (typeof post?.slug === 'string') {
    const m =
      /\bfor\s+([a-z][a-z\s']+?)$/.exec(post.slug.replace(/-/g, ' ')) ||
      /\bfor\s+([a-z][a-z\s']+?)\b/.exec(post.slug.replace(/-/g, ' '));
    if (m?.[1]) return titleCase(m[1].replace(/\b(the|a|an)\b/gi, '').trim());
  }

  return null;
}

function cleanBreed(x: string) {
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
  const [selectedCategories, setSelectedCategories] = useState<CategoryKey[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>(''); // dropdown value
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  const toggleCategory = (category: CategoryKey) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Reset pagination whenever filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedCategories, selectedBreed]);

  // ---- Build breed options from registry (auto-updates as you add posts) ----
  const breedOptions = useMemo(() => {
    const breeds = new Set<string>();
    for (const post of blogPosts as BlogPostMeta[]) {
      if (post?.categories?.includes(BREED_CATEGORY_KEY)) {
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

    if (selectedCategories.length > 0) {
      list = list.filter((post) =>
        post.categories?.some((cat) => {
          const key = normalizeCategory(cat);
          return key ? selectedCategories.includes(key) : false;
        })
      );
    }

    if (selectedBreed) {
      list = list.filter((post) => {
        if (!post.categories?.some((c) => normalizeCategory(c) === BREED_CATEGORY_KEY)) {
          return false;
        }
        const b = inferBreed(post as BlogPostMeta);
        return b === selectedBreed;
      });
    }

    return list;
  }, [sortedPosts, selectedCategories, selectedBreed]);

  const visiblePosts = useMemo(
    () => filteredPosts.slice(0, visibleCount),
    [filteredPosts, visibleCount]
  );

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBreed('');
    setVisibleCount(PAGE_SIZE);
  };

  const canLoadMore = visibleCount < filteredPosts.length;

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

        {/* Filter Row 3 */}
        <div className="flex flex-wrap justify-center gap-2 mb-2 max-w-2xl">
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
        </div>

        {/* Filter Row 4 – Breed Specific Guides dropdown */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-8 max-w-2xl">
          {fourthRow.map(() => (
            <div key="breed-dropdown" className="flex items-center gap-2">
              <label htmlFor="breedFilter" className="text-sm font-semibold text-[#2c4a30]">
                {CATEGORY_MAP[BREED_CATEGORY_KEY]}:
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
          ))}

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
          {visiblePosts.length === 0 ? (
            <p className="text-[#2c4a30]">No articles available for the selected filters.</p>
          ) : (
            <>
              {visiblePosts.map((post) => (
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
              ))}

              {/* Pagination Controls */}
              <div className="flex flex-col items-center gap-3 pt-2">
                <p className="text-xs text-[#2c4a30]/80">
                  Showing {Math.min(visibleCount, filteredPosts.length)} of {filteredPosts.length}
                </p>

                {canLoadMore && (
                  <button
                    onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
                    className="px-4 py-2 rounded-full text-sm font-bold transition border-[3px] text-white bg-[#2c4a30] border-[#2c4a30] hover:opacity-90"
                  >
                    Load more
                  </button>
                )}
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}
