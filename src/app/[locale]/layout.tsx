import '../globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import dynamic from 'next/dynamic';
import { type ReactNode } from 'react';
import { type Metadata } from 'next';
import LayoutContent from '../../components/LayoutContent';

const Header = dynamic(() => import('../../components/Header'));
const Footer = dynamic(() => import('../../components/Footer'));

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: `Petunia (${params.locale})`,
    description: 'All-in-one pet care platform',
  };
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'en-US' }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f6efe4] text-[#2c4a30] overflow-x-hidden`}
      >
        <LayoutContent locale={params.locale}>
          <Header />
          <main className="min-h-screen w-full max-w-screen-xl mx-auto px-4 sm:px-6">
            {children}
          </main>
          <Footer />
        </LayoutContent>
      </body>
    </html>
  );
}
