import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronDown, ChevronRight, Home, Box, Settings, BarChart, MoreVertical } from 'lucide-react';

// Medicine groups data
const medicineGroups = [
  { name: 'Generic Medicine', count: 2, path: '/genericmed' },
  { name: 'Diabetes', count: 32, path: '/diabetesmed' },
];

// Sidebar Item Component
const SidebarItem = ({ label, active = false, to, icon }) => (
  <Link
    to={to}
    className={`flex items-center py-2 px-4 ${active ? 'bg-[#00b9c5] text-white' : 'text-gray-300 hover:bg-gray-700'}`}
  >
    {icon && <span className="mr-2">{icon}</span>}
    <span className="ml-3">{label}</span>
  </Link>
);

// Header Component
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

// Main Medicine Groups Component
export default function MedicineGroups() {
  const navigate = useNavigate();

  const handleViewDetails = (path) => {
    navigate(path);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
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
          <SidebarItem label="Inventory" icon={<Box size={20} />} />
          <nav className="mt-2 ml-8">
            <SidebarItem label="List of Medicines" to="/medlist" />
            <SidebarItem label="Medicine Groups" active to="/medicine-groups" />
          </nav>
          <SidebarItem label="Reports" to="/report" icon={<BarChart size={20} />} />
          <SidebarItem label="Configuration" to="/settings" icon={<Settings size={20} />} />
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 p-8 overflow-y-auto">
          <header className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Inventory &gt; Medicine Groups ({medicineGroups.length})</h2>
          </header>
          <p className="mb-4">List of medicines groups.</p>

          {/* Search and Add New Group */}
          <div className="flex justify-between items-center mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Medicine Groups..."
                className="bg-white rounded-full py-2 px-4 pr-10 w-80"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
            <button className="bg-red-600 text-white py-2 px-4 rounded">
              <span className="mr-2">+</span> Add New Group
            </button>
          </div>

          {/* Medicine Groups table */}
          <div className="bg-white rounded shadow">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="text-left py-3 px-4">Group Name <ChevronDown size={16} className="inline" /></th>
                  <th className="text-left py-3 px-4">No of Medicines <ChevronDown size={16} className="inline" /></th>
                  <th className="text-left py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {medicineGroups.map((group, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4">{group.name}</td>
                    <td className="py-3 px-4">{group.count}</td>
                    <td className="py-3 px-4">
                      <a
                        href="#"
                        onClick={() => handleViewDetails(group.path)}
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        View Full Details <ChevronRight size={16} className="ml-2" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
