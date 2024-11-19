import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          backgroundColor: "#1a1a2e",
          color: "white",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>MyBrand</h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "15px" }}>
              <NavLink
                to="/dashboard"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px",
                  borderRadius: "5px",
                  display: "block",
                }}
                activeStyle={{ backgroundColor: "#00bcd4" }}
              >
                Dashboard
              </NavLink>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <NavLink
                to="/about"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px",
                  borderRadius: "5px",
                  display: "block",
                }}
                activeStyle={{ backgroundColor: "#00bcd4" }}
              >
                About
              </NavLink>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <NavLink
                to="/contact"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px",
                  borderRadius: "5px",
                  display: "block",
                }}
                activeStyle={{ backgroundColor: "#00bcd4" }}
              >
                Contact
              </NavLink>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <NavLink
                to="/settings"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "10px",
                  borderRadius: "5px",
                  display: "block",
                }}
                activeStyle={{ backgroundColor: "#00bcd4" }}
              >
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#f4f4f4",
          overflowY: "auto",
        }}
      >
        <header
          style={{
            marginBottom: "20px",
            padding: "10px 15px",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1>Welcome to the Dashboard</h1>
        </header>
        <section
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>Overview</h2>
          <p>
            This is the main content section. Here, you can display important
            information, charts, or summaries relevant to your users.
          </p>
          <p>
            Use this section to provide insights, updates, or any actionable
            content.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;

// code for side-bar [main section] 

