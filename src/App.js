import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import RoleManagement from './components/RoleManagement';
import UserManagement from './components/UserManagement';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will appear on every page */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} /> {/* Default route redirects to login */}
        
        {/* Authenticated routes */}
        <Route path="/main" element={<MainPage />} />
        <Route path="/role-management" element={<RoleManagement />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
