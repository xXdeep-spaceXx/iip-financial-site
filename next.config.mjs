/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.sloyd.ai",
      },
    ],
  },
};

export default nextConfig;
