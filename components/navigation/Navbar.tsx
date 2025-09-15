import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between
        items-center pt-3 pb-3 border-b border-gray-300
        shadow-sm">
        {/* Logo */}
        <div className="font-bold flex pl-6 text-2xl cursor-pointer">
            <FaHome className='mt-1 text-accent text-2xl' /> <h1 className='pl-2 font-semibold font-heading'>StayEase</h1>
        </div>

        {/* Navigations */}
        <div className="flex flex-row gap-8 pr-8 text-1xl font-accent">
            <ul className='flex flex-row gap-6 cursor-pointer pt-1'>
                <li className='hover:border-b-2 hover:border-accent text-secondary'>Hotels</li>
                <li className='hover:border-b-2 hover:border-accent text-secondary'>Deals</li>
                <li className='hover:border-b-2 hover:border-accent text-secondary'>Destinations</li>
            </ul>
            <div className="bg-gray-100 w-full flex rounded h-8 cursor-pointer pl-3">
            <FaSearch className='mt-2 text-gray-400'/>
            <input type="search"
                className="w-64 pl-2 bg-slate-100 h-8 rounded-r
                focus:outline-none"
                placeholder='Search for hotels' />
            </div>
        </div>
    </div>
  )
}

export default Navbar