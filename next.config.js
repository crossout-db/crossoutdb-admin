const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  transpilePackages: [
    "@refinedev/nextjs-router",
    "@refinedev/antd",
    "@refinedev/inferencer",
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/avatars/**',
      },
      {
        protocol: 'https',
        hostname: 'crossoutdb.com',
        port: '',
        pathname: '/img/items/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.akamai.steamstatic.com',
        port: '',
        pathname: '/steam/apps/**',
      },
    ],
  },
};
