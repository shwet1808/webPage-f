import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      {/* Brand */}
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <NavLink
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          MyBrand
        </NavLink>
      </div>

      {/* Navbar Links */}
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          gap: '15px',
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <NavLink
            to="/home"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
              padding: '8px 15px',
              display: 'block',
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
              padding: '8px 15px',
              display: 'block',
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
              padding: '8px 15px',
              display: 'block',
            })}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Login"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: 'none',
              backgroundColor: '#00bcd4',
              padding: '8px 15px',
              borderRadius: '5px',
              display: 'block',
            })}
          >
            Login 
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
