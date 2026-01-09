'use client'
import React from 'react'
import itemsData from '../data/items.json'

export default function MenuPage() {
  const menuItems = itemsData.menu;

  return (
    <div className="p-8 bg-white 'rounded-4xl' shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-black text-gray-800">{itemsData.restaurant}</h2>
          <p className="text-gray-400 font-bold text-sm">{itemsData.location}</p>
        </div>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-xl font-bold text-sm">
          Add New Item
        </button>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-400 text-[10px] font-black uppercase tracking-widest border-b border-gray-50">
            <th className="pb-4">Item</th>
            <th className="pb-4">Category</th>
            <th className="pb-4">Price</th>
            <th className="pb-4">Rating</th>
            <th className="pb-4">Type</th>
          </tr>
        </thead>
        <tbody className="text-sm font-bold">
          {menuItems.map((item) => (
            <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <td className="py-4 flex items-center gap-4">
                {/* IMAGE FIX: Ensure src starts with / */}
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-100 'shrink-0'">
                  <img 
                    src={item.image_url} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = "/swiggy.png" }} // Fallback to Swiggy logo if link breaks
                  />
                </div>
                <div>
                  <p className="text-gray-800">{item.name}</p>
                  <p className="text-[10px] text-gray-400 font-medium truncate w-48">{item.description}</p>
                </div>
              </td>
              <td className="py-4 text-gray-500">{item.category}</td>
              <td className="py-4 text-gray-800">₹{item.price}</td>
              <td className="py-4">
                <span className="flex items-center gap-1 text-orange-500">
                  ★ {item.rating}
                </span>
              </td>
              <td className="py-4">
                <div className={`w-4 h-4 border-2 flex items-center justify-center ${item.is_veg ? 'border-green-600' : 'border-red-600'}`}>
                   <div className={`w-2 h-2 rounded-full ${item.is_veg ? 'bg-green-600' : 'bg-red-600'}`} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}