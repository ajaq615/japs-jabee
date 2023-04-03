/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jb-ph-cdn.tillster.com',
        port: '',
        pathname: '',
      },
    ],
  },
}

module.exports = nextConfig