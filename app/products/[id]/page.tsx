import { getProductById } from "@/lib/data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/add-to-cart-button";

interface Params {
  id: string;
}

/**
 * The product page component
 * @param {Params} params The route params
 * @returns {JSX.Element} The component
 */
export default async function SingleProductPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;

  const product = getProductById(id);

  // If there is no product with the given id, return a 404
  if (!product) return notFound();

  return (
    <>
      {/* The navbar component */}
      <Navbar />

      {/* The main content */}
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4 py-4 md:py-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* The product image */}
            <div className="relative aspect-square w-full">
              <Image
                src={product.image || "/placeholder/400x400.svg"}
                alt={product.name}
                layout="fill"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* The product details */}
            <div className="flex flex-col space-y-4 justify-center">
              {/* The product name */}
              <h1 className="text-3xl font-bold text-gray-800">
                {product.name}
              </h1>

              {/* The product category */}
              <p className="text-sm text-gray-500">{product.category}</p>

              {/* The product price */}
              <p className="text-xl text-gray-800 font-semibold">
                ${product.price.toFixed(2)}
              </p>

              {/* The product description */}
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Description
                </h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>

              {/* The add to cart button */}
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* The footer component */}
      <Footer />
    </>
  );
}
