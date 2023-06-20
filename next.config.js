/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'cdn.paraswap.io', "cdn.paraswap.io", "assets.coingecko.com", "assets.coingecko.com"
        ],
    },
    reactStrictMode: true,
    webpack: config => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        return config;
    },
};

module.exports = nextConfig