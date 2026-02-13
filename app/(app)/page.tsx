import { ALL_CATEGORIES_QUERY } from "@/lib/sanity/queries/categories";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Home() {

  const {data : categories} = await sanityFetch({
    query:ALL_CATEGORIES_QUERY
  })

  return (
    <div className="" >
      {/* Feartured Products Carousel */}
      
      {/* Page Banner */}


      {/* Category Grid */}

      {/* Products Section  */}
    </div>
  );
}
