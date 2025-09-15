import React from 'react';
import Image from 'next/image';



const Hotels = () => {
  return (
    <>
     {/* Card 1  */}
    <div className="flex flex-col justify-center shadow-md gap-4 rounded-lg w-72">
        {/* Card Image */}
        <Image
        alt='Hotel Sunshine'
        src='/sunshine.jpg'
        height={100}
        width={200}
        className='h-48 w-72 object-cover rounded-t-xl'
        />
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
            <button className='text-accentText bg-accent p-2 mb-4 rounded w-64'>
                View Details
            </button>
        </div>
    </div>
     {/* Card 2 */} 
    <div className="flex flex-col justify-center shadow-md gap-4 rounded-lg w-72">
        {/* Card Image */}
        <Image
        alt='Hotel Sunshine'
        src='/oceanview.jpg'
        height={100}
        width={200}
        className='h-48 w-72 object-cover rounded-t-xl'
        />
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
            <button className='text-accentText bg-accent p-2 mb-4 rounded w-64'>
                View Details
            </button>
        </div>
    </div>
     {/* Card 3 */} 
    <div className="flex flex-col justify-center shadow-md gap-4 rounded-lg w-72">
        {/* Card Image */}
        <Image
        alt='Hotel Sunshine'
        src='/inwintermonuntain.jpg'
        height={100}
        width={200}
        className='h-48 w-72 object-cover rounded-t-xl'
        />
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
            <button className='text-accentText bg-accent p-2 mb-4 rounded w-64'>
                View Details
            </button>
        </div>
    </div>
     {/* Card 3 */} 
    <div className="flex flex-col justify-center shadow-md gap-4 rounded-lg w-72">
        {/* Card Image */}
        <Image
        alt='Hotel Sunshine'
        src='/downtwon.jpg'
        height={100}
        width={200}
        className='h-48 w-72 object-cover rounded-t-xl'
        />
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
            <button className='text-accentText bg-accent p-2 mb-4 rounded w-64'>
                View Details
            </button>
        </div>
    </div>
    
    </>
    
  )
}

export default Hotels