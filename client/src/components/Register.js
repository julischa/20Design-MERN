import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("userName", userName);
    // console.log("email", email);
    // console.log("password", password);

    try {
      const { data } = await axios.post(
        "http://localhost:5002/api/user/signup",
        {
          userName,
          email,
          password,
        }
      );

      console.log(data);
      // display success message to user
    } catch (error) {
      console.log(error.response.data);
      setErrorMsg(error.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <div className="flex flex-col items-center">
        <h1 className="text-center mb-4">Register</h1>
        {errorMsg && <div className="error-msg">{errorMsg}</div>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="text-center" id="label" htmlFor="userName">
            Choose your Username
          </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="form-control"
            required
            style={{ color: "red" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
      </div>
      <button className="text-center" type="submit" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
};

export default Register;
