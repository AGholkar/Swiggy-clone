'use client'
import React, { useMemo } from 'react'
import { 
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, 
  Cell, PieChart, Pie, Tooltip 
} from 'recharts'
import ordersData from './data/orders.json' 

// 1. Define types for the StatCard props to satisfy TypeScript
interface StatCardProps {
  title: string;
  value: string | number;
  color: string;
}

export default function SwiggyDashboard() {
  const orders = ordersData.orders;

  // --- 1. BAR CHART LOGIC (Calculating Orders per Day) ---
  const barChartData = useMemo(() => {
    const dayMap: Record<string, number> = { 
      'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 'Fri': 0, 'Sat': 0, 'Sun': 0 
    };

    orders.forEach(order => {
      const dayKey = order.day.substring(0, 3);
      if (dayMap[dayKey] !== undefined) dayMap[dayKey]++;
    });

    return Object.keys(dayMap).map(day => ({
      name: day,
      count: dayMap[day]
    }));
  }, [orders]);

  // --- 2. PIE CHART LOGIC (Calculating Mealtimes) ---
  const pieChartData = useMemo(() => {
    const counts = { Lunch: 0, Dinner: 0, LateNight: 0, Snacks: 0 };

    orders.forEach(order => {
      const hour = parseInt(order.order_time.split(':')[0]);
      if (hour >= 12 && hour < 16) counts.Lunch++;
      else if (hour >= 19 && hour < 23) counts.Dinner++;
      else if (hour >= 23 || hour < 4) counts.LateNight++;
      else counts.Snacks++;
    });

    const total = orders.length || 1;
    return [
      { name: 'Lunch', value: Math.round((counts.Lunch / total) * 100), color: '#FC8019' },
      { name: 'Dinner', value: Math.round((counts.Dinner / total) * 100), color: '#2563EB' },
      { name: 'Late night', value: Math.round((counts.LateNight / total) * 100), color: '#9333EA' },
      { name: 'Snacks', value: Math.round((counts.Snacks / total) * 100), color: '#94A3B8' },
    ];
  }, [orders]);

  return (
    <div className="bg-[#F8F9FB] min-h-screen p-8 space-y-8 font-sans text-gray-900">
      
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Orders" value={orders.length} color="text-orange-600" />
        <StatCard title="Total Revenue" value={`₹${orders.reduce((acc, o) => acc + o.total_amount, 0)}`} color="text-green-600" />
        <StatCard title="Top Restaurant" value="Meghana Foods" color="text-blue-600" />
        <StatCard title="Active Partners" value="9" color="text-purple-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* BAR CHART */}
        <div className="lg:col-span-2 bg-white p-8 'rounded-4xl' shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-6 text-gray-800">Weekly Delivery Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} />
                <Tooltip cursor={{fill: '#F3F4F6'}} />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {barChartData.map((entry, index) => (
                    <Cell key={index} fill={entry.count === Math.max(...barChartData.map(d => d.count)) ? '#FC8019' : '#FED7AA'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PIE CHART */}
        <div className="bg-white p-8 'rounded-4xl' shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-1 text-gray-800">Mealtime Distribution</h3>
          <p className="text-[10px] text-gray-400 font-bold uppercase mb-6 tracking-widest">Live Data</p>
          <div className="h-48 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieChartData} innerRadius={60} outerRadius={80} paddingAngle={4} dataKey="value">
                  {pieChartData.map((entry, index) => <Cell key={index} fill={entry.color} stroke="none" />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-2xl font-black text-gray-800">{orders.length}</div>
          </div>
          <div className="mt-8 space-y-2">
            {pieChartData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-[11px] font-bold">
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}} />
                  {item.name}
                </div>
                <span className="text-gray-800">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="bg-white p-8 'rounded-4xl' shadow-sm border border-gray-100">
        <h3 className="font-bold text-lg mb-6">Recent Order Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-gray-400 text-[10px] font-black uppercase tracking-widest border-b border-gray-50">
              <tr>
                <th className="pb-4">Order</th>
                <th className="pb-4">Restaurant</th>
                <th className="pb-4">Partner</th>
                <th className="pb-4">Payment</th>
                <th className="pb-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-sm font-bold text-gray-600">
              {orders.map((order: any) => (
                <tr key={order.order_id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 text-orange-600 font-black">{order.order_id}</td>
                  <td className="py-4 text-gray-800">{order.restaurant}</td>
                  <td className="py-4 text-gray-500">{order.delivery_partner}</td>
                  <td className="py-4">
                    <span className="bg-gray-100 px-2 py-1 rounded text-[10px]">{order.payment_method}</span>
                  </td>
                  <td className="py-4 text-right text-gray-900 font-black">₹{order.total_amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Fixed StatCard with Types
function StatCard({ title, value, color }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
      <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">{title}</p>
      <p className={`text-2xl font-black ${color}`}>{value}</p>
    </div>
  )
}