import { Hero } from "@/components/hero";
import Hotels from "@/components/hotel/Hotels";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Main section */}
      <div className="max-w-[1500px] mx-auto flex flex-col items-center justify-center mt-6">
        <div className="text-heading text-center font-bold pt-6">
          <h1 className="text-heading font-semibold text-4xl">Featured Hotels</h1>
        </div>
        <div className="mt-10 pb-10 grid lg:grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-2">
          <Hotels />
        </div>
      </div>

      <Footer />
    </main>
  );
}
