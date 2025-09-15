import React from 'react';
import Link from 'next/link';

const now = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-zinc-700 mt-3 p-4 text-accentText w-full">
        <div className="flex flex-col flex-wrap sm:flex-row p-9 w-full justify-around">
          <div >
            <h2>StayEase</h2>
            <p className="text-gray-400 text-sm">Your trusted partnerin <br />finding the perfect stay</p>
          </div>
          <div >
            <h2>Quick Liks</h2>
            <ul>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white">Hotels</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white">Deals</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white">Destinations</Link>
              </li>
            </ul>
          </div>
          <div >
            <h2>Company</h2>
            <ul>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white">Support</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white">List Your Property</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white">Offers</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white">Find Client</Link>
              </li>
            </ul>
          </div>
          <div >
            <h2>Settings</h2>
            <ul>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white">USD</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white">EN</Link>
              </li>
            </ul>
          </div>
          <div >
            <h2>Account</h2>
            <ul>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white">Signin</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white">Register</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-zinc-500"></div>
        <div className="mt-3 text-gray-400 text-sm text-body items-center justify-center mx-auto text-center">
          <p>&copy; {now} StayEase.All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer