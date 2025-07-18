import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  let messages = {};
  try {
    if (locale === 'en') {
      messages = {
        businessDashboard: (await import(`../../../messages/en/businessDashboard.json`)).default,
        individualDashboard: (await import(`../../../messages/en/individualDashboard.json`)).default,
        individualEditProfile: (await import(`../../../messages/en/individualEditProfile.json`)).default,
        boardingAndDaycareBusinessSettings: (await import(`../../../messages/en/boardingAndDaycareBusinessSettings.json`)).default
      };
    }
  } catch (error) {
    console.warn('⚠️ Failed to load messages for locale:', locale, error);
  }

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f6efe4] text-[#2c4a30]`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
