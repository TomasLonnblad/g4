/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

fetch('/path', {
  headers: {
    'x-deployment-id': process.env.NEXT_DEPLOYMENT_ID
  },
});


export default nextConfig
