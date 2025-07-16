import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    throw new Error('Locale is undefined');
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}/businessDashboard.json`)).default
  };
});
