import { getFeaturedProducts } from "@/lib/data";
import ProductCard from "./product-card";

function FeaturedProducts() {

  const featuredProducts = getFeaturedProducts();

  return (
    <section className="w-full py-12">
      <div className="container mx-auto md:py-6 md:px-8">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
