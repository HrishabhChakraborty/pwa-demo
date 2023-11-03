/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: false,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  scope : "/",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: false,
});

module.exports = withPWA(nextConfig);
