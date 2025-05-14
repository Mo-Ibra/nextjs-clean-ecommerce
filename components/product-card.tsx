"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/lib/types";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product
}

/**
 * ProductCard component displays the product's image, name, category, price,
 * and an "Add to Cart" button. It links to the product's detailed page.
 *
 * @param {ProductCardProps} props - Props containing the product details.
 * @returns {JSX.Element} The rendered ProductCard component.
 */
function ProductCard({ product }: ProductCardProps) {
  // Get the addToCart function from the useCart hook
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden py-0 gap-0">
      {/* Link to the product's detail page */}
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square relative overflow-hidden bg-gray-100 group-hover:opacity-75">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="px-4">
        {/* Product name linking to its detail page */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium mt-2 text-lg">{product.name}</h3>
        </Link>
        {/* Product category */}
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        {/* Product price */}
        <p className="font-medium text-lg mt-2">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4">
        {/* Button to add the product to the cart */}
        <Button
          onClick={() => addToCart(product)}
          className="w-full"
          variant="outline"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
