import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const history = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/users/login", formData);
      const token = response.data.token;
      localStorage.setItem("token", token); // Store the token in localStorage
      history.push("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  if (localStorage.getItem("token")) {
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center mb-4">Login</h1>
      <form onSubmit={handleFormSubmit} className="mb-4">
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
