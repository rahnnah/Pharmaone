import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; // Path to your Dashboard component
import Inventory from './pages/Inventory';   // Path to your MedForm2 component
import MedList from './pages/MedList';       // Path to your new MedList component
import AddMed from './pages/AddMed';  
import MedGroup from './pages/MedGroup'; 
import Genericmed from './pages/Genericmed'; 
import Genericmed2 from './pages/Genericmed2';
import Genericmed3 from './pages/Genericmed3';
import Report from './pages/Report';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/medlist" element={<MedList />} />  {/* Add this line for MedList */}
        <Route path="/addmed" element={<AddMed />} />    {/* Add this line for AddMed */}
        <Route path="/medgroup" element={<MedGroup />} />    {/* Add this line for AddMed */}
        <Route path="/genericmed" element={<Genericmed />} />    {/* Add this line for AddMed */}
        <Route path="/genericmed2" element={<Genericmed2 />} />    {/* Add this line for AddMed */}
        <Route path="/genericmed3" element={<Genericmed3 />} />    {/* Add this line for AddMed */}
        <Route path="/Report" element={<Report />} />    {/* Add this line for AddMed */}
      </Routes>
    </Router>
  );
}

export default App;
