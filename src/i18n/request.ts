import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ request }) => {
  const defaultLocale = 'en';
  const supportedLocales = ['en'];

  const locale = request?.headers.get('x-next-intl-locale') || defaultLocale;

  if (!supportedLocales.includes(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  const messages: Record<string, any> = {};

  try {
    messages.businessDashboard = (await import(`../../messages/${locale}/businessDashboard.json`)).default;
    messages.boardingAndDaycareBusinessSettings = (await import(`../../messages/${locale}/boardingAndDaycareBusinessSettings.json`)).default;
    messages.individualDashboard = (await import(`../../messages/${locale}/individualDashboard.json`)).default;
    messages.individualEditProfile = (await import(`../../messages/${locale}/individualEditProfile.json`)).default;
  } catch (error) {
    console.warn('⚠️ Failed to load translations for locale:', locale, error);
  }

  return {
    locale,
    messages
  };
});
