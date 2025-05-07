"use client";

import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";

interface ProductCartProps {
  product: Product;
  className?: string;
}

export default function AddToCartButton({ product, className }: ProductCartProps) {
  const { addToCart } = useCart();

  return (
    <Button onClick={() => addToCart(product)} className={className}>
      <ShoppingCart className={`mr-2`} />
      Add To Cart
    </Button>
  );
}
