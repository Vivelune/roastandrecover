// app/sitemap.ts
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_SITEMAP_DATA_QUERY } from '@/lib/sanity/queries/sitemap';
import type { MetadataRoute } from 'next';

// Base URL with fallback for development
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
  || 'http://localhost:3000';

// Define the return type explicitly
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Fetch all sitemap data in one go
    const { data } = await sanityFetch({
      query: ALL_SITEMAP_DATA_QUERY,
    });

    const { products = [], categories = [] } = data || {};

    // Product URLs - highest priority, weekly changes
    const productUrls: MetadataRoute.Sitemap = products.map((product: { slug: string; _updatedAt: string }) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: product._updatedAt || new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    // Category URLs - medium priority, weekly changes
    const categoryUrls: MetadataRoute.Sitemap = categories.map((category: { slug: string; _updatedAt: string }) => ({
      url: `${baseUrl}/?category=${category.slug}`,
      lastModified: category._updatedAt || new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    // Static pages with their priorities and change frequencies
    const staticUrls: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/orders`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.3,
      },
    ];

    // Combine all URLs
    const allUrls = [...staticUrls, ...productUrls, ...categoryUrls];

    // Log sitemap stats in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Sitemap Generated:', {
        total: allUrls.length,
        products: productUrls.length,
        categories: categoryUrls.length,
        static: staticUrls.length,
      });
    }

    return allUrls;
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    
    // Fallback to only static pages if Sanity fetch fails
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/orders`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.3,
      },
    ];
  }
}