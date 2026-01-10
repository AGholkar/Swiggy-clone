'use client'
import React, { useState, useEffect } from 'react'
// Fixed path: Two dots (..) to go up to 'app', then into 'data'
import customerData from '../data/customer.json'
// FIX: Changed '../Components/Loader' to '../components/loader' to match your file system
import Loader from '../components/loader'

export default function CustomerPage() {
  const [isLoading, setIsLoading] = useState(true)

  // Matching your 1.5s loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Safety check: Accessing 'customers' array inside the JSON
  const customers = customerData?.customers || []

  // Helper for status colors
  function getStatusStyles(status) {
    switch (status) {
      case 'Elite': return 'bg-purple-100 text-purple-700 font-bold';
      case 'Active': return 'bg-green-100 text-green-700 font-bold';
      case 'New': return 'bg-blue-100 text-blue-700 font-bold';
      default: return 'bg-gray-100 text-gray-700';
    }
  }

  if (isLoading) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Customers</h1>

      <div className="bg-white rounded shadow overflow-x-auto border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-gray-700 font-semibold">Name</th>
              <th className="py-3 px-4 text-gray-700 font-semibold">Contact Info</th>
              <th className="py-3 px-4 text-gray-700 font-semibold">Location</th>
              <th className="py-3 px-4 text-gray-700 font-semibold">Total Orders</th>
              <th className="py-3 px-4 text-gray-700 font-semibold">Member Since</th>
              <th className="py-3 px-4 text-gray-700 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {customers.length > 0 ? (
              customers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  
                  {/* Name with Avatar */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="font-medium text-gray-900">{user.name}</div>
                    </div>
                  </td>

                  {/* Contact Info */}
                  <td className="py-4 px-4 text-sm">
                    <div className="text-gray-700 font-medium">{user.phone}</div>
                    <div className="text-gray-400 text-xs">{user.email}</div>
                  </td>

                  <td className="py-4 px-4 text-gray-500 text-sm">
                    {user.location}
                  </td>

                  <td className="py-4 px-4 font-semibold text-gray-900">
                    {user.total_orders}
                  </td>

                  <td className="py-4 px-4 text-gray-500 text-sm">
                    {user.member_since}
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider
                      ${getStatusStyles(user.status)}
                    `}>
                      {user.status}
                    </span>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-10 text-center text-gray-500">
                  No customer data found. Check data/customer.json
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}