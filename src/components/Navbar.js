import React from 'react';
import { ChevronLeft, Mic, Settings } from 'react-feather';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearCoinDetail } from '../Redux/detail/detailSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(clearCoinDetail());
  };

  return (
    <nav className="navBar">
      <div className="navItems">
        <NavLink to="/" onClick={handleGoBack}>
          <ChevronLeft className="whiteColor" />
        </NavLink>
        <h1 className="whiteColor">Crypto Currencies</h1>
        <ul className="navLinks">
          <li><Mic className="whiteColor" /></li>
          <li><Settings className="whiteColor" /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
