import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  //extract login fn from context
  const { user, loginFunction } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // console.log("formData", formData);
  };

  if (localStorage.getItem("token")) {
  }

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
    <div className="flex flex-col items-center">
      <h1 className="text-center mb-4">Sign in to your Account</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label className="text-center" id="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
              required
            />
            <div className="input-group-append">
              {showPassword ? (
                <span
                  className="cursor-pointer"
                  onClick={() => setShowPassword(false)}
                  style={{ color: "red" }}
                >
                  <FaEyeSlash style={{ color: "red" }} />
                </span>
              ) : (
                <span
                  className="cursor-pointer"
                  onClick={() => setShowPassword(true)}
                  style={{ color: "red" }}
                >
                  <FaEye style={{ color: "red" }} />
                </span>
              )}
            </div>
          </div>
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
