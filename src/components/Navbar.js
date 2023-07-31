import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <div className="navItems">
      <ul className="navLinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="detail">Detail</Link></li>
      </ul>
    </div>
    <div className="logoTitleContainer">
      <h2 className="navTitle">data</h2>
    </div>
  </nav>
);

export default Navbar;
