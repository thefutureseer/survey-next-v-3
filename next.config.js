/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // depending on routing
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;