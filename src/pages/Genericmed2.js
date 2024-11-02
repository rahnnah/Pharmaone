import React, { useState } from 'react';
import { Search, ChevronDown, MoreVertical, Trash2, Home, Box, BarChart, Settings } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const medicines = [
  { name: 'Augmentin 625 Duo Tablet' },
  { name: 'Azithral 500 Tablet' },
];

export default function GenericMedicineGroup() {
  const [searchTerm, setSearchTerm] = useState('');
  const [newMedicine, setNewMedicine] = useState('');
  const navigate = useNavigate();

  const handleAddMedicineClick = () => {
    navigate('/genericmed3');
  };

  return (
    <div className="flex h-screen bg-[#1F2937] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111827] p-4">
        <div className="flex items-center mb-8">
          <img src="/mainlogo.jpeg" alt="Pharma One logo" className="mr-2 w-8 h-8" />
          <h1 className="text-xl font-bold">Pharma One</h1>
        </div>
        <div className="flex items-center mb-8">
          <img src="/user.jpeg" alt="User avatar" className="rounded-full mr-2 w-10 h-10" />
          <div>
            <p className="font-semibold">Muneer</p>
            <p className="text-xs text-green-400">Super Admin</p>
          </div>
          <MoreVertical size={20} className="ml-auto" />
        </div>
        <nav>
          <ul className="space-y-2">
            <SidebarItem icon={<Home size={20} />} label="Dashboard" to="/dashboard" />
            <SidebarItem icon={<Box size={20} />} label="Inventory">
              <ChevronDown size={16} className="ml-auto" />
            </SidebarItem>
            <li className="pl-6">
              <Link to="/medlist" className="block py-2 text-gray-300 hover:bg-gray-700">
                List of Medicines
              </Link>
            </li>
            <li className="pl-6 bg-[#0D9488] rounded">
              <Link to="#" className="block py-2 text-white">
                Medicine Groups
              </Link>
            </li>
            <SidebarItem icon={<BarChart size={20} />} label="Reports" to="/report" />
            <SidebarItem icon={<Settings size={20} />} label="Configuration" />
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-[#F3F4F6] text-[#1F2937] overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="relative w-[300px]">
            <input
              type="text"
              placeholder="Search for anything here..."
              className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-md"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-8">
              <span>English (US)</span>
              <ChevronDown size={16} className="ml-2" />
            </div>
            <div className="flex justify-end items-center">
  <span className="mr-4">🌞 Good Morning</span>
  <p className="text-sm">14 January 2022 09:45:04</p>
</div>

          </div>
        </header>

        <div className="p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Inventory &gt; Medicine Groups &gt; Generic Medicine (02)</h2>
            <button className="bg-[#EF4444] text-white px-4 py-2 rounded" onClick={handleAddMedicineClick}>+ Add Medicine</button>
          </div>
          <p className="mb-6">Detailed view of a medicine group.</p>

          {/* Search for Medicine */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search for Medicine"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-md"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* Medicines table */}
          <div className="bg-white rounded-lg shadow mb-6">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b border-[#E5E7EB] text-[#6B7280] text-xs uppercase">Medicine Name</th>
                  <th className="text-left p-4 border-b border-[#E5E7EB] text-[#6B7280] text-xs uppercase">Action</th>
                </tr>
              </thead>
              <tbody>
                {medicines.map((medicine, index) => (
                  <tr key={index} className="border-b border-[#E5E7EB]">
                    <td className="p-4">{medicine.name}</td>
                    <td className="p-4">
                      <button className="flex items-center text-[#EF4444]">
                        <Trash2 size={16} className="mr-2" />
                        Remove from Group
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Medicine */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Add Medicine</h3>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Enter Medicine Name or Medicine ID"
                value={newMedicine}
                onChange={(e) => setNewMedicine(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#D1D5DB] rounded-md"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <button className="bg-[#EF4444] text-white px-4 py-2 rounded" onClick={handleAddMedicineClick}>
              + Add Medicine to Group
            </button>
          </div>

          {/* Delete Group button */}
          <button className="flex items-center text-[#EF4444] border border-[#EF4444] px-4 py-2 rounded">
            <Trash2 size={16} className="mr-2" />
            Delete Group
          </button>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active = false, to, children }) {
  return (
    <li className={`flex items-center py-2 px-4 ${active ? 'bg-[#00b9c5] text-white' : 'text-gray-300 hover:bg-gray-700'}`}>
      <Link to={to} className="flex items-center w-full">
        <span className="mr-2">{icon}</span>
        <span>{label}</span>
        {children}
      </Link>
    </li>
  );
}
