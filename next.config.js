/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      swcPlugins: [
        ["next-superjson-plugin", {}]
      ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.vercel.com',
                hostname: 'res.cloudinary.com',
                hostname: 'avatar.githubusercontent.com',
                hostname: 'lh3.googleusercontent.com',
                pathname: '**'
            },
      ],
    },
  };
  
  module.exports = nextConfig;
