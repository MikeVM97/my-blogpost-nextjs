/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/MikeVM97/test-blogposts-nextjs/main/images/**',
      }
    ]
  }
}

module.exports = nextConfig
