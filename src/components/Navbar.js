import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="navbar">
      <div className="nav-home">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          ✵
        </NavLink>
      </div>
      <div className="nav-right">
        <div className="nav-links">
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        </div>
        <div className="nav-toggle">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '☼' : '✧'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;