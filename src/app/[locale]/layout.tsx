import '../globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import dynamic from 'next/dynamic';
import { type Metadata } from 'next';
import LayoutContent from '../../components/LayoutContent';

import { NextIntlClientProvider } from 'next-intl'; // ✅ NEW
import { getMessages } from 'next-intl/server';      // ✅ NEW
import { notFound } from 'next/navigation';          // ✅ NEW

// Fonts
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

// Header & Footer (dynamically imported for performance)
const Header = dynamic(() => import('../../components/Header'));
const Footer = dynamic(() => import('../../components/Footer'));

// ✅ Structured metadata with fallback support
export const metadata: Metadata = {
  title: {
    default: 'Petunia – The perfect app for your business. The perfect world for your pet.',
    template: '%s | Petunia',
  },
  description: 'All-in-one pet care platform trusted by owners, sitters, shelters, and clinics.',
};

// Locales supported
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'en-US' }];
}

// Layout wrapper per locale
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages;
  try {
    messages = await getMessages();
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f6efe4] text-[#2c4a30] overflow-x-hidden`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}> {/* ✅ FIXED */}
          <LayoutContent locale={locale}>
            <Header />
            <main className="min-h-screen w-full max-w-screen-xl mx-auto px-4 sm:px-6">
              {children}
            </main>
            <Footer />
          </LayoutContent>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
