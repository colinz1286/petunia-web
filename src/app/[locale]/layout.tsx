import '../globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { type Metadata } from 'next';
import { type JSX } from 'react';

const Header = dynamic(() => import('../../components/Header'));
const Footer = dynamic(() => import('../../components/Footer'));

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const generateMetadata = async ({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  return {
    title: 'Petunia',
    description: 'All-in-one pet care platform',
  };
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'en-US' }]; // Add more supported locales here if needed
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}): Promise<JSX.Element> {
  let messages;
  try {
    messages = (await import(`../../../messages/${params.locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f6efe4] text-[#2c4a30] overflow-x-hidden`}
      >
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          <main className="min-h-screen w-full max-w-screen-xl mx-auto px-4 sm:px-6">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
