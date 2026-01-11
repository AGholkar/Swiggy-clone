'use client'
import React from 'react'
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';

export default function Dashboard() {
  // Exact data from your images
  const trendData = [
    { name: 'Mon', count: 2 },
    { name: 'Tue', count: 1 },
    { name: 'Wed', count: 1 },
    { name: 'Thu', count: 3 },
    { name: 'Fri', count: 1 },
    { name: 'Sat', count: 1 },
    { name: 'Sun', count: 1 },
  ];

  const mealData = [
    { name: 'Lunch', value: 30, color: '#f97316' },
    { name: 'Dinner', value: 40, color: '#2563eb' },
    { name: 'Late night', value: 10, color: '#8b5cf6' },
    { name: 'Snacks', value: 20, color: '#cbd5e1' },
  ];

  const orders = [
    { id: 'SWG1001', restaurant: 'Flavor Junction', partner: 'Ramesh Patil', payment: 'UPI', amount: '₹500' },
    { id: 'SWG1002', restaurant: 'Spice Route', partner: 'Suresh Naik', payment: 'Card', amount: '₹630' },
    { id: 'SWG1003', restaurant: 'Urban Tandoor', partner: 'None', payment: 'COD', amount: '₹480' },
    { id: 'SWG1004', restaurant: 'Coastal Curry', partner: 'Mahesh Korgaonkar', payment: 'UPI', amount: '₹450' },
    { id: 'SWG1005', restaurant: 'Bistro 57', partner: 'Sunil Verma', payment: 'UPI', amount: '₹210' },
    { id: 'SWG1006', restaurant: 'The Bowl Company', partner: 'Ravi Kumar', payment: 'Card', amount: '₹890' },
    { id: 'SWG1007', restaurant: 'Leon Grill', partner: 'Deepak Singh', payment: 'UPI', amount: '₹350' },
    { id: 'SWG1008', restaurant: 'Truffles', partner: 'Pawan L.', payment: 'COD', amount: '₹150' },
    { id: 'SWG1009', restaurant: 'Empire Restaurant', partner: 'Vijay M.', payment: 'Card', amount: '₹1100' },
    { id: 'SWG1010', restaurant: 'Meghana Foods', partner: 'Sagar P.', payment: 'UPI', amount: '₹540' },
  ];

  return (
    <div className="w-full space-y-6 pb-10">
      
      {/* 1. Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'TOTAL ORDERS', val: '10', color: 'text-orange-600' },
          { label: 'TOTAL REVENUE', val: '₹5300', color: 'text-green-600' },
          { label: 'TOP RESTAURANT', val: 'Meghana Foods', color: 'text-blue-600' },
          { label: 'ACTIVE PARTNERS', val: '9', color: 'text-purple-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
            <p className={`text-2xl font-black mt-2 ${stat.color}`}>{stat.val}</p>
          </div>
        ))}
      </div>

      {/* 2. Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Weekly Delivery Trend (Rectangle) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 'min-h-100'">
          <h2 className="text-xl font-bold text-gray-800 mb-8">Weekly Delivery Trend</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trendData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold', fill: '#94a3b8'}} dy={10} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="count" radius={[8, 8, 8, 8]}>
                  {trendData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.count === 3 ? '#f97316' : '#ffedd5'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Mealtime Distribution (Square) */}
        <div className="lg:col-span-1 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 'min-h-100' flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Mealtime Distribution</h2>
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-8">LIVE DATA</p>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={mealData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {mealData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-black text-gray-800">10</div>
            </div>
            <div className="w-full mt-6 space-y-2">
              {mealData.map((item) => (
                <div key={item.name} className="flex justify-between items-center text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-gray-800">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Recent Order Details */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <h2 className="p-8 text-xl font-bold text-gray-800">Recent Order Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left 'min-w-175'">
            <thead className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50/50">
              <tr>
                <th className="px-8 py-4">Order</th>
                <th className="px-8 py-4">Restaurant</th>
                <th className="px-8 py-4">Partner</th>
                <th className="px-8 py-4">Payment</th>
                <th className="px-8 py-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <tr key={order.id} className="text-sm font-bold hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-5 text-orange-600">{order.id}</td>
                  <td className="px-8 py-5 text-gray-800">{order.restaurant}</td>
                  <td className="px-8 py-5 text-gray-500">{order.partner}</td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 bg-gray-100 text-gray-400 rounded text-[9px] uppercase font-black">
                      {order.payment}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right text-gray-900 font-black">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}