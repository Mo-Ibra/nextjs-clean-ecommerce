"use client";

import { Product } from "@/lib/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface CartContextType {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    // Try to load the cart from localStorage
    const cart = localStorage.getItem("cart");
    if (cart) {
      // If the cart is found, parse it and set it to the state
      setItems(JSON.parse(cart));
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    try {
      // Save the current cart to localStorage
      localStorage.setItem("cart", JSON.stringify(items));
    } catch (error) {
      // If there's an error, log it to the console
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [items]);

  /**
   * Adds a product to the cart.
   *
   * @param product - The product to add to the cart.
   */
  const addToCart = (product: Product) => {
    // Append the new product to the existing items array
    setItems([...items, product]);
  };

  /**
   * Removes a product from the cart by its ID.
   *
   * @param productId - The ID of the product to remove.
   */
  const removeFromCart = (productId: string) => {
    setItems((items) => {
      // Find the index of the product with the given ID
      const index = items.findIndex((item) => item.id === productId);

      // If the product is in the cart, remove it
      if (index !== -1) {
        const newItems = [...items];
        newItems.splice(index, 1); // Remove the product from the array
        return newItems; // Return the updated items array
      }
      return items; // If product not found, return the original items array
    });
  };

  /**
   * Removes all products from the cart.
   */
  const clearCart = () => {
    // Reset the items array to be empty
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        /**
         * The list of products in the cart.
         */
        items,
        /**
         * Adds a product to the cart.
         *
         * @param product - The product to add to the cart.
         */
        addToCart,
        /**
         * Removes a product from the cart by its ID.
         *
         * @param productId - The ID of the product to remove.
         */
        removeFromCart,
        /**
         * Removes all products from the cart.
         */
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/**
 * Hook to access the cart context.
 *
 * @returns The cart context.
 */
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error(
      "useCart must be used within a CartProvider. " +
        "Make sure you have wrapped your app with the CartProvider component."
    );
  }
  return context;
}