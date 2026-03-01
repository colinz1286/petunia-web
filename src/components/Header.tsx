'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const locale = useLocale();
  const [isSoftwareMenuOpen, setIsSoftwareMenuOpen] = useState(false);
  const softwareMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        softwareMenuRef.current &&
        !softwareMenuRef.current.contains(event.target as Node)
      ) {
        setIsSoftwareMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

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
          <Link href={`/${locale}/loginsignup`} className="hover:underline">
            Login / Sign Up
          </Link>

          <Link href={`/${locale}/aboutus`} className="hover:underline">
            About Us
          </Link>

          {/* ✅ NEW CONSULTING LINK */}
          <Link href={`/${locale}/consulting`} className="hover:underline">
            Consulting
          </Link>

          <Link href={`/${locale}/contact`} className="hover:underline">
            Contact
          </Link>

          <Link href={`/${locale}/blog`} className="hover:underline">
            Blog
          </Link>

          {/* SOFTWARE DROPDOWN */}
          <div ref={softwareMenuRef} className="relative group">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={isSoftwareMenuOpen}
              className="hover:underline flex items-center gap-1"
              onClick={() => setIsSoftwareMenuOpen((prev) => !prev)}
            >
              Software
              <span className="text-xs">▾</span>
            </button>

            <div
              className={`absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-150 z-50 ${
                isSoftwareMenuOpen
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
              }`}
            >

              {/* Section Label */}
              <div className="px-4 pt-3 pb-1 text-xs uppercase tracking-wide text-gray-500">
                Platform
              </div>

              {/* Platform Overview Link */}
              <Link
                href={`/${locale}/dog-boarding-software`}
                className="block px-4 py-2 text-sm font-medium text-[#2c4a30] hover:bg-[#f0f7f2]"
                onClick={() => setIsSoftwareMenuOpen(false)}
              >
                Platform Overview
              </Link>

              {/* OR Divider */}
              <div className="relative my-3">
                <div className="border-t border-gray-200"></div>
                <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-2 text-xs text-gray-500 tracking-wide">
                  OR
                </span>
              </div>

              {/* Business Size Prompt */}
              <div className="px-4 pt-1 pb-1 text-xs uppercase tracking-wide text-gray-500 text-center">
                Choose Your Business Size
              </div>

              {/* Small */}
              <Link
                href={`/${locale}/dog-boarding-and-daycare-software-small-business`}
                className="block px-4 py-2 text-sm text-[#2c4a30] hover:bg-[#f0f7f2]"
                onClick={() => setIsSoftwareMenuOpen(false)}
              >
                Small Business
              </Link>

              {/* Medium */}
              <Link
                href={`/${locale}/dog-boarding-and-daycare-software-medium-business`}
                className="block px-4 py-2 text-sm text-[#2c4a30] hover:bg-[#f0f7f2]"
                onClick={() => setIsSoftwareMenuOpen(false)}
              >
                Medium Business
              </Link>

              {/* Large */}
              <Link
                href={`/${locale}/dog-boarding-and-daycare-software-large-business`}
                className="block px-4 py-2 text-sm text-[#2c4a30] hover:bg-[#f0f7f2]"
                onClick={() => setIsSoftwareMenuOpen(false)}
              >
                Large
              </Link>

              {/* Large */}
              <Link
                href={`/${locale}/dog-boarding-and-daycare-software-enterprise`}
                className="block px-4 py-2 text-sm text-[#2c4a30] hover:bg-[#f0f7f2]"
                onClick={() => setIsSoftwareMenuOpen(false)}
              >
                Multi-Location (Enterprise)
              </Link>

            </div>
          </div>

          <Link href={`/${locale}/tutorials`} className="hover:underline">
            Tutorials
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
        </nav>
      </div>
    </header>
  );
}
