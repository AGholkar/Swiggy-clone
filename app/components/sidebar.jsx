'use client'

import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    // bg-white for the background and text-orange-600 for the global text color
    <aside className="w-64 bg-white text-orange-600 min-h-screen border-r border-gray-100 shadow-sm flex flex-col justify-between">
      
      <div>
        {/* Logo Section: White bg, Orange text */}
       <div className="p-6 flex items-center border-b border-gray-50">
  {/* Local logo image */}
  <img 
    src="/swiggy2.png.jpg" 
    className="h-8 me-3 object-contain" 
    alt="Swiggy Logo" 
  />
  {/* Plane text: removed 'italic' class */}
  <span className="text-2xl font-black tracking-tight text-orange-600 uppercase">
    Swiggy
  </span>
</div>

        <nav className="mt-6">
          <ul className="space-y-1">
            <li>
              <Link href="/" className="block px-6 py-3 font-bold hover:bg-orange-50 transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/orders" className="block px-6 py-3 font-bold hover:bg-orange-50 transition-colors">
                Orders
              </Link>
            </li>
            <li>
              <Link href="/items" className="block px-6 py-3 font-bold hover:bg-orange-50 transition-colors">
                Items
              </Link>
            </li>
            <li>
               <Link href="/restaurants" className="block px-6 py-3 font-bold hover:bg-orange-50 transition-colors">
                Restaurants
               </Link>
            </li>
            <li>
              <Link href="/customer" className="block px-6 py-3 font-bold hover:bg-orange-50 transition-colors">
                Customers
              </Link>
            </li> 
          </ul>
        </nav>
      </div>

      {/* Optional: Bottom Upgrade Section styled for White/Orange theme */}
      <div className="p-4 mb-4">
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