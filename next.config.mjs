/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export", is for static deploying
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
