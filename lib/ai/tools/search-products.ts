// 

import { z } from "zod";
import { sanityFetch } from "@/sanity/lib/live";
import { AI_SEARCH_PRODUCTS_QUERY } from "@/lib/sanity/queries/products";
import { formatPrice } from "@/lib/utils";
import { getStockStatus, getStockMessage } from "@/lib/constants/stock";
import type { AI_SEARCH_PRODUCTS_QUERYResult } from "@/sanity.types";
import type { SearchProduct } from "@/lib/ai/types";

// Updated to match your actual categories
const CATEGORY_VALUES = [
  "", 
  "gifting-editions", 
  "ritual-objects", 
  "titanium-collection", 
  "tea-ceremony", 
  "coffee-ritual"
] as const;

// Updated materials from your constants
const MATERIAL_VALUES = [
  "", "wood", "metal", "fabric", "leather", "glass", "ceramic", "silicone", "titanium"
] as const;

// Updated colors from your constants
const COLOR_VALUES = [
  "", "black", "white", "oak", "walnut", "grey", "natural", "copper", "brass"
] as const;

// Schema for validation
export const productSearchSchema = z.object({
  query: z
    .string()
    .optional()
    .default("")
    .describe("Search term to find products by name, description, or category"),
  category: z
    .enum(CATEGORY_VALUES)
    .optional()
    .default("")
    .describe("Filter by category slug"),
  material: z
    .enum(MATERIAL_VALUES)
    .optional()
    .default("")
    .describe("Filter by material type"),
  color: z
    .enum(COLOR_VALUES)
    .optional()
    .default("")
    .describe("Filter by color"),
  minPrice: z
    .number()
    .optional()
    .default(0)
    .describe("Minimum price in USD"),
  maxPrice: z
    .number()
    .optional()
    .default(0)
    .describe("Maximum price in USD. Use 0 for no maximum."),
});

export type ProductSearchInput = z.infer<typeof productSearchSchema>;

/**
 * Search products function (no Vercel AI SDK dependency)
 */
export async function searchProducts(input: ProductSearchInput) {
  const { query, category, material, color, minPrice, maxPrice } = input;
  
  console.log("[SearchProducts] Query received:", {
    query,
    category,
    material,
    color,
    minPrice,
    maxPrice,
  });

  try {
    const { data: products } = await sanityFetch({
      query: AI_SEARCH_PRODUCTS_QUERY,
      params: {
        searchQuery: query || "",
        categorySlug: category || "",
        material: material || "",
        color: color || "",
        minPrice: minPrice || 0,
        maxPrice: maxPrice || 0,
      },
    });

    console.log("[SearchProducts] Products found:", products.length);

    if (products.length === 0) {
      return {
        found: false,
        message:
          "No products found matching your criteria. Try different search terms or filters.",
        products: [],
        filters: {
          query,
          category,
          material,
          color,
          minPrice,
          maxPrice,
        },
      };
    }

    // Format the results with stock status
    const formattedProducts: SearchProduct[] = (
      products as AI_SEARCH_PRODUCTS_QUERYResult
    ).map((product) => ({
      id: product._id,
      name: product.name ?? null,
      slug: product.slug ?? null,
      description: product.description ?? null,
      price: product.price ?? null,
      priceFormatted: product.price ? formatPrice(product.price, "$") : null,
      category: product.category?.title ?? null,
      categorySlug: product.category?.slug ?? null,
      material: product.material ?? null,
      color: product.color ?? null,
      dimensions: product.dimensions ?? null,
      stockCount: product.stock ?? 0,
      stockStatus: getStockStatus(product.stock),
      stockMessage: getStockMessage(product.stock),
      featured: product.featured ?? false,
      assemblyRequired: product.assemblyRequired ?? false,
      imageUrl: product.image?.asset?.url ?? null,
      productUrl: product.slug ? `/products/${product.slug}` : null,
    }));

    return {
      found: true,
      message: `Found ${products.length} product${products.length === 1 ? "" : "s"} matching your search.`,
      totalResults: products.length,
      products: formattedProducts,
      filters: {
        query,
        category,
        material,
        color,
        minPrice,
        maxPrice,
      },
    };
  } catch (error) {
    console.error("[SearchProducts] Error:", error);
    return {
      found: false,
      message: "An error occurred while searching for products.",
      products: [],
      error: error instanceof Error ? error.message : "Unknown error",
      filters: {
        query,
        category,
        material,
        color,
        minPrice,
        maxPrice,
      },
    };
  }
}