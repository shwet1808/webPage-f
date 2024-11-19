
import React from "react";

const IntroPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f4f4f9",
        color: "#333",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          maxWidth: "800px",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#1a1a2e",
          }}
        >
          Welcome to <span style={{ color: "#00bcd4" }}>MyBrand</span>
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          Discover amazing products and services tailored just for you. Our
          platform offers the best tools to make your experience enjoyable and
          hassle-free.
        </p>

        {/* Call-to-Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <a
            href="/get-started"
            style={{
              textDecoration: "none",
              padding: "12px 25px",
              backgroundColor: "#00bcd4",
              color: "white",
              borderRadius: "5px",
              fontWeight: "bold",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#008c99")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#00bcd4")}
          >
            Get Started
          </a>
          <a
            href="/learn-more"
            style={{
              textDecoration: "none",
              padding: "12px 25px",
              backgroundColor: "#333",
              color: "white",
              borderRadius: "5px",
              fontWeight: "bold",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#333")}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div>
        <img
          src="https://images.pexels.com/photos/29410753/pexels-photo-29410753/free-photo-of-scenic-colonial
          -mansion-with-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Intro Image"
          style={{
            maxWidth: "100%",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </div>
  );
};

export default IntroPage;

