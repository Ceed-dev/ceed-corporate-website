/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/careers',
        destination: '/recruit',
        permanent: true,
      },
      {
        source: '/careers/:slug',
        destination: '/recruit/:slug',
        permanent: true,
      },
      {
        source: '/culture',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/company',
        destination: '/about#company',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
