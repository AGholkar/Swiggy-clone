'use client'
import React from 'react'

export default function ItemsPage() {
  const items = [
    { id: 1, name: 'Paneer Tikka', category: 'Starter', price: '₹280', status: 'Available' },
    { id: 2, name: 'Butter Chicken', category: 'Main Course', price: '₹450', status: 'Available' },
    { id: 3, name: 'Garlic Naan', category: 'Bread', price: '₹60', status: 'Available' },
    { id: 4, name: 'Gulab Jamun', category: 'Dessert', price: '₹120', status: 'Out of Stock' },
    { id: 5, name: 'Veg Biryani', category: 'Main Course', price: '₹320', status: 'Available' },
  ];

  return (
    <div className="w-full max-w-full overflow-hidden space-y-6">
      <div className="flex justify-between items-center px-2">
        <h1 className="text-2xl font-black text-gray-800 tracking-tight">Menu Items</h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-orange-600 transition-all">
          + Add Item
        </button>
      </div>

      {/* ITEM TABLE CONTAINER - This stops the "out of box" issue */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left 'min-w-150'">
            <thead className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50/50">
              <tr>
                <th className="px-8 py-4">Item Name</th>
                <th className="px-8 py-4">Category</th>
                <th className="px-8 py-4">Price</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {items.map((item) => (
                <tr key={item.id} className="text-sm font-bold hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-5 text-gray-800">{item.name}</td>
                  <td className="px-8 py-5 text-gray-500">{item.category}</td>
                  <td className="px-8 py-5 text-gray-900 font-black">{item.price}</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-black ${
                      item.status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-blue-600 hover:underline mr-4">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}