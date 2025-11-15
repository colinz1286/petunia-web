'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import Image from 'next/image';

export default function Header() {
  const locale = useLocale();

  return (
    <header className="w-full px-4 sm:px-6 py-4 bg-[#f6efe4] border-b border-[#d9cfc2]">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
        <a href={`/${locale}`} className="flex items-center space-x-2">
          <Image
            src="/petunia_logo.png"
            alt="Petunia Logo"
            width={80}
            height={0}
            className="w-20 h-auto"
            priority
          />
        </a>
        <nav className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-sm text-[#2c4a30] font-medium text-center">
          <Link href={`/${locale}/loginsignup`} className="hover:underline">Login / Sign Up</Link>
          <Link href={`/${locale}/aboutus`} className="hover:underline">About Us</Link>
          <Link href={`/${locale}/contact`} className="hover:underline">Contact</Link>
          <Link href={`/${locale}/blog`} className="hover:underline">Blog</Link>
          <Link href={`/${locale}/dog-boarding-software`} className="hover:underline">Dog Boarding And Daycare Software</Link>
          <Link href={`/${locale}/tutorials`} className="hover:underline">Tutorials</Link>
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
        </nav>
      </div>
    </header>
  );
}
