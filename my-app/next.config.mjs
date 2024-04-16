/** @type {import('next').NextConfig} */
const nextConfig = {
  test: /\.svg$/,
  use: ["@svgr/webpack"],
};

export default nextConfig;
