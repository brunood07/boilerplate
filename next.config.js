/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;
