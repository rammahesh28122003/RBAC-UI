import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Remove auth status
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/main">Dashboard</Link></li>
        <li><Link to="/role-management">Role Management</Link></li>
        <li><Link to="/user-management">User Management</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
