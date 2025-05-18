// src/components/Login.js
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google icon

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      navigate("/inbox");
    } catch (error) {
      console.error("Google Sign-in Error", error.message);
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundColor: "black",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <nav style={{ padding: "1rem", fontSize: "1.5rem" }}>REACHINBOX</nav>

      <div
        style={{
          margin: "auto",
          width: "450px",
          backgroundColor: "#111",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1.5rem" }}>Create a new account</h2>

        <button
          onClick={handleGoogleLogin}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "0.6rem 2.4rem",
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "5px",
            marginLeft:"60px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "400",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.02)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          <FcGoogle size={22} />
          Sign Up with Google
        </button>

        <p style={{ marginTop: "2rem" }}>
          Already have an account?{" "}
          <span
            onClick={handleGoogleLogin}
            style={{ color: "skyblue", cursor: "pointer", textDecoration: "underline" }}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
