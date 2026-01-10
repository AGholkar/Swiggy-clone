'use client'
import React, { useState, useEffect } from 'react'
import ordersData from '../data/orders.json'
// Fixed the typo: changed '../components/loaderoader' to '../components/loader'
import Loader from '../components/loader'

export default function OrdersPage() {
  const [isLoading, setIsLoading] = useState(true)
  const orders = ordersData.orders

  // Simulate data fetching logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Matches your 1.5s loading duration
    return () => clearTimeout(timer)
  }, [])

  // If loading, show the Loader component centered
  if (isLoading) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Orders</h1>

      <div className="bg-white rounded shadow overflow-x-auto border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 font-semibold text-gray-700 border-b">Order ID</th>
              <th className="py-3 px-4 font-semibold text-gray-700 border-b">Customer</th>
              <th className="py-3 px-4 font-semibold text-gray-700 border-b">Restaurant</th>
              <th className="py-3 px-4 font-semibold text-gray-700 border-b">Amount</th>
              <th className="py-3 px-4 font-semibold text-gray-700 border-b">Payment</th>
              <th className="py-3 px-4 font-semibold text-gray-700 border-b">Status</th>
              <th className="py-3 px-4 font-semibold text-gray-700 border-b">Delivery Partner</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {orders.map(order => (
              <tr key={order.order_id} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 font-medium text-gray-900">{order.order_id}</td>

                <td className="py-3 px-4">
                  <div className="font-medium text-gray-800">{order.customer_name}</div>
                  <div className="text-sm text-gray-500">{order.customer_phone}</div>
                </td>

                <td className="py-3 px-4">
                  <div className="text-gray-800">{order.restaurant}</div>
                  <div className="text-sm text-gray-500">{order.restaurant_location}</div>
                </td>

                <td className="py-3 px-4 font-semibold text-gray-900">₹{order.total_amount}</td>

                <td className="py-3 px-4 text-gray-600 text-sm">{order.payment_method}</td>

                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold
                    ${order.order_status === 'Delivered'
                      ? 'bg-green-100 text-green-700'
                      : order.order_status === 'On the way'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'}
                  `}>
                    {order.order_status}
                  </span>
                </td>

                <td className="py-3 px-4">
                  {order.delivery_partner ? (
                    <>
                      <div className="font-medium text-gray-800">{order.delivery_partner.name}</div>
                      <div className="text-xs text-gray-500">{order.delivery_partner.vehicle}</div>
                    </>
                  ) : (
                    <span className="text-gray-400 italic text-sm">Not Assigned</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}