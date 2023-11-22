// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="company-name">Expense Ease</div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="profile">My Profile</div>
    </nav>
  );
};
export default Navbar;