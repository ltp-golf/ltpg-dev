"use client";

import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url('/closeup-golf-ball.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          backgroundImage: `url('/background.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: 0.9,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          zIndex: 2,
          textAlign: "center",
          color: "#1e1e1e",
          maxWidth: "90vw",
        }}
      >
        <img
          src="/logo-ltpg.png"
          alt="LTPG Logo"
          style={{ width: "120px", margin: "0 auto 1.5rem" }}
        />

        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Coming Soon</h1>
        <p style={{ margin: "0.5rem 0 2rem", fontSize: "1.1rem" }}>
          Subscribe to get notified when we launch.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <input
            type="email"
            placeholder="Your E-mail"
            required
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              minWidth: "250px",
              fontSize: "1rem",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#caa96a",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
