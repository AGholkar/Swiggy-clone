'use client'
import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-orange-600 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* INCREASED NAVBAR HEIGHT from h-16 to h-20 */}
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <a href="/" className="cursor-pointer">
              <img
                src="/swiggy.png" 
                /* CHANGED h-10 to h-14 (3.5rem / 56px) */
                className="h-14 w-auto object-contain"
                alt="Swiggy"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 text-white font-medium">
              <li>
                <a href="#" className="hover:text-orange-200 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-200 transition-colors">Items</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-200 transition-colors">Orders</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-200 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-white font-medium hover:text-orange-100 transition-colors px-3 py-2">
              Login
            </button>
            <button className="bg-white text-orange-600 font-bold px-5 py-2 rounded-lg hover:bg-orange-50 transition-all shadow-sm">
              Sign Up
            </button>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Header