"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getAllCategories, getAllProducts } from "@/lib/data";
import { Product } from "@/lib/types";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchIcon, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import FilterSidebar from "@/components/filter-sidebar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function Search() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const [products, setProducts] = useState<Product[]>(getAllProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = getAllCategories();
  const allProducts = getAllProducts();

  // Get min and max prices from all products
  const minPrice = Math.min(...allProducts.map((product) => product.price));
  const maxPrice = Math.max(...allProducts.map((product) => product.price));

  useEffect(() => {
    let results = [...allProducts];

    if (searchQuery) {
      results = results.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(searchQuery.toLocaleLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
      );
    }

    // Apply Category Filter
    if (selectedCategories.length > 0) {
      results = results.filter((product) => {
        return selectedCategories.includes(product.category);
      });
    }

    // Apply price range filter
    results = results.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(results);
  }, [searchQuery, priceRange, selectedCategories, allProducts]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setPriceRange([minPrice, maxPrice]);
    setSearchQuery("");
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  return (
    <>
      <Navbar />
      <div className="py-8">
        <div className="container mx-auto px-4 py-4 md:py-6 md:px-8">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:gap-6">
            {/* Mobile Filter Button */}
            <div className="flex md:hidden justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Search Products</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="py-4">
                    <FilterSidebar
                      categories={categories}
                      selectedCategories={selectedCategories}
                      priceRange={priceRange}
                      minPrice={minPrice}
                      maxPrice={maxPrice}
                      onCategoryChange={handleCategoryChange}
                      onPriceChange={handlePriceChange}
                      onClearFilters={clearAllFilters}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block w-1/4 min-w-[250px]">
              <FilterSidebar
                categories={categories}
                selectedCategories={selectedCategories}
                priceRange={priceRange}
                minPrice={minPrice}
                maxPrice={maxPrice}
                onCategoryChange={handleCategoryChange}
                onPriceChange={handlePriceChange}
                onClearFilters={clearAllFilters}
              />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="md:hidden">
                <form onSubmit={handleSearch} className="flex w-full mb-6">
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" className="ml-2">
                    <SearchIcon className="h-4 w-4" />
                  </Button>
                </form>
              </div>

              <div className="hidden md:block mb-6">
                <h1 className="text-2xl font-bold mb-4">Search Products</h1>
                <form onSubmit={handleSearch} className="flex w-full">
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" className="ml-2">
                    <SearchIcon className="h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Results Count */}
              <div className="mb-4 text-sm text-gray-500">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"} found
              </div>

              {/* Results */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h2 className="text-xl font-medium">No products found</h2>
                  <p className="text-gray-500 mt-2">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={clearAllFilters}
                  >
                    Clear all filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
