import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css';  // Assuming your CSS is here
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Home, Box, BarChart, Settings } from 'lucide-react'
import { ChevronDown } from 'lucide-react';


// Sidebar Item Component
const SidebarItem = ({ label, active = false, to, icon }) => (
  <Link
    to={to}
    className={`flex items-center py-2 px-4 ${active ? 'bg-[#00b9c5] text-white' : 'text-gray-300 hover:bg-gray-700'}`}
  >
    {icon && <span className="mr-2">{icon}</span>}
    <span className="ml-3">{label}</span>
  </Link>
)

// Sidebar Component
const Sidebar = () => (
  <aside className="w-64 bg-[#1e2a38] text-white h-screen">
    {/* Logo Section */}
    <div className="p-4 flex items-center">
      <img src="/mainlogo.jpeg" alt="Pharma One logo" className="mr-2 w-8 h-8" />
      <h1 className="text-xl font-bold">Pharma One</h1>
    </div>
    
    {/* User Section */}
    <div className="p-4 flex items-center">
      <img src="/user.jpeg" alt="User avatar" className="rounded-full mr-2 w-10 h-10" />
      <div>
        <p className="font-semibold">Muneer</p>
        <p className="text-xs text-green-400">Super Admin</p>
      </div>
    </div>
    
    {/* Navigation */}
    <nav className="mt-8">
      <SidebarItem label="Dashboard" to="/" icon={<Home size={20} />} />
      <SidebarItem label="Inventory"icon={<Box size={20} />} />
      {/* Sub-items under Inventory */}
    
      <SidebarItem label="Reports" to="/report"  active icon={<BarChart size={16} />} />
     
    </nav>
  </aside>
)

// Header Component
const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for anything here..."
          className="w-96 pl-10 pr-4 py-2 border rounded-md"
        />
      </div>
      <div className="flex items-center">
        <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
          English (US)
        </button>
        <div className="ml-4 flex items-center">
          <span className="text-sm font-medium">🌞Good Morning</span>
        </div>
        <span className="ml-4 text-sm text-gray-500">14 January 2022 09:45:04</span>
      </div>
    </div>
  </header>
);

// Sales Data
const salesData = [
  { date: '1 Dec', sales: 45 },
  { date: '4 Dec', sales: 85 },
  { date: '8 Dec', sales: 170 },
  { date: '12 Dec', sales: 120 },
  { date: '16 Dec', sales: 60 },
  { date: '20 Dec', sales: 110 },
  { date: '23 Dec', sales: 146 },
  { date: '27 Dec', sales: 155 },
  { date: '31 Dec', sales: 147 },
];

// Custom Tooltip Component for Chart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#4b5563', padding: '4px 8px', borderRadius: '4px', color: 'white' }}>
        <p>{payload[0].value}</p>
      </div>
    );
  }
  return null;
};
const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Header />
        <main className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold">Reports &gt; Sales Report</h1>
              <p className="text-gray-600">Sales related report of the pharmacy.</p>
            </div>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-md border border-gray-300 flex items-center">
              Download Report <ChevronDown size={16} className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 border rounded-md pr-10"
                  value="01 December 2021 - 31 December 2021"
                  readOnly
                />
                <span className="absolute right-2 top-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Medicine Group</label>
              <select className="w-full p-2 border rounded-md">
                <option>- Select Group -</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
              <select className="w-full p-2 border rounded-md">
                <option>- Select User Name -</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row justify-between items-start mt-8">
            <SalesChart />
            <OrderTable />
          </div>
        </main>
      </div>
    </div>
  );
};
// SalesChart Component
const SalesChart = () => (
  <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '60%' }}>
    <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>Sales Made</h2>
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} domain={[0, 200]} ticks={[0, 50, 100, 150, 200]} />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#6b7280', strokeWidth: 1, strokeDasharray: '3 3' }} />
        <Area type="monotone" dataKey="sales" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorSales)" strokeWidth={2} dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

// OrderTable Component
const OrderTable = () => {
  const orderData = [
    { id: '2485855848598', date: '01 Dec 2021 10:25' },
    { id: '2485855848577', date: '02 Dec 2021 18:25' },
    { id: '2485855848563', date: '03 Dec 2021 18:25' },
    { id: '2485855848599', date: '05 Dec 2021 18:25' },
    { id: '2485855848568', date: '09 Dec 2021 18:25' },
    { id: '2485855848567', date: '10 Dec 2021 18:25' },
    { id: '2485855848564', date: '15 Dec 2021 18:25' },
    { id: '2485855848544', date: '21 Dec 2021 18:25' },
  ];

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '20px', marginTop: '2px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '35%' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>Order Data</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Order ID</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((order) => (
            <tr key={order.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{order.id}</td>
              <td className="py-2 px-4 border-b">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Dashboard; // Exporting the main component
