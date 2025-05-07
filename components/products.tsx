import ProductCard from "@/components/product-card";
import { getAllProducts } from "@/lib/data";

function Products() {
  const allProducts = getAllProducts();

  return (
    <section className="w-full py-12">
      <div className="container mx-auto md:py-6 md:px-8">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;