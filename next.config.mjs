/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: false
    },
    images: {
        domains: ['picsum.photos'],
    },
};

export default nextConfig;
