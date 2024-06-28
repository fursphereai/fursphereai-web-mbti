/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://cdn.discordapp.com/:path*',
      },
    ];
  },
  };
  
  export default nextConfig;
  