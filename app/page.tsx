"use client";

import Categories from "@/components/categories";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import NewsLetter from "@/components/news-letter";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;