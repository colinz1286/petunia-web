import '../globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import dynamic from 'next/dynamic';
import { type Metadata } from 'next';
import LayoutContent from '../../components/LayoutContent';
import MessagesProvider from './MessagesProvider';

// Fonts
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

// Dynamic imports
const Header = dynamic(() => import('../../components/Header'));
const Footer = dynamic(() => import('../../components/Footer'));

export const metadata: Metadata = {
  metadataBase: new URL('https://petuniapets.com'),
  title: {
    default: 'Petunia – The perfect app for your business. The perfect world for your pet.',
    template: '%s | Petunia',
  },
  description: 'All-in-one pet care platform trusted by owners, sitters, shelters, and clinics.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.png' }],
  },
};

// ⭐ NO dynamic params — this is now a static folder
export const dynamicParams = false;

// ⭐ Static locale value
const locale = "en";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f6efe4] text-[#2c4a30] overflow-x-hidden`}
      >
        <MessagesProvider locale={locale}>
          <LayoutContent locale={locale}>
            <Header />
            <main className="min-h-screen w-full max-w-screen-xl mx-auto px-4 sm:px-6">
              {children}
            </main>
            <Footer />
          </LayoutContent>
        </MessagesProvider>
      </body>
    </html>
  );
}
