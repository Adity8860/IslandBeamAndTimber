
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",

    // Static export configuration
    trailingSlash: true,

    images: {
        unoptimized: true,
    },

    allowedDevOrigins: ['192.168.1.39'],

    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
};

export default nextConfig;
