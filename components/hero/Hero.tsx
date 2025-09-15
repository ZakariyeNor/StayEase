import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
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
    </>
  )
}

export default Hero