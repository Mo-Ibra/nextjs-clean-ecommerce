import { getProductById } from "@/lib/data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/add-to-cart-button";

interface Params {
  id: string;
}

export default async function SingleProductPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) return notFound();

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="relative aspect-square w-full">
              <Image
                src={product.image || "/placeholder/400x400.svg"}
                alt={product.name}
                layout="fill"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="flex flex-col space-y-4 justify-center">
              <h1 className="text-3xl font-bold text-gray-800">
                {product.name}
              </h1>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-xl text-gray-800 font-semibold">
                ${product.price.toFixed(2)}
              </p>

              
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Description
                </h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>

              <AddToCartButton product={product} />
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
