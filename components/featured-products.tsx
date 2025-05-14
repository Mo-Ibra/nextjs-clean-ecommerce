import { getFeaturedProducts } from "@/lib/data";
import ProductCard from "./product-card";

/**
 * FeaturedProducts component displays a grid of featured products.
 * It retrieves the featured products from the data source and renders
 * them using the ProductCard component.
 *
 * @returns {JSX.Element} The rendered FeaturedProducts component.
 */
function FeaturedProducts() {
  // Retrieve featured products from the data source
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 py-4 md:py-6 md:px-8">
        {/* Section heading */}
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Featured Products
        </h2>
        {/* Grid layout for featured products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            // Render a ProductCard for each featured product
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
