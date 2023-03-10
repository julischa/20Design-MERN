import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { user, signUp } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //error state for frontend validation
  const [errorFront, setErrorFront] = useState("");

  const validate = () => {
    switch (true) {
      case !email && !password && !userName: {
        setErrorFront("😳 Empty fields detected");
        return false;
      }

      case !email: {
        setErrorFront("🚨 Email is required");
        return false;
      }
      case !userName: {
        setErrorFront("🚨 Username is required");
        return false;
      }

      case !password: {
        setErrorFront("🚨 Password is required");
        return false;
      }

      default:
        return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if validate returns true calls the signUp fn from authContext
    if (validate()) {
      signUp(userName, email, password);
    }
  };

  useEffect(() => {
    if (user) navigate("/redpage");
  }, [user]);

  return (
    <div className="form-container">
      <div className="flex flex-col items-center">
        <h1 className="text-center mb-4">Register a new Account</h1>
        {errorMsg && <div className="error-msg">{errorMsg}</div>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setErrorFront("")}
            className="form-control"
            required
            style={{ color: "red" }}
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
            onFocus={() => setErrorFront("")}
            className="form-control"
            required
            style={{ color: "red" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input inputPassword">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onFocus={() => setErrorFront("")}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control "
              style={{ color: "red" }}
              required
            />
            <div className="input-group-append eyeIcon">
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
      {errorFront && (
        <span
          className="text-center mt-3 px-2 py-1 "
          style={{ color: "red", background: "pink" }}
        >
          {errorFront}
        </span>
      )}
      <button className="text-center" type="submit" onClick={handleSubmit}>
        Register
      </button>
      <Link to="/login" style={{ textDecoration: "none", color: "red" }}>
        <span className="text-center">
          Already registered? <br></br>→ Sign in instead.
        </span>
      </Link>
    </div>
  );
};

export default Register;
