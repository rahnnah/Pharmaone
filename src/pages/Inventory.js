import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Box, BarChart, Settings, Search, ChevronDown, MoreVertical } from 'lucide-react';

const Sidebar = () => (
  <aside className="w-64 bg-[#1e2a38] text-white h-screen">
    <div className="p-4 flex items-center">
      <img src="/mainlogo.jpeg" alt="Pharma One logo" className="mr-2 w-8 h-8" />
      <h1 className="text-xl font-bold">Pharma One</h1>
    </div>
    
    <div className="p-4 flex items-center">
      <img src="/user.jpeg" alt="User avatar" className="rounded-full mr-2 w-10 h-10" />
      <div>
        <p className="font-semibold">Muneer</p>
        <p className="text-xs text-green-400">Super Admin</p>
      </div>
      <MoreVertical size={20} className="ml-auto" />
    </div>
    
    <nav className="mt-8">
      <SidebarItem label="Dashboard" to="/" icon={<Home size={20} />} />
      <SidebarItem label="Inventory" active icon={<Box size={20} />} />
      <nav className="mt-2 ml-8">
        <SidebarItem label="List of Medicines" to="/medlist" />
        <SidebarItem label="Medicine Groups" to="/medgroup" />
      </nav>
      <SidebarItem label="Reports" to="/report" icon={<BarChart size={20} />} />
      <SidebarItem label="Configuration" icon={<Settings size={20} />} />
    </nav>
  </aside>
);

const SidebarItem = ({ label, active = false, to, icon }) => (
  <Link
    to={to}
    className={`flex items-center py-2 px-4 ${active ? 'bg-[#00b9c5] text-white' : 'text-gray-300 hover:bg-gray-700'}`}
  >
    {icon && <span className="mr-2">{icon}</span>}
    <span className="ml-3">{label}</span>
  </Link>
);

const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="relative flex items-center">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search for anything here..."
          className="w-96 pl-10 pr-4 py-2 border rounded-md"
        />
      </div>
      <div className="flex items-center">
        <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
          English (US)
          <ChevronDown size={16} className="ml-1" />
        </button>
        <div className="ml-4 flex items-center">
          <span className="text-sm font-medium">🌞Good Morning</span>
        </div>
        <span className="ml-4 text-sm text-gray-500">14 January 2022 09:45:04</span>
      </div>
    </div>
  </header>
);

const InventoryCard = ({ title, value, actionText, icon, bgColor, textColor }) => (
  <div className={`${bgColor} rounded-lg p-6 flex flex-col justify-between`}>
    <div className="flex justify-between items-start mb-4">
      <span className={`text-4xl font-bold ${textColor}`}>{value}</span>
      {icon}
    </div>
    <div>
      <h3 className={`text-lg font-semibold mb-4 ${textColor}`}>{title}</h3>
      <button className={`flex items-center text-sm font-medium ${textColor} hover:underline`}>
        {actionText}
      </button>
    </div>
  </div>
);

const MedForm2 = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Inventory</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center">
              <span className="mr-2">+</span> Add New Item
            </button>
          </div>
          <p className="text-gray-600 mb-6">List of medicines available for sales.</p>
          <div className="grid grid-cols-3 gap-6">
            <InventoryCard 
              title="Medicines Available" 
              value="298" 
              actionText="View Full List >" 
              icon={<Box size={24} className="text-blue-500" />}
              bgColor="bg-blue-100" 
              textColor="text-blue-800" 
            />
            <InventoryCard 
              title="Medicine Groups" 
              value="02" 
              actionText="View Groups >" 
              icon={<Box size={24} className="text-green-500" />}
              bgColor="bg-green-100" 
              textColor="text-green-800" 
            />
            <InventoryCard 
              title="Medicine Shortage" 
              value="10" 
              actionText="Resolve Now >" 
              icon={<Box size={24} className="text-red-500" />}
              bgColor="bg-red-100" 
              textColor="text-red-800" 
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MedForm2;