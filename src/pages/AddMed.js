import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Home, Box, BarChart, Settings, ChevronRight, MoreVertical } from 'lucide-react'
import '../App.css'

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
      <SidebarItem label="Inventory" to="/inventory" icon={<Box size={20} />} />
      {/* Sub-items under Inventory */}
      <nav className="mt-2 ml-4">
        <SidebarItem label="List of Medicines" to="/medlist" active /> {/* Set active here */}
        <SidebarItem label="Medicine Groups" to="/medgroup" />
      </nav>
      <SidebarItem label="Reports" to="/report" icon={<BarChart size={16} />} />
      <SidebarItem label="Configuration" to="/config" icon={<Settings size={20} />} />
    </nav>
  </aside>
)


export default function Component() {
  const navigate = useNavigate()

  const handleMedGroupClick = () => {
    navigate('/medgroup')
  }

  return (
    <div className="flex h-screen bg-[#0e1320] text-white font-sans">
      <Sidebar />
      <main className="flex-1 bg-[#f0f4f7]">
        <header className="bg-white p-4 flex justify-end items-center">
          <div className="text-[#1e2a38]">
            <span className="mr-2">🌞 Good Morning</span>
            <span>14 January 2022 09:45</span>
          </div>
        </header>
        <div className="p-6">
          <div className="text-[#1e2a38] mb-4">
            <span>Inventory</span>
            <ChevronRight className="inline mx-1" />
            <span>List of Medicines</span>
            <ChevronRight className="inline mx-1" />
            <span className="font-semibold">Add New Medicine</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-[#1e2a38]">Add New Medicine</h3>
              <MoreVertical className="text-gray-400" />
            </div>
            <p className="text-sm text-gray-500 mb-6">*All fields are mandatory, except mentioned as (optional).</p>
            <form className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Medicine Name</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Medicine ID</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Medicine Group</label>
                <select className="w-full p-2 border rounded">
                  <option>- Select Group -</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity in Number</label>
                <input type="number" className="w-full p-2 border rounded" />
              </div>
            </form>
            <button className="mt-6 bg-[#f44336] text-white py-2 px-4 rounded">Save Details</button>
          </div>
        </div>
      </main>
    </div>
  )
}
