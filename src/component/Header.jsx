import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: 'rgba(26, 26, 26, 0.8)', // Semi-transparent black
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(12px)', // Adds the glass effect
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      {/* Brand */}
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <NavLink
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontFamily: `'Poppins', sans-serif`,
            letterSpacing: '1px',
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
          fontFamily: `'Poppins', sans-serif`,
        }}
      >
        <li>
          <NavLink
            to="/home"
            style={({ isActive }) => ({
              color: isActive ? '#00bcd4' : 'white',
              textDecoration: 'none',
              padding: '8px 15px',
              display: 'block',
              borderRadius: '5px',
              transition: 'color 0.3s, background-color 0.3s',
            })}
            onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? '#00bcd4' : 'white',
              textDecoration: 'none',
              padding: '8px 15px',
              display: 'block',
              borderRadius: '5px',
              transition: 'color 0.3s, background-color 0.3s',
            })}
            onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? '#00bcd4' : 'white',
              textDecoration: 'none',
              padding: '8px 15px',
              display: 'block',
              borderRadius: '5px',
              transition: 'color 0.3s, background-color 0.3s',
            })}
            onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Login"
            style={({ isActive }) => ({
              color: isActive ? '#ffffff' : 'white',
              textDecoration: 'none',
              backgroundColor: isActive ? '#00bcd4' : '#007bff',
              padding: '8px 15px',
              borderRadius: '5px',
              display: 'block',
              transition: 'background-color 0.3s, transform 0.2s',
            })}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
