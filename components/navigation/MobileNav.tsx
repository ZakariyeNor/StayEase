'use client';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
        <div className="relative">
            <div className='text-3xl text-secondary cursor-pointer pr-5'>
                {isOpen ? (
                    <FaTimes onClick={toggleMenu} />
                ) : (
                    <FaBars onClick={toggleMenu} />
                )}
            </div>
            {isOpen && (
                <div className="absolute top-12 right-0 bg-white w-56 shadow-md rounded-lg p-4 z-10">
                    <ul className="flex flex-col gap-4 font-accent">
                        <li className="text-secondary hover:text-accent cursor-pointer">Hotels</li>
                        <li className="text-secondary hover:text-accent cursor-pointer">Deals</li>
                        <li className="text-secondary hover:text-accent cursor-pointer">Destinations</li>
                    </ul>
                </div>
            )}
        </div>
    </>
    
  )
}

export default MobileNav