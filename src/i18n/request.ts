import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ request }) => {
  const locale = request.headers.get('x-next-intl-locale') || 'en';
  return {
    locale,
    messages: (await import(`../../messages/${locale}/businessDashboard.json`)).default
  };
});
