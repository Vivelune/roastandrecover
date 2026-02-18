// lib/sanity/queries/sitemap.ts
import { defineQuery } from "next-sanity";

/**
 * Get all products with slugs and update dates for sitemap
 * Excludes drafts and requires a slug to exist
 */
export const ALL_PRODUCTS_SITEMAP_QUERY = defineQuery(`*[
  _type == "product" 
  && defined(slug.current)
  && !(_id in path("drafts.**"))
] {
  "slug": slug.current,
  "_updatedAt": _updatedAt
} | order(slug asc)`);

/**
 * Get all categories with slugs and update dates for sitemap
 * Excludes drafts and requires a slug to exist
 */
export const ALL_CATEGORIES_SITEMAP_QUERY = defineQuery(`*[
  _type == "category" 
  && defined(slug.current)
  && !(_id in path("drafts.**"))
] {
  "slug": slug.current,
  "_updatedAt": _updatedAt
} | order(slug asc)`);

/**
 * Get all static pages for sitemap (if you add blog posts, etc.)
 * Example for future blog posts
 */
export const ALL_BLOG_POSTS_SITEMAP_QUERY = defineQuery(`*[
  _type == "blogPost" 
  && defined(slug.current)
  && !(_id in path("drafts.**"))
] {
  "slug": slug.current,
  "_updatedAt": _updatedAt
} | order(publishedAt desc)`);

/**
 * Get all data for sitemap in a single query (optimized)
 */
export const ALL_SITEMAP_DATA_QUERY = defineQuery(`{
  "products": *[
    _type == "product" 
    && defined(slug.current)
    && !(_id in path("drafts.**"))
  ] {
    "slug": slug.current,
    "_updatedAt": _updatedAt
  } | order(slug asc),
  
  "categories": *[
    _type == "category" 
    && defined(slug.current)
    && !(_id in path("drafts.**"))
  ] {
    "slug": slug.current,
    "_updatedAt": _updatedAt
  } | order(slug asc)
}`);