import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../../components/Header'));
const Footer = dynamic(() => import('../../components/Footer'));

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={params.locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f6efe4] text-[#2c4a30] overflow-x-hidden`}>
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
