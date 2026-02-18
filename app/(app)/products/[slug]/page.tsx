import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCT_BY_SLUG_QUERY } from "@/lib/sanity/queries/products";
import { ProductGallery } from "@/components/featuredSections/ProductGallery";
import { ProductInfo } from "@/components/featuredSections/ProductInfo";
import type { Metadata, ResolvingMetadata } from 'next';


type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const { data: product } = await sanityFetch({
    query: PRODUCT_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  const productName = product.name || 'Product';
  const description = product.description?.substring(0, 155) || `Discover the ${productName} - a premium accessory for your coffee, tea, or mindful living ritual.`;
  const imageUrl = product.images?.[0]?.asset?.url;

  return {
    title: productName,
    description: description,
    openGraph: {
      title: productName,
      description: description,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: productName }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: productName,
      description: description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const { data: product } = await sanityFetch({
    query: PRODUCT_BY_SLUG_QUERY,
    params: { slug },
  });



  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Product Info */}
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
}