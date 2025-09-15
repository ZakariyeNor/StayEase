import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import MobileNav from './MobileNav';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between
        items-center pt-3 pb-3 border-b border-gray-300
        shadow-sm">
        {/* Logo */}
        <div className="font-bold flex pl-6 text-2xl cursor-pointer">
            <FaHome className='mt-1 text-accent text-2xl' /> <h1 className='pl-2 font-semibold font-heading'><Link href='/'>StayEase</Link></h1>
        </div>

        {/* Navigations */}
        <div className="hidden md:flex flex-row gap-8 pr-8 text-1xl font-accent">
            <ul className='flex flex-row gap-6 cursor-pointer pt-1'>
                <Link href='/hotels' className='hover:border-b-2 hover:border-accent text-secondary'>Hotels</Link>
                <Link href='/deals' className='hover:border-b-2 hover:border-accent text-secondary'>Deals</Link>
                <Link href='/destinations' className='hover:border-b-2 hover:border-accent text-secondary'>Destinations</Link>
            </ul>
            <div className="bg-gray-100 w-full flex rounded h-8 cursor-pointer pl-3">
            <FaSearch className='mt-2 text-gray-400'/>
            <input type="search"
                className="w-64 pl-2 bg-slate-100 h-8 rounded-r
                focus:outline-none"
                placeholder='Search for hotels' />
            </div>
        </div>
        <div className="flex flex-col md:hidden">
            <MobileNav />
        </div>
    </div>
  )
}

export default Navbar