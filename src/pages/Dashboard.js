import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Box, BarChart, Settings, Search, ChevronDown, ChevronRight } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <Header />

        {/* Dashboard content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <p className="mb-6 text-gray-600">A quick data overview of the inventory.</p>

          {/* Dashboard cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard title="Inventory Status" value="Good" color="bg-green-100 text-green-800" />
            <DashboardCard title="Revenue" value="Rs. 8,55,875" subtitle="Jan 2022" color="bg-yellow-100 text-yellow-800" />
            <DashboardCard title="Medicines Available" value="298" color="bg-blue-100 text-blue-800" />
            <DashboardCard title="Medicine Shortage" value="10" color="bg-red-100 text-red-800" />
          </div>

          {/* Additional sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Section title="Inventory" leftValue="298" leftLabel="Total no of Medicines" rightValue="24" rightLabel="Medicine Groups" />
            <Section title="Quick Report" leftValue="70,856" leftLabel="Qty of Medicines Sold" rightValue="5,288" rightLabel="Invoices Generated" />
            <Section title="My Pharmacy" leftValue="04" leftLabel="Total no of Suppliers" rightValue="05" rightLabel="Total no of Users" />
            <Section title="Customers" leftValue="845" leftLabel="Total no of Customers" rightValue="Adalimumab" rightLabel="Frequently bought item" />
          </div>
        </div>
      </main>
    </div>
  )
}

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
      <SidebarItem label="Dashboard" to="/" active icon={<Home size={20} />} />
      <SidebarItem label="Inventory" to="/inventory" icon={<Box size={20} />} />

      {/* Sub-items under Inventory */}
      <div className="mt-2 ml-4">
        <SidebarItem label="List of Medicines" to="/medlist" />
        <SidebarItem label="Medicine Groups" to="/medgroup" />
      </div>

      <SidebarItem label="Reports" to="/report" icon={<BarChart size={16} />} />
      <SidebarItem label="Configuration" to="/config" icon={<Settings size={20} />} />
    </nav>
  </aside>
)

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
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
          English (US)
          <ChevronDown size={16} className="ml-1" />
        </button>
        <div className="flex items-center">
          
          <span className="text-sm font-medium">🌞Good Morning</span>
        </div>
        <span className="text-sm text-gray-500">14 January 2022 09:45:04</span>
      </div>
    </div>
  </header>
)

// Dashboard Card Component
function DashboardCard({ title, value, subtitle, color }) {
  return (
    <div className={`p-4 rounded-lg ${color}`}>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold mb-1">{value}</p>
      {subtitle && <p className="text-sm mb-2">{subtitle}</p>}
      <a href="#" className="text-sm flex items-center">
        View Detailed Report <ChevronRight size={16} className="ml-1" />
      </a>
    </div>
  )
}

// Section Component
function Section({ title, leftValue, leftLabel, rightValue, rightLabel }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">{title}</h3>
        <a href="#" className="text-sm text-blue-600 flex items-center">
          Go to {title} <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-bold">{leftValue}</p>
          <p className="text-sm text-gray-600">{leftLabel}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">{rightValue}</p>
          <p className="text-sm text-gray-600">{rightLabel}</p>
        </div>
      </div>
    </div>
  )
}