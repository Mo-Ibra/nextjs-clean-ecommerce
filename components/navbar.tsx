"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

/**
 * @description The main navigation component.
 *
 * @returns {JSX.Element} - The navigation component.
 */
export default function Navbar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Handle search form submission.
   *
   * @param {React.FormEvent} e - Event object.
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery) {
      // Redirect to search results page with query parameter.
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  }

  const routes = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-white border-b">
      <div className="container mx-auto md:py-6 md:px-8 flex h-16 items-center">

        {/* Mobile Navigation */}
        <div className="md:hidden"></div>

        {/* Logo */}
        <Link className="flex items-center gap-2 ml-4 md:ml-0 md:mr-8" href="/">
          <ShoppingBag className="h-6 w-6" />
          <span className="font-bold text-xl">Store</span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="font-medium transition-colors hover:text-primary"
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Search & Cart */}
        <div className="flex items-center gap-4 ml-auto">
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full md:w-[200px] lg:w-[300px] pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          {/* Mobile Search */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => router.push('/search')} >
            <Search className="w-5 h-5" />
          </Button>

        </div>
      </div>
    </header>
  );
}