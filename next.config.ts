const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/**",
      },
    ],
  },
  experimental: {
    turbo: {
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "utfs.io",
            port: "",
            pathname: "/f/**",
          },
        ],
      },
    },
  },
};

module.exports = withContentlayer(nextConfig);
