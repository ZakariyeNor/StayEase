import Hotels from "@/components/hotel/Hotels";
import Image from "next/image";


export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <div className="max-w mx-auto items-center flex flex-col relative">
        {/* Image */}
        <Image
          alt="Hero Image"
          src="/hero.jpg"
          width={1920}
          height={1080}
          className="h-[500px] w-full object-cover "
        />
        {/* Overlay advertisement text */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="absolute top-40 text-center w-full">
             <div className="text-heading text-primary capitalize text-6xl font-extrabold">
            StayEase - Find Your perfect Stay
            <p className="text-xl pt-3">Discover the best hotels, exclusive deals, and top destinations worldwide.
              Book with confidence and enjoy your journey!.
            </p>
          </div>
        </div>
      </div>

      {/* Main section */}
      <div className="max-w-[1500px] mx-auto flex flex-col items-center justify-center mt-6">
        <div className="text-heading text-center font-bold pt-6">
          <h1 className="text-heading font-semibold text-4xl">Featured Hotels</h1>
        </div>
        <div className="mt-10 pb-10 grid lg:grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-2">
          <Hotels />
        </div>
      </div>
    </main>
  );
}
