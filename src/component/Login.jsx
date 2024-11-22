import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#FAF3F0', // Pearl color
        color: '#333',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '400px',
          background: '#fff',
          padding: '30px',
          borderRadius: '15px',
          boxShadow:
            '0px 10px 15px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.9)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow =
            '0px 10px 25px rgba(0, 0, 0, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.9)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow =
            '0px 10px 15px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.9)';
        }}
      >
        {/* Logo */}
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: 'rgb(0, 188, 212)', // Secondary color
          }}
        >
          Login
        </h2>

        {/* Email Field */}
        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#555',
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'rgb(0, 188, 212)')}
            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
          />
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="password"
            style={{
              display: 'block',
              marginBottom: '5px',
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#555',
            }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = 'rgb(0, 188, 212)')}
            onBlur={(e) => (e.target.style.borderColor = '#ddd')}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'rgb(0, 188, 212)', // Secondary color
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = 'rgb(0, 150, 170)')
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = 'rgb(0, 188, 212)')
          }
        >
          Login
        </button>

        {/* Additional Options */}
        <div
          style={{
            marginTop: '20px',
            textAlign: 'center',
            fontSize: '14px',
            color: '#333',
          }}
        >
          Don't have an account?{' '}
          <a
            href="/signup"
            style={{
              color: 'rgb(0, 188, 212)',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = 'rgb(0, 150, 170)')}
            onMouseOut={(e) => (e.target.style.color = 'rgb(0, 188, 212)')}
          >
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
