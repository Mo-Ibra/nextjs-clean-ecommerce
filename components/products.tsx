import ProductCard from "@/components/product-card";
import { getAllProducts } from "@/lib/data";

/**
 * The Products component displays a list of all products.
 */
function Products() {
  // Retrieve all products from the data source
  const allProducts = getAllProducts();

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 py-4 md:py-6 md:px-8">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>

        {/* Display the products in a responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;