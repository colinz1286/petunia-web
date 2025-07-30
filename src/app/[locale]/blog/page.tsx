'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { blogPosts } from './blogposts'; // ✅ Use centralized registry

const CATEGORY_MAP: Record<string, string> = {
  boarding: 'Boarding & Daycare',
  owner: 'Pet Owners',
  sitter: 'Pet Sitters',
  rescue: 'Rescues',
  vet: 'Veterinary Clinics',
  walker: 'Dog Walkers',
};

const firstRow = ['boarding', 'owner', 'sitter'];
const secondRow = ['rescue', 'vet', 'walker'];

export default function BlogPage() {
  const locale = useLocale();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const filteredPosts =
    selectedCategories.length === 0
      ? blogPosts
      : blogPosts.filter((post) =>
          post.categories.some((cat) => selectedCategories.includes(cat))
        );

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
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl">
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

        {/* Blog Card List */}
        <section className="w-full max-w-xl space-y-8">
          {filteredPosts.length === 0 ? (
            <p className="text-[#2c4a30]">No articles available for the selected categories.</p>
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
