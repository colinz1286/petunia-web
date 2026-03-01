'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const locale = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSoftwareMenuOpen, setIsSoftwareMenuOpen] = useState(false);
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);
  const [isMobileSoftwareOpen, setIsMobileSoftwareOpen] = useState(false);
  const [isMobileSocialOpen, setIsMobileSocialOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const softwareMenuRef = useRef<HTMLDivElement>(null);
  const socialMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setIsMobileSoftwareOpen(false);
        setIsMobileSocialOpen(false);
        setIsSoftwareMenuOpen(false);
        setIsSocialMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsMobileSoftwareOpen(false);
        setIsMobileSocialOpen(false);
        setIsSoftwareMenuOpen(false);
        setIsSocialMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const interactiveLinkClass =
    'block py-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a30] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6efe4] rounded-sm';

  const dropdownPanelClass =
    'absolute left-0 sm:left-auto sm:right-0 mt-2 w-[min(22rem,calc(100vw-2rem))] sm:w-56 max-h-[70vh] overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-150 z-50';

  const dropdownItemClass =
    'block px-4 py-2 text-sm text-[#2c4a30] hover:bg-[#f0f7f2] focus-visible:outline-none focus-visible:bg-[#f0f7f2]';

  const topLevelLinks = (
    <>
      <Link href={`/${locale}/loginsignup`} className={interactiveLinkClass}>
        Login / Sign Up
      </Link>

      <Link href={`/${locale}/aboutus`} className={interactiveLinkClass}>
        About Us
      </Link>

      <Link href={`/${locale}/consulting`} className={interactiveLinkClass}>
        Consulting
      </Link>

      <Link href={`/${locale}/contact`} className={interactiveLinkClass}>
        Contact
      </Link>

      <Link href={`/${locale}/blog`} className={interactiveLinkClass}>
        Blog
      </Link>
    </>
  );

  return (
    <header
      ref={headerRef}
      className="w-full px-4 sm:px-6 py-4 bg-[#f6efe4] border-b border-[#d9cfc2]"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a30] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6efe4] rounded-sm"
        >
          <Image
            src="/petunia_logo.png"
            alt="Petunia Logo"
            width={80}
            height={0}
            className="w-20 h-auto"
            priority
          />
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-main-menu"
          onClick={() => {
            setIsMobileMenuOpen((prev) => !prev);
            setIsSoftwareMenuOpen(false);
            setIsSocialMenuOpen(false);
          }}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#2c4a30] border border-[#d9cfc2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a30] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6efe4]"
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        <nav className="hidden md:flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm text-[#2c4a30] font-medium text-center">
          {topLevelLinks}

          {/* SOFTWARE DROPDOWN */}
          <div ref={softwareMenuRef} className="relative group">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={isSoftwareMenuOpen}
              aria-controls="software-menu-desktop"
              className={`flex items-center gap-1 ${interactiveLinkClass}`}
              onClick={() => {
                setIsSoftwareMenuOpen((prev) => !prev);
                setIsSocialMenuOpen(false);
              }}
            >
              Software
              <span className="text-xs">▾</span>
            </button>

            <div
              id="software-menu-desktop"
              className={`${dropdownPanelClass} ${
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
                className={`${dropdownItemClass} font-medium`}
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
                className={dropdownItemClass}
                onClick={() => setIsSoftwareMenuOpen(false)}
              >
                Small Business
              </Link>

              {/* Medium */}
              <Link
                href={`/${locale}/dog-boarding-and-daycare-software-medium-business`}
                className={dropdownItemClass}
                onClick={() => setIsSoftwareMenuOpen(false)}
              >
                Medium Business
              </Link>

              {/* Large */}
              <Link
                href={`/${locale}/dog-boarding-and-daycare-software-large-business`}
                className={dropdownItemClass}
                onClick={() => setIsSoftwareMenuOpen(false)}
              >
                Large
              </Link>

              {/* Large */}
              <Link
                href={`/${locale}/dog-boarding-and-daycare-software-enterprise`}
                className={dropdownItemClass}
                onClick={() => setIsSoftwareMenuOpen(false)}
              >
                Multi-Location (Enterprise)
              </Link>

            </div>
          </div>

          <Link href={`/${locale}/tutorials`} className={interactiveLinkClass}>
            Tutorials
          </Link>

          {/* SOCIAL MEDIA DROPDOWN */}
          <div ref={socialMenuRef} className="relative group">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={isSocialMenuOpen}
              aria-controls="social-menu-desktop"
              className={`flex items-center gap-1 ${interactiveLinkClass}`}
              onClick={() => {
                setIsSocialMenuOpen((prev) => !prev);
                setIsSoftwareMenuOpen(false);
              }}
            >
              Social Media
              <span className="text-xs">▾</span>
            </button>

            <div
              id="social-menu-desktop"
              className={`absolute left-0 sm:left-auto sm:right-0 mt-2 w-[min(16rem,calc(100vw-2rem))] sm:w-48 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-150 z-50 ${
                isSocialMenuOpen
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
              }`}
            >
              <a
                href="https://www.facebook.com/profile.php?id=61575107920935"
                target="_blank"
                rel="noopener noreferrer"
                className={dropdownItemClass}
                onClick={() => setIsSocialMenuOpen(false)}
              >
                Facebook
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={dropdownItemClass}
                onClick={() => setIsSocialMenuOpen(false)}
              >
                YouTube
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div
        id="mobile-main-menu"
        className={`md:hidden mt-3 overflow-hidden transition-all duration-200 ${
          isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="border border-[#d9cfc2] rounded-md bg-[#f6efe4] p-3 text-base text-[#2c4a30] font-medium">
          <div className="flex flex-col">
            <div className="py-1">{topLevelLinks}</div>

            <button
              type="button"
              aria-expanded={isMobileSoftwareOpen}
              aria-controls="software-menu-mobile"
              onClick={() => {
                setIsMobileSoftwareOpen((prev) => !prev);
                setIsMobileSocialOpen(false);
              }}
              className="flex w-full items-center justify-between py-2 text-left hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a30] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6efe4] rounded-sm"
            >
              <span>Software</span>
              <span className="text-xs">{isMobileSoftwareOpen ? '▴' : '▾'}</span>
            </button>

            {isMobileSoftwareOpen && (
              <div id="software-menu-mobile" className="pl-4 pb-1">
                <Link
                  href={`/${locale}/dog-boarding-software`}
                  className="block py-2 hover:underline"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileSoftwareOpen(false);
                  }}
                >
                  Platform Overview
                </Link>
                <Link
                  href={`/${locale}/dog-boarding-and-daycare-software-small-business`}
                  className="block py-2 hover:underline"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileSoftwareOpen(false);
                  }}
                >
                  Small Business
                </Link>
                <Link
                  href={`/${locale}/dog-boarding-and-daycare-software-medium-business`}
                  className="block py-2 hover:underline"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileSoftwareOpen(false);
                  }}
                >
                  Medium Business
                </Link>
                <Link
                  href={`/${locale}/dog-boarding-and-daycare-software-large-business`}
                  className="block py-2 hover:underline"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileSoftwareOpen(false);
                  }}
                >
                  Large
                </Link>
                <Link
                  href={`/${locale}/dog-boarding-and-daycare-software-enterprise`}
                  className="block py-2 hover:underline"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileSoftwareOpen(false);
                  }}
                >
                  Multi-Location (Enterprise)
                </Link>
              </div>
            )}

            <Link
              href={`/${locale}/tutorials`}
              className="py-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a30] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6efe4] rounded-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tutorials
            </Link>

            <button
              type="button"
              aria-expanded={isMobileSocialOpen}
              aria-controls="social-menu-mobile"
              onClick={() => {
                setIsMobileSocialOpen((prev) => !prev);
                setIsMobileSoftwareOpen(false);
              }}
              className="flex w-full items-center justify-between py-2 text-left hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a30] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6efe4] rounded-sm"
            >
              <span>Social Media</span>
              <span className="text-xs">{isMobileSocialOpen ? '▴' : '▾'}</span>
            </button>

            {isMobileSocialOpen && (
              <div id="social-menu-mobile" className="pl-4 pb-1">
                <a
                  href="https://www.facebook.com/profile.php?id=61575107920935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 hover:underline"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileSocialOpen(false);
                  }}
                >
                  Facebook
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 hover:underline"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileSocialOpen(false);
                  }}
                >
                  YouTube
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
