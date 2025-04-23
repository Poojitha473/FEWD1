import React, { useState } from "react";

function MouseEventDemo() {
  const [message, setMessage] = useState("");

  const handleMouseEnter = () => {
    setMessage("Mouse is over the button!");
  };

  const handleMouseLeave = () => {
    setMessage("Mouse left the button!");
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f0f4f8",
      fontFamily: "Arial, sans-serif",
    },
    button: {
      padding: "12px 24px",
      backgroundColor: "#3b82f6",
      color: "white",
      border: "none",
      borderRadius: "12px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    buttonHover: {
      backgroundColor: "#2563eb",
    },
    message: {
      marginTop: "20px",
      fontSize: "18px",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
      >
        Hover Over Me
      </button>
      <p style={styles.message}>{message}</p>
    </div>
  );
}
export default MouseEventDemo;