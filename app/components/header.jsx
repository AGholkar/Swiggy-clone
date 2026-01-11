'use client'
import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-orange-600 shadow-md w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed h-20 to md:h-20 and h-16 for mobile to save space */}
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <a href="/" className="cursor-pointer">
              <img
                src="/swiggy.png" 
                /* Fixed: Logo is now smaller on mobile (h-10) and larger on desktop (md:h-14) */
                className="h-10 md:h-14 w-auto object-contain"
                alt="Swiggy"
              />
            </a>
          </div>

          {/* Desktop Navigation - Stays hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 text-white font-medium">
              <li><a href="#" className="hover:text-orange-200 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Items</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Orders</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="text-white text-sm md:text-base font-medium hover:text-orange-100 transition-colors px-2 md:px-3 py-2">
              Login
            </button>
            <button className="bg-white text-orange-600 text-sm md:text-base font-bold px-3 md:px-5 py-1.5 md:py-2 rounded-lg hover:bg-orange-50 transition-all shadow-sm">
              Sign Up
            </button>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Header