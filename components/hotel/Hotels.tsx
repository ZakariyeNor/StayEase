import React from 'react';
import Image from 'next/image';



const Hotels = () => {
  return (
    <>
     {/* Card 1  */}
    <div className="flex flex-col justify-center shadow-md gap-4 rounded-lg w-72 relative transition-transform duration-300 hover:scale-105">
        {/* Card Image */}
        <Image
        alt='Hotel Sunshine'
        src='/sunshine.jpg'
        height={100}
        width={200}
        className='h-48 w-72 object-cover rounded-t-xl'
        />
        <div className="absolute top-0 right-0 bg-accent text-accentText pl-3 pr-3 rounded-md text-sm">
            from $120/night
        </div>
        {/* Card Details */}
        <div className="flex flex-col gap-2 pl-5 text-left pr-3">
            <h2 className="font-heading text-xl text-mainText">
                Hotel Sunshine - Downtown Deluxe Room
            </h2>
            <p className="text-secondary-gray text-sm">
                Experience luxury in the heart of the city with stunning 
                views and world-class amenities.
            </p>
            <p className="text-secondary-gray text-sm">Miami Beach, FL</p>
            <p className="text-accent font-semibold">$200 / night</p>
            <button className='text-accentText bg-accent p-2 mb-4 rounded w-64 transition-transform duration-300 hover:scale-105 hover:bg-blue-900/80'>
                View Details
            </button>
        </div>
    </div>
     {/* Card 2 */} 
    <div className="flex flex-col justify-center shadow-md gap-4 rounded-lg w-72 relative transition-transform duration-300 hover:scale-105">
        {/* Card Image */}
        <Image
        alt='Hotel Sunshine'
        src='/oceanview.jpg'
        height={100}
        width={200}
        className='h-48 w-72 object-cover rounded-t-xl'
        />
        <div className="absolute top-0 right-0 bg-accent text-accentText pl-3 pr-3 rounded-md text-sm">
            from $220/night
        </div>
        {/* Card Details */}
        <div className="flex flex-col gap-2 pl-5 text-left pr-3">
            <h2 className="font-heading text-xl text-mainText">
                Ocean View Resort - Standard Suite
            </h2>
            <p className="text-secondary-gray text-sm">
                Wake up to breathtaking ocean vistas and enjoy serene comfort in our elegant suites.
            </p>
            <p className="text-secondary-gray text-sm">Miami Beach, FL</p>
            <p className="text-accent font-semibold">$200 / night</p>
            <button className='text-accentText bg-accent p-2 mb-4 rounded w-64 transition-transform duration-300 hover:scale-105 hover:bg-blue-900/80'>
                View Details
            </button>
        </div>
    </div>
     {/* Card 3 */} 
    <div className="flex flex-col justify-center shadow-md gap-4 rounded-lg w-72 relative transition-transform duration-300 hover:scale-105">
        {/* Card Image */}
        <Image
        alt='Hotel Sunshine'
        src='/inwintermonuntain.jpg'
        height={100}
        width={200}
        className='h-48 w-72 object-cover rounded-t-xl'
        />
        <div className="absolute top-0 right-0 bg-accent text-accentText pl-3 pr-3 rounded-md text-sm">
            from $300/night
        </div>
        {/* Card Details */}
        <div className="flex flex-col gap-2 pl-5 text-left pr-3">
            <h2 className="font-heading text-xl text-mainText">
                Mountain Lodge - Family Room
            </h2>
            <p className="text-secondary-gray text-sm">
                A cozy retreat for the whole family, surrounded by stunning mountain landscapes.
            </p>
            <p className="text-secondary-gray text-sm">Miami Beach, FL</p>
            <p className="text-accent font-semibold">$200 / night</p>
            <button className='text-accentText bg-accent p-2 mb-4 rounded w-64 transition-transform duration-300 hover:scale-105 hover:bg-blue-900/80'>
                View Details
            </button>
        </div>
    </div>
    
    </>
    
  )
}

export default Hotels