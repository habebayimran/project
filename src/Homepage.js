// Homepage.js

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Homepage;