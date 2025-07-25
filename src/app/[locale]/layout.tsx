import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

const Header = dynamic(() => import('../../components/Header'));
const Footer = dynamic(() => import('../../components/Footer'));

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export function generateStaticParams() {
  return [{ locale: 'en' }]; // Adjust based on your supported locales
}

async function getMessages(locale: string) {
  try {
    const messages = (await import(`../../../messages/${locale}.json`)).default;
    return messages;
  } catch {
    notFound();
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  // NOTE: This will break because you can't await here:
  // const messages = await getMessages(locale);

  // So we need to convert the layout to a wrapper component pattern:
  return (
    <AsyncLayout locale={locale}>
      {children}
    </AsyncLayout>
  );
}

async function AsyncLayout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f6efe4] text-[#2c4a30] overflow-x-hidden`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
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
