import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, Box, BarChart, Settings, ChevronDown, MoreVertical, Search, Trash2, Check } from 'lucide-react'

const medicines = [
  { name: 'Augmentin 625 Duo Tablet', count: 22 },
  { name: 'Azithral 500 Tablet', count: 8 },
  { name: 'Anaptholine Cite', count: 14 },
]

export default function MedForm2() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-100">
          <div className="p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Inventory &gt; Medicine Groups &gt; Generic Medicine (03)</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">+ Add Medicine</button>
            </div>
            <p className="text-gray-600 mb-6">Detailed view of a medicine group.</p>

            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search for Medicine"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 pl-10 border rounded"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Medicine Name <ChevronDown size={16} className="inline ml-1" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      No of Medicines <ChevronDown size={16} className="inline ml-1" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {medicines.map((medicine, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">{medicine.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{medicine.count}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-red-600 hover:text-red-800 flex items-center">
                          <Trash2 size={16} className="mr-1" />
                          Remove from Group
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
              <Trash2 size={16} className="mr-2" />
              Delete Group
            </button>

            {showSuccessMessage && (
              <div className="mt-4 bg-green-500 text-white p-3 rounded flex items-center">
                <Check size={16} className="mr-2" />
                Medicine Added to Group
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="w-64 bg-[#111827] text-white h-screen p-4">
      <div className="flex items-center mb-8">
      <img src="/mainlogo.jpeg" alt="Pharma One logo" className="mr-2 w-8 h-8" /> {/* Set a fixed width and height for logo */}
        <h1 className="text-xl font-bold">Pharma One</h1>
      </div>
      <div className="flex items-center mb-8">
      <img src="/user.jpeg" alt="User avatar" className="rounded-full mr-2 w-10 h-10" /> {/* Set a fixed width and height for user avatar */}
        <div>
          <p className="font-semibold">Muneer</p>
          <p className="text-xs text-[#4ADE80]">Super Admin</p>
        </div>
        <MoreVertical size={20} className="ml-auto" />
      </div>
      <nav>
        <ul className="space-y-2">
          <SidebarItem icon={<Home size={20} />} label="Dashboard" to="/" />
          <SidebarItem icon={<Box size={20} />} label="Inventory">
            <ChevronDown size={16} className="ml-auto" />
          </SidebarItem>
          <SidebarSubItem label="List of Medicines" to="/medlist" />
          <SidebarSubItem label="Medicine Groups" to="/medgroup" active />
          <SidebarItem icon={<BarChart size={20} />} label="Reports" to="/report" />
          <SidebarItem icon={<Settings size={20} />} label="Configuration" to="/config" />
        </ul>
      </nav>
    </aside>
  )
}

function SidebarItem({ icon, label, to, active, children }) {
  return (
    <li className={`flex items-center p-2 ${active ? 'bg-[#0D9488] rounded' : ''}`}>
      <Link to={to || '#'} className="flex items-center w-full text-white">
        <span className="mr-2">{icon}</span>
        <span>{label}</span>
        {children}
      </Link>
    </li>
  )
}

function SidebarSubItem({ label, to, active }) {
  return (
    <li className={`pl-8 py-2 ${active ? 'bg-[#0D9488] rounded' : ''}`}>
      <Link to={to} className="text-white">
        {label}
      </Link>
    </li>
  )
}

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search for anything here..."
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <div className="flex items-center">
          <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
            English (US)
            <ChevronDown size={16} className="ml-1" />
          </button>
          <div className="ml-4 flex items-center">
            <span className="bg-yellow-400 rounded-full w-2 h-2 mr-2"></span>
            <span className="text-sm font-medium">🌞Good Morning</span>
          </div>
          <span className="ml-4 text-sm text-gray-500">14 January 2022 09:45:04</span>
        </div>
      </div>
    </header>
  )
}