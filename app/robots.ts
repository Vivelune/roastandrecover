// app/robots.ts
import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
  || 'http://localhost:3000';

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === 'production';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/studio/',
          '/api/',
          '/checkout/',
          '/orders/',
          '/*?*', // Disallow all URLs with query parameters to avoid duplicate content
        ],
      },
      // Specific rules for different bots if needed
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/studio/', '/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/studio/', '/api/'],
      },
    ],
    sitemap: isProduction 
      ? `${baseUrl}/sitemap.xml`
      : undefined, // Only link sitemap in production
    host: baseUrl,
  };
}