import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronDown, MoreVertical, Trash2, Home, Box, BarChart, Settings } from 'lucide-react';

const medicines = [
  { name: 'Augmentin 625 Duo Tablet', count: 22 },
  { name: 'Azithral 500 Tablet', count: 8 },
];

export default function GenericMedicineGroup() {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <main style={styles.main}>
        {/* Header */}
        <header style={styles.header}>
  <h2 style={styles.pageTitle}>Inventory &gt; Medicine Groups &gt; Generic Medicine (02)</h2>
  <div style={{ ...styles.dateTime, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
    <span style={{ ...styles.greeting, marginRight: '10px' }}>🌞 Good Morning</span>
    <p style={styles.date}>14 January 2022 09:45:04</p>
  </div>
</header>


        <p style={styles.pageDescription}>Detailed view of a medicine group.</p>

        {/* Search and Add Medicine */}
        <div style={styles.actionBar}>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search for Medicine"
              style={styles.searchInput}
            />
            <Search style={styles.searchIcon} size={20} />
          </div>
          <button style={styles.addButton} onClick={() => navigate('/genericmed2')}>
            <span style={styles.addIcon}>+</span> Add Medicine
          </button>
        </div>

        {/* Medicines table */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>
                  Medicine Name <ChevronDown size={16} style={styles.sortIcon} />
                </th>
                <th style={styles.tableHeader}>
                  No of Medicines <ChevronDown size={16} style={styles.sortIcon} />
                </th>
                <th style={styles.tableHeader}>Action</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine, index) => (
                <tr key={index} style={styles.tableRow}>
                  <td style={styles.tableCell}>{medicine.name}</td>
                  <td style={styles.tableCell}>{medicine.count}</td>
                  <td style={styles.tableCell}>
                    <button style={styles.removeButton}>
                      <Trash2 size={16} style={styles.removeIcon} />
                      Remove from Group
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Delete Group button */}
        <button style={styles.deleteButton}>
          <Trash2 size={16} style={styles.deleteIcon} />
          Delete Group
        </button>
      </main>
    </div>
  );
}

// Sidebar Component
const Sidebar = () => (
  <aside style={styles.sidebar}>
    <div style={styles.logo}>
    <img src="/mainlogo.jpeg" alt="Pharma One logo" className="mr-2 w-8 h-8" /> {/* Set a fixed width and height for logo */}
      <h1 style={styles.logoText}>Pharma One</h1>
    </div>
    <div style={styles.userInfo}>
    <img src="/user.jpeg" alt="User avatar" className="rounded-full mr-2 w-10 h-10" /> {/* Set a fixed width and height for user avatar */}
      <div>
        <p style={styles.userName}>Muneer</p>
        <p style={styles.userRole}>Super Admin</p>
      </div>
      <MoreVertical size={20} style={styles.moreIcon} />
    </div>
    <nav>
      <ul style={styles.navList}>
        <SidebarItem label="Dashboard" to="/" icon={<Home size={20} />} />
        <SidebarItem label="Inventory"icon={<Box size={20} />} />
        <nav style={styles.subNav}>
          <SidebarItem label="List of Medicines" to="/medlist" />
          <SidebarItem label="Medicine Groups" active  to="/medgroup" active />
        </nav>
        <SidebarItem label="Reports" to="/report" icon={<BarChart size={16} />} />
        <SidebarItem label="Configuration" icon={<Settings size={20} />} />
      </ul>
    </nav>
  </aside>
);

// Sidebar Item Component
const SidebarItem = ({ label, active = false, to, icon }) => (
  <li style={styles.navItem}>
    <a
      href={to} // Use href for links
      style={{
        ...styles.navLink,
        backgroundColor: active ? '#0D9488' : 'transparent',
        color: active ? 'white' : 'white',
      }}
    >
      {icon && <span style={styles.navIcon}>{icon}</span>}
      <span>{label}</span>
    </a>
  </li>
);

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#1F2937',
    color: 'white',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#111827',
    padding: '1rem',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  logoImage: {
    marginRight: '0.5rem',
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  avatar: {
    borderRadius: '50%',
    marginRight: '0.5rem',
  },
  userName: {
    fontWeight: 'semibold',
  },
  userRole: {
    fontSize: '0.75rem',
    color: '#4ADE80',
  },
  moreIcon: {
    marginLeft: 'auto',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
  },
  navItem: {
    marginBottom: '0.5rem',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
    textDecoration: 'none',
    color: 'white',
  },
  navIcon: {
    marginRight: '0.5rem',
  },
  subNav: {
    marginLeft: '1.5rem',
  },
  main: {
    flex: 1,
    padding: '2rem',
    backgroundColor: '#F3F4F6',
    color: '#1F2937',
    overflowY: 'auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  pageTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  dateTime: {
    textAlign: 'right',
  },
  greeting: {
    marginRight: '1rem',
  },
  date: {
    fontSize: '0.875rem',
  },
  pageDescription: {
    marginBottom: '1.5rem',
  },
  actionBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  searchContainer: {
    position: 'relative',
  },
  searchInput: {
    padding: '0.5rem 2.5rem 0.5rem 1rem',
    borderRadius: '0.375rem',
    border: '1px solid #D1D5DB',
    width: '300px',
  },
  searchIcon: {
    position: 'absolute',
    right: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9CA3AF',
  },
  addButton: {
    backgroundColor: '#EF4444',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  addIcon: {
    marginRight: '0.5rem',
  },
  tableContainer: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    marginBottom: '1.5rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    textAlign: 'left',
    padding: '1rem',
    borderBottom: '1px solid #E5E7EB',
    color: '#6B7280',
    fontWeight: 'bold',
  },
  tableRow: {
    '&:hover': {
      backgroundColor: '#F9FAFB',
    },
  },
  tableCell: {
    padding: '1rem',
    borderBottom: '1px solid #E5E7EB',
  },
  removeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#EF4444',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  removeIcon: {
    marginRight: '0.5rem',
  },
  deleteButton: {
    backgroundColor: '#EF4444',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  deleteIcon: {
    marginRight: '0.5rem',
  },
};
