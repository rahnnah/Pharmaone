import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, ChevronDown, MoreVertical, ChevronRight, Filter, Home, Box, BarChart, Settings } from 'lucide-react'

const medicines = [
  { name: 'Augmentin 625 Duo Tablet', id: 'D06ID232435454', group: 'Generic Medicine', stock: 350 },
  { name: 'Azithral 500 Tablet', id: 'D06ID232435451', group: 'Generic Medicine', stock: 20 },
  { name: 'Ascoril LS Syrup', id: 'D06ID232435452', group: 'Diabetes', stock: 85 },
  { name: 'Azee 500 Tablet', id: 'D06ID232435450', group: 'Generic Medicine', stock: 75 },
  { name: 'Allegra 120mg Tablet', id: 'D06ID232435455', group: 'Diabetes', stock: 44 },
  { name: 'Alex Syrup', id: 'D06ID232435456', group: 'Generic Medicine', stock: 65 },
  { name: 'Amoxyclav 625 Tablet', id: 'D06ID232435457', group: 'Generic Medicine', stock: 150 },
  { name: 'Avil 25 Tablet', id: 'D06ID232435458', group: 'Generic Medicine', stock: 270 },
]

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
)

export default function Inventory() {
  const navigate = useNavigate()

  const handleAddNewItem = () => {
    navigate('/AddMed')
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4">
        <div className="flex items-center mb-8">
        <img src="/mainlogo.jpeg" alt="Pharma One logo" className="mr-2 w-8 h-8" /> {/* Set a fixed width and height */}
          <h1 className="text-xl font-bold">Pharma One</h1>
        </div>
        <div className="mb-8">
          <div className="flex items-center mb-4">
          <img src="/user.jpeg" alt="User avatar" className="rounded-full mr-2 w-10 h-10" /> {/* Set a fixed width and height */}

            <div>
              <p className="font-semibold">Muneer</p>
              <p className="text-xs text-green-400">Super Admin</p>
            </div>
            <MoreVertical className="ml-auto" size={20} />
          </div>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => navigate('/dashboard')}
                className="flex items-center p-2 w-full text-left"
              >
                <Home className="mr-2" size={20} /> Dashboard
              </button>
            </li>
            <li className="bg-gray-700 rounded">
              <button 
                onClick={() => navigate('/inventory')}
                className="flex items-center p-2 w-full text-left"
              >
                <Box className="mr-2" size={20} /> Inventory
                <ChevronDown className="ml-auto" size={16} />
              </button>
            </li>
            <li className="pl-4 py-2 bg-teal-600 rounded">
              <button 
                onClick={() => navigate('/medicine-list')}
                className="flex items-center w-full text-left"
              >
                List of Medicines
              </button>
            </li>
            <li className="pl-4 py-2">
              <button 
                onClick={() => navigate('/medgroup')}
                className="flex items-center w-full text-left"
              >
                Medicine Groups
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate('/report')}
                className="flex items-center p-2 w-full text-left"
              >
                <BarChart className="mr-2" size={20} /> Reports
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate('/config')}
                className="flex items-center p-2 w-full text-left"
              >
                <Settings className="mr-2" size={20} /> Configuration
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col bg-gray-100 text-gray-800 overflow-hidden">
        <Header />
        <div className="flex-1 p-8 overflow-auto">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Inventory &gt; List of Medicines (298)</h2>
          </header>

          <p className="mb-6">List of medicines available for sales.</p>

          {/* Search and filters */}
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Medicine Inventory..."
                className="bg-white rounded-lg py-2 px-4 pr-10 w-80"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
            <div className="flex items-center">
              <Filter className="mr-2" size={20} />
              <select className="border rounded-lg p-2 bg-white">
                <option>- Select Group -</option>
              </select>
              <button
                className="ml-4 bg-red-500 text-white rounded-lg px-4 py-2 flex items-center"
                onClick={handleAddNewItem}
              >
                <span className="mr-2">+</span> Add New Item
              </button>
            </div>
          </div>

          {/* Medicines table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medicine Name <ChevronDown size={16} className="inline" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medicine ID <ChevronDown size={16} className="inline" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Group Name <ChevronDown size={16} className="inline" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock in Qty <ChevronDown size={16} className="inline" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {medicines.map((medicine, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{medicine.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{medicine.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{medicine.group}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{medicine.stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a href="#" className="text-blue-600 hover:text-blue-900">
                        View Full Detail <ChevronRight size={16} className="inline" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-700">Showing 1 - 8 results of 298</p>
            <div className="flex items-center">
              <button className="px-3 py-1 border rounded-l-lg bg-white text-gray-600 hover:bg-gray-100">
                &lt;
              </button>
              <button className="px-3 py-1 border-t border-b bg-white text-gray-600 hover:bg-gray-100">
                Page 01
              </button>
              <button className="px-3 py-1 border rounded-r-lg bg-white text-gray-600 hover:bg-gray-100">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}