/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 在构建过程中忽略 ESLint 错误
    ignoreDuringBuilds: true,
  },
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
  