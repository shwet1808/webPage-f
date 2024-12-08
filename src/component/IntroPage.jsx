import React from "react";

const IntroPage = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                  url("https://media.istockphoto.com/id/1080861192/vector/gold-glitter-texture-vector.jpg?s=612x612&w=0&k=20&c=ff3jkRbJXKnoJR_wlhJqXg67KcSjz4Uwms5nUACZ4t8=") center/cover no-repeat`,
      color: "white",
      textAlign: "center",
      padding: "20px",
      boxSizing: "border-box",
    },
    content: {
      maxWidth: "800px",
      animation: "fadeIn 2s ease-in-out",
    },
    heading: {
      fontSize: "4rem",
      fontWeight: "bold",
      marginBottom: "20px",
      animation: "slideIn 2s ease-in-out",
    },
    paragraph: {
      fontSize: "1.5rem",
      marginBottom: "30px",
      lineHeight: "1.8",
    },
    buttonGroup: {
      marginTop: "20px",
    },
    button: {
      padding: "15px 25px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s",
      marginRight: "15px",
    },
    learnMore: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      color: "#333",
    },
    getStarted: {
      backgroundColor: "#007bff",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideIn {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        `}
      </style>
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to Our Platform</h1>
        <p style={styles.paragraph}>
          Experience the future of innovation and creativity with us.
        </p>
        <div style={styles.buttonGroup}>
          <button
            style={{ ...styles.button, ...styles.learnMore }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "white")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)")
            }
          >
            Learn More
          </button>
          <button
            style={{ ...styles.button, ...styles.getStarted }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#007bff")
            }
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
