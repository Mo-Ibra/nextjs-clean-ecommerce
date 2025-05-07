import { Product, Category } from "./types";

const products: Product[] = [
  {
    id: "1",
    name: "Minimal Desk Lamp",
    description: "A sleek, adjustable desk lamp with minimalist design.",
    price: 49.99,
    image: "/placeholder/400x400.svg",
    category: "Home Decor",
  },
  {
    id: "2",
    name: "Ergonomic Office Chair",
    description:
      "Comfortable office chair with lumbar support and adjustable height.",
    price: 199.99,
    image: "/placeholder/400x400.svg",
    category: "Furniture",
  },
  {
    id: "3",
    name: "Wireless Earbuds",
    description: "Premium wireless earbuds with noise cancellation.",
    price: 129.99,
    image: "/placeholder/400x400.svg",
    category: "Electronics",
  },
  {
    id: "4",
    name: "Ceramic Coffee Mug",
    description: "Handcrafted ceramic mug with minimalist design.",
    price: 24.99,
    image: "/placeholder/400x400.svg",
    category: "Kitchen",
  },
  {
    id: "5",
    name: "Leather Wallet",
    description: "Genuine leather wallet with multiple card slots.",
    price: 59.99,
    image: "/placeholder/400x400.svg",
    category: "Accessories",
  },
  {
    id: "6",
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health tracking capabilities.",
    price: 249.99,
    image: "/placeholder/400x400.svg",
    category: "Electronics",
  },
  {
    id: "7",
    name: "Cotton T-Shirt",
    description: "Premium cotton t-shirt with a comfortable fit.",
    price: 29.99,
    image: "/placeholder/400x400.svg",
    category: "Clothing",
  },
  {
    id: "8",
    name: "Bluetooth Speaker",
    description: "Portable bluetooth speaker with rich sound quality.",
    price: 79.99,
    image: "/placeholder/400x400.svg",
    category: "Electronics",
  },
];

const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    slug: "electronics",
    image: "/placeholder/300x300.svg",
  },
  {
    id: "2",
    name: "Clothing",
    slug: "clothing",
    image: "/placeholder/300x300.svg",
  },
  {
    id: "3",
    name: "Home Decor",
    slug: "home-decor",
    image: "/placeholder/300x300.svg",
  },
  {
    id: "4",
    name: "Furniture",
    slug: "furniture",
    image: "/placeholder/300x300.svg",
  },
  {
    id: "5",
    name: "Kitchen",
    slug: "kitchen",
    image: "/placeholder/300x300.svg",
  },
  {
    id: "6",
    name: "Accessories",
    slug: "accessories",
    image: "/placeholder/300x300.svg",
  },
];

/**
 * Retrieves all products.
 * @returns {Product[]} An array of all product objects.
 */
export function getAllProducts(): Product[] {
  // Return the list of all products
  return products;
}

/**
 * Retrieves the first 4 products from the list.
 * @returns {Product[]} An array of the first 4 product objects.
 */
export function getFeaturedProducts(): Product[] {
  // Return the first 4 products
  return products.slice(0, 4);
}

/**
 * Retrieves a product by its unique identifier.
 * @param {string} id - The unique identifier of the product.
 * @returns {Product | undefined} The product object if found, otherwise undefined.
 */
export function getProductById(id: string): Product | undefined {
  // Find and return the product with the matching id
  return products.find((product) => product.id === id);
}

/**
 * Retrieves all categories.
 * @returns {Category[]} An array of all category objects.
 */
export function getAllCategories(): Category[] {
  // Return the list of all categories
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  // Find and return the category with the matching slug
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(categoryName: string): Product[] {
  return products.filter((product) => product.category === categoryName)
}