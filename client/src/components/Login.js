import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const history = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
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

  // Check if token is stored after every refresh
  if (localStorage.getItem("token")) {
    // User is logged in
    // You can redirect to home page or set a flag in state to indicate logged in status
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
