'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Footer() {
  const locale = useLocale();

  return (
    <footer className="bg-[#2c4a30] text-white py-6 mt-12 text-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 px-6">
        <div className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} Petunia. All rights reserved.
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link href={`/${locale}/contact`} className="hover:underline">
            Contact
          </Link>

          <Link href={`/${locale}/blog`} className="hover:underline">
            Blog
          </Link>

          {/* ✅ NEW CONSULTING LINK */}
          <Link href={`/${locale}/consulting`} className="hover:underline">
            Consulting
          </Link>

          <a
            href="https://www.facebook.com/profile.php?id=61575107920935"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            YouTube
          </a>

          <Link href={`/${locale}/privacypolicy`} className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
