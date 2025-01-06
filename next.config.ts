import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        domains: ['www.datocms-assets.com'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
