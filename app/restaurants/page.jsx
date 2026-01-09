'use client'
import React, { useState, useEffect } from 'react'
import restaurantData from '../data/restaurants.json'
// Path adjusted to reach app/Components/Loader.jsx from app/restaurants/
import Loader from '../Components/Loader' 

export default function RestaurantsPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loader for 1.5 seconds to match your other pages
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Safety: Extract the array from the JSON object
  const restaurants = restaurantData?.restaurants || []

  if (isLoading) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Restaurants</h1>

      <div className="bg-white rounded shadow overflow-x-auto border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-gray-700 font-semibold border-b">Restaurant</th>
              <th className="py-3 px-4 text-gray-700 font-semibold border-b">Cuisine</th>
              <th className="py-3 px-4 text-gray-700 font-semibold border-b text-center">Avg Cost</th>
              <th className="py-3 px-4 text-gray-700 font-semibold border-b text-center">Rating</th>
              <th className="py-3 px-4 text-gray-700 font-semibold border-b text-center">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {restaurants.length > 0 ? (
              restaurants.map((res) => (
                <tr key={res.id} className="hover:bg-gray-50 transition-colors">
                  {/* Restaurant Info with Image */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={res.image_url} 
                        alt={res.name} 
                        className="w-10 h-10 rounded-md object-cover bg-gray-200 shadow-sm"
                        onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150?text=Resto" }}
                      />
                      <div>
                        <div className="font-bold text-gray-900">{res.name}</div>
                        <div className="text-xs text-gray-500">{res.location}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-gray-600">
                    {res.cuisine}
                  </td>

                  <td className="py-3 px-4 font-semibold text-gray-800 text-center">
                    ₹{res.average_cost}
                  </td>

                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center text-orange-500 font-bold">
                      ★ <span className="ml-1 text-gray-700">{res.rating}</span>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="py-3 px-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold inline-block
                      ${res.status === 'Active' || res.status === 'Elite'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'}
                    `}>
                      {res.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-20 text-center text-gray-400">
                  No data found in restaurants.json
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}