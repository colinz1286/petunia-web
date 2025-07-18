'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Header() {
  const locale = useLocale();

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-[#f6efe4] border-b border-[#d9cfc2]">
      <a href={`/${locale}`} className="flex items-center space-x-2">
        <img src="/petunia_logo.png" alt="Petunia Logo" className="w-20 h-auto" />
      </a>
      <nav className="flex gap-6 text-sm text-[#2c4a30] font-medium">
        <Link href={`/${locale}/loginsignup`} className="hover:underline">Login / Sign Up</Link>
        <Link href={`/${locale}/aboutus`} className="hover:underline">About Us</Link>
        <Link href={`/${locale}/contact`} className="hover:underline">Contact</Link>
        <a href="https://www.facebook.com/profile.php?id=61575107920935" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a>
      </nav>
    </header>
  );
}
