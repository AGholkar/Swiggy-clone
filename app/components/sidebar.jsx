'use client'

import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    /* Change: w-16 for mobile, md:w-64 for desktop. 
       Added h-full and flex-shrink-0 to keep it from squashing.
    */
    <aside className="w-16 md:w-64 bg-white text-orange-600 min-h-screen border-r border-gray-100 shadow-sm flex flex-col justify-between shrink-0">
      
      <div>
        {/* Logo Section */}
        <div className="p-4 md:p-6 flex items-center border-b border-gray-50 justify-center md:justify-start">
          <img 
            src="/swiggy2.png.jpg" 
            className="h-8 object-contain" 
            alt="L" 
          />
          {/* Hide "Swiggy" text on mobile */}
          <span className="hidden md:inline text-2xl font-black tracking-tight text-orange-600 uppercase ml-3">
            Swiggy
          </span>
        </div>

        <nav className="mt-6">
          <ul className="space-y-1">
            {[
              { name: 'Dashboard', href: '/', icon: '🏠' },
              { name: 'Orders', href: '/orders', icon: '📦' },
              { name: 'Items', href: '/items', icon: '🍔' },
              { name: 'Restaurants', href: '/restaurants', icon: '🏢' },
              { name: 'Customers', href: '/customer', icon: '👥' },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="flex items-center justify-center md:justify-start px-4 md:px-6 py-3 font-bold hover:bg-orange-50 transition-colors">
                  {/* Show icon only on mobile, or keep it as placeholder */}
                  <span className="text-xl md:text-base">{item.icon}</span>
                  {/* Hide label text on mobile */}
                  <span className="hidden md:inline ml-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Upgrade Section: Hide completely on mobile to save space */}
      <div className="hidden md:block p-4 mb-4">
        <div className="bg-white border-2 border-orange-100 rounded-3xl p-5 text-center shadow-sm">
          <h3 className="text-orange-600 text-xl font-black italic">50% OFF</h3>
          <p className="text-gray-400 text-[10px] font-bold mt-1 uppercase">Premium Plan</p>
          <button className="mt-4 w-full bg-orange-600 text-white py-2.5 rounded-xl text-xs font-black hover:bg-orange-700 transition-all">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar