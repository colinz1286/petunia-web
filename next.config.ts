import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  experimental: {
    serverActions: {}
  }
};

const withNextIntl = createNextIntlPlugin({
  // requestConfigPath will default to './src/i18n/request.ts'
});

export default withNextIntl(nextConfig);
