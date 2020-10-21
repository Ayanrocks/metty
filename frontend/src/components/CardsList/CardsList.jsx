import React from "react";

export default function CardsList() {
  return (
    <div
      style={{
        margin: "32px auto",
      }}
    >
      <div
        style={{
          padding: "20px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          textAlign: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          backgroundColor: "rgba(0,0,0, 0.7)",
          opacity: "57%",
          zIndex: 2
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#aaa",
            }}
          >
            Kolkata
          </h1>
        </div>
        <div>
          <span
            style={{
              fontSize: 120,
              color: "#bbb",
            }}
          >
            16&#176;
            <span style={{ fontSize: 64 }}>C</span>
          </span>
        </div>
      </div>
    </div>
  );
}
