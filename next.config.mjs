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

  async redirects() {
    return [
      // .html → clean routes
      { source: "/iip.html",           destination: "/",                   permanent: true },
      { source: "/about.html",         destination: "/about",              permanent: true },
      { source: "/services.html",      destination: "/services",           permanent: true },
      { source: "/contact.html",       destination: "/contact",            permanent: true },
      { source: "/seminars.html",      destination: "/seminars",           permanent: true },
      { source: "/appreciation.html",  destination: "/appreciation",       permanent: true },
      { source: "/life-insurance.html",destination: "/life-insurance",     permanent: true },

      // Old name → new name
      { source: "/annuities.html",     destination: "/annuity",            permanent: true },
      { source: "/annuities",          destination: "/annuity",            permanent: true },
      { source: "/retirement.html",    destination: "/retirement-planning", permanent: true },
      { source: "/retirement",         destination: "/retirement-planning", permanent: true },
    ];
  },
};

export default nextConfig;
