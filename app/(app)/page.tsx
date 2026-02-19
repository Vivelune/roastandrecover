import { CategoryTiles } from "@/components/featuredSections/CategoryTiles";
import { FeaturedCarousel } from "@/components/featuredSections/FeaturedCarousel";
import { FeaturedCarouselSkeleton } from "@/components/app/skeletons/FeaturedCarouselSkeleton";
import { ProductSection } from "@/components/featuredSections/ProductSection";
import { ALL_CATEGORIES_QUERY } from "@/lib/sanity/queries/categories";
import { FEATURED_PRODUCTS_QUERY, FILTER_PRODUCTS_BY_NAME_QUERY, FILTER_PRODUCTS_BY_PRICE_ASC_QUERY, FILTER_PRODUCTS_BY_PRICE_DESC_QUERY, FILTER_PRODUCTS_BY_RELEVANCE_QUERY } from "@/lib/sanity/queries/products";
import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";


interface PageProps{
  searchParams: Promise<{
    q?:string;
    category? : string;
    color? : string; 
    material? :string;
    minPrice?: string;
    maxPrice?: string;
    sort :string;
    inStock : string

  }>;
}
export const metadata = {
  title: 'Modern Ritual Lifestyle | Coffee & Tea Ceremony Accessories',
  description: 'Discover handcrafted tools for mindful living. Premium pour-over coffee sets, Japanese-inspired tea ceremonies, and contemplative home accessories.',
  openGraph: {
    title: 'Roast&Recover | Modern Ritual Lifestyle',
    description: 'Transform your daily coffee into ceremony. Premium brewing tools and contemplative living accessories.',
    images: ['/images/home-og.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};



export default async function Home({searchParams}:PageProps) {

  const params = await searchParams;
  
  const searchQuery = params.q ?? "";
  const categorySlug = params.category ?? "";
  const color = params.color ?? "";
  const material = params.material ?? "";
  const minPrice = Number(params.minPrice) || 0;
  const maxPrice = Number(params.maxPrice) || 0;
  const sort = params.sort ?? "name";
  const inStock = params.inStock === "true";

  const getQuery = () =>{
    if(searchQuery && sort == "relevance"){
      return FILTER_PRODUCTS_BY_RELEVANCE_QUERY
    }

    switch (sort){
      case "price_asc":
        return FILTER_PRODUCTS_BY_PRICE_ASC_QUERY;
      case "price_desc":
        return FILTER_PRODUCTS_BY_PRICE_DESC_QUERY;
      case "relevance":
        return FILTER_PRODUCTS_BY_RELEVANCE_QUERY;
      default:
        return FILTER_PRODUCTS_BY_NAME_QUERY
    }
  }


  const {data : products} = await sanityFetch({
    query:getQuery(),
    params:{
      searchQuery,categorySlug, color, material, minPrice, maxPrice, inStock,
    }
  })

  const {data : categories} = await sanityFetch({
    query:ALL_CATEGORIES_QUERY
  })

  const {data : featuredProducts} = await sanityFetch({
    query: FEATURED_PRODUCTS_QUERY
  })

   
  return (
    <div className="" >
      {/* Feartured Products Carousel */}
      <Suspense fallback={<FeaturedCarouselSkeleton/>}>
        <FeaturedCarousel products={featuredProducts}/>
      </Suspense>
      {/* Page Banner */}
      <div className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Shop {categorySlug ? categorySlug : "All Products"}
          </h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Premium accessories for your adventures
          </p>
        </div>

        {/* Category Tiles - Full width */}
        <div className="mt-6">
          <CategoryTiles
            categories={categories}
            activeCategory={categorySlug || undefined}
          />
        </div>
        
      </div>


      {/* Products Section  */}

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ProductSection
          categories={categories}
          products={products}
          searchQuery={searchQuery}
        />
      </div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "Roast&Recover",
      "description": "Modern Ritual Lifestyle - Premium tea, coffee, and contemplative living accessories",
      "url": "https://roastandrecover.com",
      "logo": "https://roastandrecover.com/logo-dark.svg",
      "sameAs": [
        "https://instagram.com/roastandrecover",
        "https://pinterest.com/roastandrecover",
        "https://tiktok.com/@roastandrecover"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Coffee Rituals",
            "description": "Premium pour-over and espresso tools"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Tea Ceremony",
            "description": "Japanese-inspired tea sets and accessories"
          }
        }
      ]
    })
  }}
/>

    </div>
  );
}
