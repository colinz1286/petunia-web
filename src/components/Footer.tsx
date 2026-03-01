'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Footer() {
  const locale = useLocale();
  const footerLinkClass =
    'block py-1 hover:underline text-center sm:text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2c4a30] rounded-sm';

  return (
    <footer className="bg-[#2c4a30] text-white py-6 mt-12 text-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 px-6">
        <div className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} Petunia. All rights reserved.
        </div>

        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-end">
          <Link href={`/${locale}/contact`} className={footerLinkClass}>
            Contact
          </Link>

          <Link href={`/${locale}/blog`} className={footerLinkClass}>
            Blog
          </Link>

          <Link href={`/${locale}/consulting`} className={footerLinkClass}>
            Consulting
          </Link>

          <a
            href="https://www.facebook.com/profile.php?id=61575107920935"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkClass}
          >
            Facebook
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkClass}
          >
            YouTube
          </a>

          <Link href={`/${locale}/privacypolicy`} className={footerLinkClass}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
