/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
   remotePatterns: [
    {
      protocol: 'https',
      hostname: 'plus.unsplash.com', 
      port: '',
      pathname: '**'
    },
     {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      },
      {
        protocol: 'https',
        hostname: 'samiyusufofficial.com'
      }
   ]
  }
};

export default nextConfig;
