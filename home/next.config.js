const { TREEPRUN_URL } = process.env;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/:path*",
          destination: `/:path*`,
        },
        {
          source: "/treeprun",
          destination: `${TREEPRUN_URL}/treeprun`,
        },
        {
          source: "/treeprun/:path*",
          destination: `${TREEPRUN_URL}/treeprun/:path*`,
        },
      ]
    },
  }

  module.exports = nextConfig
