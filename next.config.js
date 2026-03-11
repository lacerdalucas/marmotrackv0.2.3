/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ['pdf-parse', '@napi-rs/canvas'],
    experimental: {
        serverActions: {
            allowedOrigins: ['localhost:3000']
        }
    }
}

module.exports = nextConfig
