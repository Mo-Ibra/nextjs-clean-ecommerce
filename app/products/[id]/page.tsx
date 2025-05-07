"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { getProductById } from "@/lib/data";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductPageProps {
  params: {
    id: string;
  };
}

function SingleProductPage({ params }: ProductPageProps) {
  const { addToCart } = useCart();
  const { id } = params;

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    async function fetchProduct() {
      const prod = await getProductById(id);
      if (!prod) return notFound();
      setProduct(prod);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <section className="w-full py-12">
        <div className="container mx-auto md:py-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-square">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-sm text-gray-500 mt-2">{product.category}</p>
              <div className="mt-4">
                <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Description</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="mt-8 space-y-4">
                <Button className="w-full md:w-auto cursor-pointer" size="lg" onClick={() => addToCart(product)}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SingleProductPage;