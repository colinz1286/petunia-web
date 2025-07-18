import createNextIntlPlugin from 'next-intl/plugin';
import nextIntlConfig from './next-intl.config';

const withNextIntl = createNextIntlPlugin(nextIntlConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

export default withNextIntl(nextConfig);
