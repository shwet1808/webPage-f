import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '30px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Footer Content */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '10px' }}>MyBrand</h3>
        <p style={{ fontSize: '14px', color: '#bbb' }}>
          Providing quality products and services since 2020.
        </p>
      </div>

      {/* Social Media Icons */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', fontSize: '24px' }}
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', fontSize: '24px' }}
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', fontSize: '24px' }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', fontSize: '24px' }}
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Footer Links */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        <a href="/privacy" style={{ color: '#bbb', fontSize: '14px' }}>
          Privacy Policy
        </a>
        <a href="/terms" style={{ color: '#bbb', fontSize: '14px' }}>
          Terms of Service
        </a>
        <a href="/contact" style={{ color: '#bbb', fontSize: '14px' }}>
          Contact Us
        </a>
      </div>

      {/* Copyright */}
      <div style={{ fontSize: '14px', color: '#bbb' }}>
        &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
