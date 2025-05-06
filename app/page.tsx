"use client";

import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import { useCart } from "@/hooks/use-cart";

function Home() {

  const { items, addToCart } = useCart();

  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;