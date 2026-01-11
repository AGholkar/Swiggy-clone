'use client'
import React from 'react'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border">
          Live Data: Jan 2026
        </div>
      </div>

      {/* 1. Responsive Cards Grid */}
      {/* grid-cols-1 for mobile, sm:2 for small tablets, lg:4 for desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Orders Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Orders</p>
          <p className="text-3xl font-black text-orange-600 mt-1">10</p>
        </div>

        {/* Total Revenue Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Revenue</p>
          <p className="text-3xl font-black text-green-600 mt-1">₹5300</p>
        </div>

        {/* Top Restaurant Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Top Restaurant</p>
          <p className="text-xl font-bold text-blue-600 mt-1 truncate">Meghana Foods</p>
        </div>

        {/* Active Partners Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Partners</p>
          <p className="text-3xl font-black text-purple-600 mt-1">9</p>
        </div>

      </div>

      {/* 2. Charts / Trends Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 'min-h-75'">
          <h2 className="font-bold text-gray-700 mb-4">Weekly Delivery Trend</h2>
          {/* Your Chart Component would go here */}
          <div className="h-40 bg-gray-50 rounded-lg flex items-end justify-around p-4">
            <div className="w-8 bg-orange-200 h-1/2 rounded-t-sm"></div>
            <div className="w-8 bg-orange-300 h-1/3 rounded-t-sm"></div>
            <div className="w-8 bg-orange-400 h-3/4 rounded-t-sm"></div>
            <div className="w-8 bg-orange-600 h-full rounded-t-sm"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 'min-h-75'">
          <h2 className="font-bold text-gray-700 mb-4">Mealtime Distribution</h2>
          {/* Your Pie Chart Component would go here */}
          <div className="flex justify-center items-center h-40">
            <div className="w-32 h-32 rounded-full border-8 border-orange-500 border-t-gray-100 animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </div>
  )
}