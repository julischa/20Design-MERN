import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { user, loginFunction } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginFunction(formData);
    setFormData({ email: "", password: "" });
  };

  useEffect(() => {
    if (user) {
      navigate("/redpage");
    }
  }, [user]);

  return (
    <div className="form-container">
      <div className="flex flex-col items-center">
        <h1 className="text-center mb-4">Sign into your Account</h1>
        {errorMessage && <div className="error-msg">{errorMessage}</div>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            style={{ color: "red" }}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input inputPassword">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            <div className="input-group-append eyeIcon">
              {showPassword ? (
                <span
                  className="cursor-pointer"
                  onClick={() => setShowPassword(false)}
                >
                  <FaEyeSlash style={{ color: "red" }} />
                </span>
              ) : (
                <span
                  className="cursor-pointer"
                  onClick={() => setShowPassword(true)}
                >
                  <FaEye style={{ color: "red" }} />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <button className="text-center" type="submit" onClick={handleSubmit}>
        Sign In
      </button>
      <span style={{ color: "red" }}>
        Don't have an account?{" "}
        <Link to="/register" style={{ textDecoration: "none", color: "red" }}>
          <br></br>→ Sign up here
        </Link>
      </span>
    </div>
  );
}

export default Login;
