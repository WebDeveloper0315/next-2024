// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

module.exports = {
    experimental: {
        serverActions: {
            allowedOrigins: ["localhost:3000", "f6m2cv-3000.csb.app"],
        },
    },
}