import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Discover Quality Products
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Shop our curated collection of premium products designed for modern
            living.
          </p>
        </div>

        <div>
          <Button asChild size="lg">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;