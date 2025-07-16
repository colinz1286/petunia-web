export default {
  locales: ['en'],
  defaultLocale: 'en',
  getRequestConfig: () => import('./src/i18n/request')
};
