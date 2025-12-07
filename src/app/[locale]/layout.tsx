import '../globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import dynamic from 'next/dynamic';
import { type Metadata } from 'next';
import LayoutContent from '../../components/LayoutContent';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Fonts
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

// Dynamic imports
const Header = dynamic(() => import('../../components/Header'));
const Footer = dynamic(() => import('../../components/Footer'));

// Metadata
export const metadata: Metadata = {
  title: {
    default: 'Petunia – The perfect app for your business. The perfect world for your pet.',
    template: '%s | Petunia',
  },
  description: 'All-in-one pet care platform trusted by owners, sitters, shelters, and clinics.',
  icons: {
    icon: [{ url: '/favicon.png' }],
  },
};

// Locales supported
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'en-US' }];
}

// 🛠 Wrap the async logic in an inner Server Component
async function LocaleLayoutContent({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  let messages;
  try {
    messages = await getMessages();
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LayoutContent locale={locale}>
        <Header />
        <main className="min-h-screen w-full max-w-screen-xl mx-auto px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </LayoutContent>
    </NextIntlClientProvider>
  );
}

// ✅ Top-level layout must be synchronous
export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f6efe4] text-[#2c4a30] overflow-x-hidden`}
      >
        {/* Async nested component */}
        <LocaleLayoutContent locale={locale}>{children}</LocaleLayoutContent>
      </body>
    </html>
  );
}
