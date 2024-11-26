import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar component
import './MainPage.css'; // Your main page styles

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate]);

  return (
    <div>
      {/* <Navbar /> Navbar component will be displayed here */}
      <div className="main-content">
        <center><h2>Welcome to the Dashboard!</h2>
        <p>Content for the authenticated user will be shown here.</p></center>
        <button onClick={() => navigate('/role-management')}>Manage Roles</button>
        <button onClick={() => navigate('/user-management')}>Manage Users</button>
      </div>
    </div>
  );
};

export default MainPage;
