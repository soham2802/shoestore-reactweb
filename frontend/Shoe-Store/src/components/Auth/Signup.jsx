  import React from "react";
  import { useNavigate, Link } from "react-router-dom";
  import "../Auth/Auth.css";
  import api from "../../api";

  function Signup() {
    const navigate = useNavigate();

    const handleSignup = async (e) => {
      e.preventDefault();

      const form = e.target;

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const password = form.password.value.trim();

      if (!name || !email || !password) {
        alert("All fields are required");
        return;
      }

      try {
        const res = await api.post("/users/register", {
          name,
          email,
          password,
        });

        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        
        alert(res.data.message || "Signup successful ✅");

        navigate("/profile");
      } catch (error) {
        alert(error.response?.data?.message || "Signup failed ❌");
      }
    };

    return (
      <div className="auth-container">
        <form className="auth-card" onSubmit={handleSignup}>
          <h3 className="text-center mb-4">Create Account</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="form-control mb-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
          />

          <button className="btn btn-dark w-100">Sign Up</button>

          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    );
  }

  export default Signup;
