import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContex";
const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.user.token);
        setUser(data.user); //  store user in context
        alert("Login successful");
        navigate("/");
        
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };
  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account?
          <Link to={"/register"} className="login-nav">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
