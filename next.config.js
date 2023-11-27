/** @type {import('next').NextConfig} */
// @ts-ignore
const { i18n } = require("./next-i18next.config");

const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    reactStrictMode: false,
    i18n,
    typescript: {
        ignoreBuildErrors: false,
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
    images: {},
};

module.exports = nextConfig;
