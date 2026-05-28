/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Prevent MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Prevent this site from being embedded in iframes on other domains
  { key: 'X-Frame-Options', value: 'DENY' },
  // Enable DNS prefetching for performance
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // Control referrer information sent with requests
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disable unnecessary browser features
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  // Force HTTPS for 2 years (only applies on HTTPS — Vercel handles this)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Prevent cross-origin info leaks via window opener
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  // Content Security Policy
  // Notes:
  //   • 'unsafe-inline' on script-src is required by Next.js 14 inline hydration scripts
  //   • 'unsafe-inline' on style-src is required by Tailwind CSS
  //   • frame-src allows the Google Maps embed on /connect
  //   • img-src allows QR codes from api.qrserver.com
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://api.qrserver.com",
      "frame-src https://maps.google.com https://www.google.com",
      "connect-src 'self'",
      "font-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
]

const nextConfig = {
  // Static export — produces /out directory, works on both Vercel and Netlify
  output: 'export',
  async headers() {
    return [
      {
        // Vercel reads these headers even with static export
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  images: {
    // Required for static export — disables server-side image optimisation
    // Images are still served via Netlify/Vercel CDN
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'api.qrserver.com' },
    ],
  },
}

export default nextConfig
